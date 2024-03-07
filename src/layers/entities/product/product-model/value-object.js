const InvalidProductModelError = require("./error");

class ProductModel {
    constructor(productModel) {
        this.productModel = productModel;
        Object.freeze(this);
    }

    get value() {
        return this.productModel;
    }

    static create(productModel) {
        if (!this.validate(productModel))
            return new InvalidProductModelError(productModel);

        return new ProductModel(productModel);
    }

    static validate(productModel) {
        if (productModel.length > 64 || productModel.length < 3) return false;

        return true;
    }
}

module.exports = ProductModel;
