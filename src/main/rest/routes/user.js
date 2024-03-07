const RestAdapter = require("../adapter");
const {
    loginUserController,
    createUserController,
} = require("../../factories/presentation/controllers");

module.exports = (router) => {
    router.post("/users", RestAdapter.route(createUserController));
    router.post("/users/login", RestAdapter.route(loginUserController));
};
