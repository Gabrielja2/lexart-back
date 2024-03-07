const RestAdapter = require("../adapter");
const {
    createProductController,
    getAllProductsController,
    getProductController,
    updateProductController,
    deleteProductController,
} = require("../../factories/presentation/controllers");
const authenticateUserMiddleware = require("../../factories/presentation/middlewares/index");

module.exports = (router) => {
    router.post(
        "/products",
        RestAdapter.middleware(authenticateUserMiddleware),
        RestAdapter.route(createProductController)
    );
    router.get(
        "/products",
        RestAdapter.middleware(authenticateUserMiddleware),
        RestAdapter.route(getAllProductsController)
    );
    router.get(
        "/products/:id",
        RestAdapter.middleware(authenticateUserMiddleware),
        RestAdapter.route(getProductController)
    );
    router.patch(
        "/products/:id",
        RestAdapter.middleware(authenticateUserMiddleware),
        RestAdapter.route(updateProductController)
    );
    router.delete(
        "/products/:id",
        RestAdapter.middleware(authenticateUserMiddleware),
        RestAdapter.route(deleteProductController)
    );
};
