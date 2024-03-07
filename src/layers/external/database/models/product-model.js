const Sequelize = require("sequelize");
const { sequelize } = require("../config/config.js");

const Product = sequelize.define(
    "product",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
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

Product.create = transactionWrapper(Product.create);
Product.update = transactionWrapper(Product.update);
Product.destroy = transactionWrapper(Product.destroy);

module.exports = Product;
