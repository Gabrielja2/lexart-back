const { DATABASE_URL } = require("../../../../main/shared");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
});

module.exports = { sequelize };
