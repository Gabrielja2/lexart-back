const { DATABASE_URL } = require("../../../../main/shared");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    dialectModule: require("pg"),
});

module.exports = { sequelize };
