const AuthenticationAdapter = require("../../../layers/external/authentication/index.js");
const CryptographyAdapter = require("../../../layers/external/cryptography");

const cryptography = new CryptographyAdapter();

const authentication = new AuthenticationAdapter();

module.exports = { cryptography, authentication };
