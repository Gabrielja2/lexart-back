const { created, badRequest } = require("../../helpers");
const Validate = require("../../utils/index.js");

class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(req, res) {
        const { username, email, password, confirmPassword } = req.data;
        const validation = Validate.fields(
            [
                { name: "username", type: "string" },
                { name: "email", type: "string" },
                { name: "password", type: "string" },
                { name: "confirmPassword", type: "string" },
            ],
            {
                username,
                email,
                password,
                confirmPassword,
            }
        );

        if (validation instanceof Error) return badRequest(validation);

        const response = await this.createUserUseCase.execute({
            username,
            email,
            password,
            confirmPassword,
        });

        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}

module.exports = CreateUserController;
