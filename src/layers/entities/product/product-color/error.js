class InvalidProductColorError extends Error {
    constructor(color) {
        super();
        this.name = "InvalidProductColorError";
        this.message = `Essa cor (${color}) é inválida`;
    }
}

module.exports = InvalidProductColorError;
