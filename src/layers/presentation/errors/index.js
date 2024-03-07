class MissingParamError extends Error {
    constructor(paramName) {
        super("Missing param: " + paramName);
        this.name = "MissingParamError";
    }
}

class InvalidTypeError extends Error {
    constructor(paramName) {
        super("Param: " + paramName + " has wrong type");
        this.name = "InvalidTypeError";
    }
}

class InternalServerError extends Error {
    constructor() {
        super();
        this.message = "Internal server error";
        this.name = "InternalServerError";
    }
}

module.exports = {
    MissingParamError,
    InvalidTypeError,
    InternalServerError,
};
