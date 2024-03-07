const { NotFoundError } = require("../../../../use-cases/errors");
class DeleteProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute({ id }) {
        const product = await this.productRepository.getById(id);
        if (!product) return new NotFoundError("Produto nao encontrado");

        await this.productRepository.delete(id);

        return `O produto (${product.name}) foi removido com sucesso`;
    }
}

module.exports = DeleteProductUseCase;
