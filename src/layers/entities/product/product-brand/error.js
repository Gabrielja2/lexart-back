class InvalidProductBrandError extends Error {
    constructor(brand) {
        super();
        this.name = "InvalidProductBrandError";
        this.message = `Essa marca (${brand}) é inválida`;
    }
}

module.exports = InvalidProductBrandError;
