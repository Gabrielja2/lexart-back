const InvalidProductPriceError = require("./error");

class ProductPrice {
    constructor(productPrice) {
        this.productPrice = productPrice;
        Object.freeze(this);
    }

    get value() {
        return this.productPrice;
    }

    static create(productPrice) {
        if (!this.validate(productPrice))
            return new InvalidProductPriceError(productPrice);

        return new ProductPrice(productPrice);
    }

    static validate(productPrice) {
        if (productPrice > 99999 || productPrice <= 0) return false;

        return true;
    }
}

module.exports = ProductPrice;
