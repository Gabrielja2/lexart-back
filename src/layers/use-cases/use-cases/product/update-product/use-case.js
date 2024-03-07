const { NotFoundError } = require("../../../errors/index.js");
const ValidateService = require("../../../utils/index.js");
class UpdateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, data) {
        const { name, brand, model, price, color } = data;
        const product = await this.productRepository.getById(id);
        if (!product) return new NotFoundError("Produto não encontrado");

        const productOrError = ValidateService.validate({
            name,
            brand,
            model,
            price,
        });
        if (productOrError instanceof Error) return productOrError;

        await this.productRepository.update(id, {
            name: productOrError?.productNameOrError?.value,
            brand: productOrError?.productBrandOrError?.value,
            model: productOrError?.productModelOrError?.value,
            price: productOrError?.productPriceOrError?.value,
            color: productOrError?.productColorOrError?.value,
        });

        return `O produto (${product.name}) foi atualizado com sucesso`;
    }
}

module.exports = UpdateProductUseCase;
