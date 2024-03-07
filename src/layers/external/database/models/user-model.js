const Sequelize = require("sequelize");
const { sequelize } = require("../config/config.js");

const User = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "users",
    }
);

const transactionWrapper = (operation) => {
    return async function () {
        let t;
        try {
            t = await sequelize.transaction();
            const result = await operation.apply(this, arguments);
            await t.commit();
            return result;
        } catch (error) {
            if (t) await t.rollback();
            throw error;
        }
    };
};

User.create = transactionWrapper(User.create);
User.update = transactionWrapper(User.update);
User.destroy = transactionWrapper(User.destroy);

module.exports = User;
