const InvalidProductBrandError = require("./error");

class ProductBrand {
    constructor(productBrand) {
        this.productBrand = productBrand;
        Object.freeze(this);
    }

    get value() {
        return this.productBrand;
    }

    static create(productBrand) {
        if (!this.validate(productBrand))
            return new InvalidProductBrandError(productBrand);

        return new ProductBrand(productBrand);
    }

    static validate(productBrand) {
        if (productBrand.length > 64 || productBrand.length < 3) return false;

        return true;
    }
}

module.exports = ProductBrand;
