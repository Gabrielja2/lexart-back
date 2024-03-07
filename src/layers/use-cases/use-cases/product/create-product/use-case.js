const Product = require("../../../../entities/product/product/index.js");

class CreateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute({ name, brand, model, price, color }) {
        const productOrError = Product.create(name, brand, model, color, price);
        if (productOrError instanceof Error) return productOrError;

        await this.productRepository.create({
            name: productOrError.name.value,
            brand: productOrError.brand.value,
            model: productOrError.model.value,
            price: productOrError.price.value,
            color: productOrError.color.value,
        });

        return name;
    }
}

module.exports = CreateProductUseCase;
