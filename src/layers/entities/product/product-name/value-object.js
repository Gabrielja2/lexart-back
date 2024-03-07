const InvalidProductNameError = require("./error");

class ProductName {
    constructor(productName) {
        this.productName = productName;
        Object.freeze(this);
    }

    get value() {
        return this.productName;
    }

    static create(productName) {
        if (!this.validate(productName))
            return new InvalidProductNameError(productName);

        return new ProductName(productName);
    }

    static validate(productName) {
        if (!productName) return false;

        if (productName.length > 64 || productName.length < 3) return false;

        return true;
    }
}

module.exports = ProductName;
