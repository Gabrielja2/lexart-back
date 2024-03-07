require("dotenv").config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const NODE_ENV = process.env.NODE_ENV;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE_IN_SECONDS = process.env.JWT_EXPIRE_IN_SECONDS;

module.exports = {
    PORT,
    DATABASE_URL,
    NODE_ENV,
    JWT_SECRET,
    JWT_EXPIRE_IN_SECONDS,
};
