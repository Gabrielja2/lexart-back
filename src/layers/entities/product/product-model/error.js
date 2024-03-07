class InvalidProductModelError extends Error {
    constructor(model) {
        super();
        this.name = "InvalidProductModelError";
        this.message = `Esse modelo (${model}) é inválido`;
    }
}

module.exports = InvalidProductModelError;
