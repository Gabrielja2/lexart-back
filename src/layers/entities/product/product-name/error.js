class InvalidProductNameError extends Error {
    constructor(name) {
        super();
        this.name = "InvalidProductNameError";
        this.message = `Esse nome (${name}) é inválido`;
    }
}

module.exports = InvalidProductNameError;
