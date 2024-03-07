class InvalidParamError extends Error {
    constructor(paramName) {
        super();
        this.name = "InvalidParamError";
        this.message = paramName;
    }
}

class NotFoundError extends Error {
    constructor(paramName) {
        super();
        this.name = "NotFoundError";
        this.message = paramName;
    }
}

class UnauthorizedError extends Error {
    constructor(paramName) {
        super();
        this.name = "UnauthorizedError";
        this.message = paramName;
    }
}

module.exports = {
    InvalidParamError,
    NotFoundError,
    UnauthorizedError,
};
