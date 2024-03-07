const { created, badRequest } = require("../../helpers/index.js");
const Validate = require("../../utils/index.js");

class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }

    async handle(req, res) {
        let products = [];
        let responses = [];

        if (Array.isArray(req.body)) {
            for (const product of req.body) {
                if (product.data) {
                    for (const d of product.data) {
                        const validation = Validate.fields(
                            [
                                { name: "name", type: "string" },
                                { name: "brand", type: "string" },
                                { name: "model", type: "string" },
                                { name: "price", type: "number" },
                                { name: "color", type: "string" },
                            ],
                            {
                                name: product.name,
                                brand: product.brand,
                                model: product.model,
                                price: d.price,
                                color: d.color,
                            }
                        );

                        if (validation instanceof Error)
                            return badRequest(validation);

                        products.push({
                            name: product.name,
                            brand: product.brand,
                            model: product.model,
                            price: d.price,
                            color: d.color,
                        });
                    }
                } else {
                    const validation = Validate.fields(
                        [
                            { name: "name", type: "string" },
                            { name: "brand", type: "string" },
                            { name: "model", type: "string" },
                            { name: "price", type: "number" },
                            { name: "color", type: "string" },
                        ],
                        {
                            name: product.name,
                            brand: product.brand,
                            model: product.model,
                            price: product.price,
                            color: product.color,
                        }
                    );

                    if (validation instanceof Error)
                        return badRequest(validation);

                    products.push(product);
                }
            }
        } else {
            const { data, details, name, brand, model, price, color } =
                req.data;

            if (details) {
                products.push({
                    name,
                    brand: details.brand,
                    model: details.model,
                    price,
                    color: details.color,
                });
            } else if (data) {
                for (const d of data) {
                    products.push({
                        name,
                        brand,
                        model,
                        price: d.price,
                        color: d.color,
                    });
                }
            } else {
                products.push({ name, brand, model, price, color });
            }

            for (const product of products) {
                const validation = Validate.fields(
                    [
                        { name: "name", type: "string" },
                        { name: "brand", type: "string" },
                        { name: "model", type: "string" },
                        { name: "price", type: "number" },
                        { name: "color", type: "string" },
                    ],
                    {
                        name: product.name,
                        brand: product.brand,
                        model: product.model,
                        price: product.price,
                        color: product.color,
                    }
                );

                if (validation instanceof Error) {
                    return badRequest(validation);
                }
            }
        }

        for (const product of products) {
            const response = await this.createProductUseCase.execute(product);
            if (response instanceof Error) return badRequest(response);

            responses.push(response);
        }

        return created(responses);
    }
}

module.exports = CreateProductController;
