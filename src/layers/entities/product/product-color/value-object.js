const InvalidProductColorError = require("./error");

class ProductColor {
    constructor(productColor) {
        this.productBrand = productColor;
        Object.freeze(this);
    }

    get value() {
        return this.productBrand;
    }

    static create(productColor) {
        if (!this.validate(productColor))
            return new InvalidProductColorError(productColor);

        return new ProductColor(productColor);
    }

    static validate(productColor) {
        if (productColor.length > 64 || productColor.length < 3) return false;

        return true;
    }
}

module.exports = ProductColor;
