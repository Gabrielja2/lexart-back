const UserRepository = require("../../../../../layers/external/database/repository/user-repository");
const ProductReposiotry = require("../../../../../layers/external/database/repository/product-repository");
const User = require("../../../../../layers/external/database/models/user-model");
const Product = require("../../../../../layers/external/database/models/product-model");

const userRepository = new UserRepository(User);

const productRepository = new ProductReposiotry(Product);

module.exports = {
    userRepository,
    productRepository,
};
