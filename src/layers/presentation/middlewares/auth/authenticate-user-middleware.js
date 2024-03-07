const { UnauthorizedError } = require("../../../use-cases/errors");
const { ok, unauthorized } = require("../../helpers");

class AuthenticateUserMiddleware {
    constructor(jsonWebToken) {
        this.jsonWebToken = jsonWebToken;
    }

    async handle(request) {
        const { authorization } = request.headers;

        if (!authorization)
            return unauthorized(new UnauthorizedError("Você não está logado"));

        const [bearer, token] = authorization.split(" ");

        if (bearer !== "Bearer")
            return unauthorized(new UnauthorizedError("Código inválido"));

        const decode = this.jsonWebToken.verifyJsonWebToken(token);

        if (decode instanceof Error) return unauthorized(decode);

        return ok(decode.id);
    }
}

module.exports = AuthenticateUserMiddleware;
