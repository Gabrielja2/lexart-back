const { NotFoundError } = require("../../../errors/index.js");

class GetAllProductsUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(query) {
        const products = await this.productRepository.getByQuery(query);

        if (!products) return new NotFoundError("Nenhum produto encontrado");

        return products;
    }
}

module.exports = GetAllProductsUseCase;
