const { badRequest, ok } = require("../../helpers/index.js");
const Validate = require("../../utils/index.js");

class UpdateProductController {
    constructor(updateProductUseCase) {
        this.updateProductUseCase = updateProductUseCase;
    }
    async handle(req, res) {
        const { id, name, brand, model, price, color } = req.data;

        const validation = Validate.fields(
            [
                { name: "id", type: "string" },
                { name: "name", type: "string", nullable: true },
                { name: "brand", type: "string", nullable: true },
                { name: "model", type: "string", nullable: true },
                { name: "price", type: "number", nullable: true },
                { name: "color", type: "string", nullable: true },
            ],
            {
                id,
                name,
                brand,
                model,
                price,
                color,
            }
        );

        if (validation instanceof Error) return badRequest(validation);

        const response = await this.updateProductUseCase.execute(id, {
            name,
            brand,
            model,
            price,
            color,
        });

        if (response instanceof Error) return badRequest(response);

        return ok(response);
    }
}

module.exports = UpdateProductController;
