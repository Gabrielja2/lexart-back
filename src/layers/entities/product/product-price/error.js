class InvalidProductPriceError extends Error {
    constructor(price) {
        super();
        this.name = "InvalidProductPriceError";
        this.message = `Esse preço (${price}) é inválido`;
    }
}

module.exports = InvalidProductPriceError;
