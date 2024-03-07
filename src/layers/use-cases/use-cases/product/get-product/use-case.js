const { NotFoundError } = require("../../../errors/index.js");

class GetProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute({ id }) {
        const product = await this.productRepository.getById(id);

        if (!product) return new NotFoundError("Produto não encontrado");

        return product;
    }
}

module.exports = GetProductUseCase;
