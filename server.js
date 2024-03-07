const setupRest = require("./src/main/rest/index.js");
const { PORT } = require("./src/main/shared/index.js");
const {
    sequelize,
} = require("./src/layers/external/database/config/config.js");

sequelize
    .authenticate()
    .then(async () => {
        setupRest().listen(PORT, () =>
            console.log(`Server running at Port ${PORT}`)
        );
    })
    .catch(console.error);
