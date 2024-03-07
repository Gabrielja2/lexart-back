const ProductName = require("../product-name/value-object.js");
const ProductBrand = require("../product-brand/value-object.js");
const ProductModel = require("../product-model/value-object.js");
const ProductColor = require("../product-color/value-object.js");
const ProductPrice = require("../product-price/value-object.js");

class Product {
    constructor(name, brand, model, color, price) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        Object.freeze(this);
    }

    static create(name, brand, model, color, price) {
        const nameOrError = ProductName.create(name);
        if (nameOrError instanceof Error) return nameOrError;

        const brandOrError = ProductBrand.create(brand);
        if (brandOrError instanceof Error) return brandOrError;

        const modelOrError = ProductModel.create(model);
        if (modelOrError instanceof Error) return modelOrError;

        const colorOrError = ProductColor.create(color);
        if (colorOrError instanceof Error) return colorOrError;

        const priceOrError = ProductPrice.create(price);
        if (priceOrError instanceof Error) return priceOrError;

        return new Product(
            nameOrError,
            brandOrError,
            modelOrError,
            colorOrError,
            priceOrError
        );
    }
}

module.exports = Product;
