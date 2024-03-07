(async () => {
    const {
        sequelize,
    } = require("./src/layers/external/database/config/config.js");
    const User = require("./src/layers/external/database/models/user-model.js");
    const Product = require("./src/layers/external/database/models/product-model.js");
    await sequelize.sync();
})();
