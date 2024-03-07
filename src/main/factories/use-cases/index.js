const LoginUserUserCase = require("../../../layers/use-cases/use-cases/user/login-user/use-case");
const CreateUserUseCase = require("../../../layers/use-cases/use-cases/user/create-user/use-case");
const CreateProductUseCase = require("../../../layers/use-cases/use-cases/product/create-product/use-case");
const GetAllProductsUseCase = require("../../../layers/use-cases/use-cases/product/get-all-products/use-case");
const GetProductUseCase = require("../../../layers/use-cases/use-cases/product/get-product/use-case");
const UpdateProductUseCase = require("../../../layers/use-cases/use-cases/product/update-product/use-case");
const DeleteProductUseCase = require("../../../layers/use-cases/use-cases/product/delete-product/use-case");
const {
    userRepository,
    productRepository,
} = require("../../../main/factories/external/database/repository");
const {
    cryptography,
    authentication,
} = require("../../../main/factories/external/index.js");

const loginUserUseCase = new LoginUserUserCase(
    userRepository,
    cryptography,
    authentication
);
const createUserUseCase = new CreateUserUseCase(userRepository, cryptography);

const createProductUseCase = new CreateProductUseCase(productRepository);

const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);

const getProductUseCase = new GetProductUseCase(productRepository);

const updateProductUseCase = new UpdateProductUseCase(productRepository);

const deleteProductUseCase = new DeleteProductUseCase(productRepository);

module.exports = {
    loginUserUseCase,
    createUserUseCase,
    createProductUseCase,
    getAllProductsUseCase,
    getProductUseCase,
    updateProductUseCase,
    deleteProductUseCase,
};
