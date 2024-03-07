const ProductName = require("../../../layers/entities/product/product-name/value-object.js");
const ProductBrand = require("../../../layers/entities/product/product-brand/value-object.js");
const ProductModel = require("../../../layers/entities/product/product-model/value-object.js");
const ProductColor = require("../../../layers/entities/product/product-color/value-object.js");
const ProductPrice = require("../../../layers/entities/product/product-price/value-object.js");

class ValidateService {
    static validate(data) {
        const { name, brand, model, price, color } = data;
        const errors = {};

        if (name) {
            errors.productNameOrError = ProductName.create(name);
            if (errors.productNameOrError instanceof Error)
                return errors.productNameOrError;
        }

        if (brand) {
            errors.productBrandOrError = ProductBrand.create(brand);
            if (errors.productBrandOrError instanceof Error)
                return errors.productBrandOrError;
        }

        if (model) {
            errors.productModelOrError = ProductModel.create(model);
            if (errors.productModelOrError instanceof Error)
                return errors.productModelOrError;
        }

        if (price) {
            errors.productPriceOrError = ProductPrice.create(price);
            if (errors.productPriceOrError instanceof Error)
                return errors.productPriceOrError;
        }

        if (color) {
            errors.productColorOrError = ProductColor.create(color);
            if (errors.productColorOrError instanceof Error)
                return errors.productColorOrError;
        }

        return errors;
    }
}

module.exports = ValidateService;
