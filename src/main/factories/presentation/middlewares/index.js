const AuthenticateUserMiddleware = require("../../../../layers/presentation/middlewares/auth/authenticate-user-middleware.js");
const { authentication } = require("../../external/index.js");

const authenticateUserMiddleware = new AuthenticateUserMiddleware(
    authentication
);

module.exports = authenticateUserMiddleware;
