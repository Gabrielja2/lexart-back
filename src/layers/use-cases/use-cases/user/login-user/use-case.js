const { JWT_EXPIRE_IN_SECONDS } = require("../../../../../main/shared");
const { InvalidParamError } = require("../../../../use-cases/errors");

class LoginUserUserCase {
    constructor(userRepository, cryptography, authentication) {
        this.userRepository = userRepository;
        this.cryptography = cryptography;
        this.authentication = authentication;
    }
    async execute({ email, password }) {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) return new InvalidParamError("Email ou senha inválidos");

        const isValid = await this.cryptography.compareHash(
            user.password,
            password
        );
        if (!isValid) return new InvalidParamError("Email ou senha inválidos");

        const token = this.authentication.createJsonWebToken(
            { id: user.id, email: user.email, name: user.username },
            JWT_EXPIRE_IN_SECONDS
        );
        return token;
    }
}

module.exports = LoginUserUserCase;
