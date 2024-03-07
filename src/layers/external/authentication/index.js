const { JWT_SECRET } = require("../../../main/shared/index.js");
const jsonWebToken = require("jsonwebtoken");
const JsonWebTokenInvalidError = require("../../use-cases/ports/authentication/error.js");

class AuthenticationAdapter {
    secretKey = JWT_SECRET;
    jsonWebToken = jsonWebToken;

    createJsonWebToken(payload, expiryTimeInSeconds) {
        return this.jsonWebToken.sign(payload, this.secretKey, {
            expiresIn: expiryTimeInSeconds * 1000,
        });
    }

    verifyJsonWebToken(token) {
        try {
            return this.jsonWebToken.verify(token, this.secretKey);
        } catch {
            return new JsonWebTokenInvalidError();
        }
    }
}

module.exports = AuthenticationAdapter;
