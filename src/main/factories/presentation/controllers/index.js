const LoginUserController = require("../../../../layers/presentation/controllers/user/login-user-controller");
const CreateUserController = require("../../../../layers/presentation/controllers/user/create-user-controller");
const TreatmentDecorator = require("../../../../layers/presentation/decorators/treatment-decorator");
const CreateProductController = require("../../../../layers/presentation/controllers/product/create-product-controller");
const GetAllProductsController = require("../../../../layers/presentation/controllers/product/get-all-products-controller");
const GetProductController = require("../../../../layers/presentation/controllers/product/get-product-controller");
const UpdateProductController = require("../../../../layers/presentation/controllers/product/update-product-controller");
const DeleteProductController = require("../../../../layers/presentation/controllers/product/delete-product-controller");
const {
    loginUserUseCase,
    createUserUseCase,
    createProductUseCase,
    getAllProductsUseCase,
    getProductUseCase,
    updateProductUseCase,
    deleteProductUseCase,
} = require("../../../factories/use-cases");

const loginUserController = new TreatmentDecorator(
    new LoginUserController(loginUserUseCase)
);
const createUserController = new TreatmentDecorator(
    new CreateUserController(createUserUseCase)
);

const createProductController = new TreatmentDecorator(
    new CreateProductController(createProductUseCase)
);

const getAllProductsController = new TreatmentDecorator(
    new GetAllProductsController(getAllProductsUseCase)
);

const getProductController = new TreatmentDecorator(
    new GetProductController(getProductUseCase)
);

const updateProductController = new TreatmentDecorator(
    new UpdateProductController(updateProductUseCase)
);

const deleteProductController = new TreatmentDecorator(
    new DeleteProductController(deleteProductUseCase)
);

module.exports = {
    loginUserController,
    createUserController,
    createProductController,
    getAllProductsController,
    getProductController,
    updateProductController,
    deleteProductController,
};
