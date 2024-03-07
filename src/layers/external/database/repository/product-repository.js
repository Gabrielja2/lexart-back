const { Op } = require("sequelize");
class ProductRepository {
    constructor(Product) {
        this.product = Product;
    }
    async create({ name, brand, model, price, color }) {
        const product = await this.product.create({
            name,
            brand,
            model,
            price,
            color,
        });
        return product;
    }

    async getAll() {
        const products = await this.product.findAll({
            order: [["id", "ASC"]],
        });

        if (products.length === 0) return null;

        return products;
    }

    async getByQuery(query) {
        let whereClause = {};
        const key = Object.keys(query)[0];
        const value = Object.values(query)[0];

        whereClause = key
            ? {
                  [Op.or]: [
                      { name: { [Op.iLike]: `%${value}%` } },
                      { model: { [Op.iLike]: `%${value}%` } },
                      { brand: { [Op.iLike]: `%${value}%` } },
                      { color: { [Op.iLike]: `%${value}%` } },
                      { price: value },
                  ],
              }
            : {};

        return await this.product.findAll({
            where: whereClause,
            order: [["id", "ASC"]],
        });
    }

    async getById(id) {
        const product = await this.product.findByPk(id);

        if (!product) return null;

        return product;
    }

    async delete(id) {
        const response = await this.product.destroy({ where: { id } });

        if (!response) return null;

        return response;
    }

    async update(id, data) {
        return await this.product.update(data, { where: { id } });
    }
}

module.exports = ProductRepository;
