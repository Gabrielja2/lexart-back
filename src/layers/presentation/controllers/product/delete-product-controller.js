const { badRequest, ok } = require("../../helpers/index.js");
const Validate = require("../../utils/index.js");

class DeleteProductController {
    constructor(deleteProductUseCase) {
        this.deleteProductUseCase = deleteProductUseCase;
    }
    async handle(req, res) {
        const { id } = req.data;

        const validation = Validate.fields([{ name: "id", type: "string" }], {
            id,
        });

        if (validation instanceof Error) return badRequest(validation);

        const response = await this.deleteProductUseCase.execute({
            id,
        });

        if (response instanceof Error) return badRequest(response);

        return ok(response);
    }
}

module.exports = DeleteProductController;
