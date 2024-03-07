const { InternalServerError } = require("../errors");

const ok = (data) => ({
    statusCode: 200,
    response: data,
});

const created = (data) => ({
    statusCode: 201,
    response: data,
});

const badRequest = (error) => ({
    statusCode: 400,
    response: {
        message: error.message,
        code: error.name,
    },
});

const unauthorized = (error) => ({
    statusCode: 401,
    response: {
        message: error.message,
        code: error.name,
    },
});

const notFound = (error) => ({
    statusCode: 404,
    response: {
        message: error.message,
        code: error.name,
    },
});

const server = (error = new InternalServerError()) => ({
    statusCode: 500,
    response: {
        message: error.message,
        code: error.name,
    },
});

module.exports = {
    ok,
    created,
    badRequest,
    unauthorized,
    notFound,
    server,
};
