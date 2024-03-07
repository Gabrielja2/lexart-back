const { badRequest, ok } = require("../../helpers/index.js");

class GetAllProductsController {
    constructor(getAllProductsUseCase) {
        this.getAllProductsUseCase = getAllProductsUseCase;
    }
    async handle(req, res) {
        const query = req.data;
        const response = await this.getAllProductsUseCase.execute(query);

        if (response instanceof Error) return badRequest(response);

        return ok(response);
    }
}

module.exports = GetAllProductsController;
