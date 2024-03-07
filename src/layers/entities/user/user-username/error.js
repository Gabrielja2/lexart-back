class InvalidUserNameError extends Error {
    constructor(name) {
        super();
        this.name = "InvalidUserNameError";
        this.message = `Esse nome (${name}) é inválido`;
    }
}

module.exports = InvalidUserNameError;
