const { ok, unauthorized, badRequest } = require("../../helpers");
const Validate = require("../../utils");

class LoginUserController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }

    async handle(req, _res) {
        const { email, password } = req.data;

        const validation = Validate.fields(
            [
                { name: "email", type: "string" },
                { name: "password", type: "string" },
            ],
            { email, password }
        );

        if (validation instanceof Error) return badRequest(validation);

        const response = await this.loginUseCase.execute({
            email,
            password,
        });

        if (response instanceof Error) return unauthorized(response);

        return ok(response);
    }
}

module.exports = LoginUserController;
