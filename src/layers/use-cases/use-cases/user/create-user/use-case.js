const { InvalidParamError } = require("../../../../use-cases/errors");
const User = require("../../../../entities/user/user");

class CreateUserUseCase {
    constructor(userRepository, cryptography) {
        this.userRepository = userRepository;
        this.cryptography = cryptography;
    }
    async execute({ username, email, password, confirmPassword }) {
        if (password !== confirmPassword)
            return new InvalidParamError("As senhas devem ser iguais");

        if (await this.userRepository.getUserByEmail(email))
            return new InvalidParamError("Email ja cadastrado");

        const userOrError = User.create(username, email, password);
        if (userOrError instanceof Error) return userOrError;

        const passwordHash = await this.cryptography.hash(
            userOrError.password.value
        );

        const user = await this.userRepository.create({
            username: userOrError.username.value,
            email: userOrError.email.value,
            password: passwordHash,
        });

        return userOrError.email.value;
    }
}

module.exports = CreateUserUseCase;
