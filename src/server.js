const setupRest = require("./main/rest");
const { PORT } = require("./main/shared");
const { sequelize } = require("./layers/external/database/config/config.js");

sequelize
    .authenticate()
    .then(async () => {
        setupRest().listen(PORT, () =>
            console.log(`Server running at Port ${PORT}`)
        );
    })
    .catch(console.error);
