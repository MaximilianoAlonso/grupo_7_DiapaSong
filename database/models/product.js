"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "categories",
        foreignKey: "idCategory",
        onDelete: "cascade",
      });
      Product.belongsTo(models.Color, {
        as: "colors",
        foreignKey: "idColor",
        onDelete: "cascade",
      });
      Product.belongsTo(models.Condition, {
        as: "condition",
        foreignKey: "idCondition",
        onDelete: "cascade",
      });
      Product.belongsTo(models.ProductType, {
        as: "productType",
        foreignKey: "idProductType",
        onDelete: "cascade",
      });
      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "idProduct",
        onDelete: "cascade"
     });
     Product.hasMany(models.Cart, {
      as: "carts",
     
    });
    Product.belongsTo(models.Instrument, {
      as: "instrument",
      foreignKey: "idInstrument",
    });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      description: DataTypes.STRING,
      model: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      idProductType: DataTypes.INTEGER,
      idCondition: DataTypes.INTEGER,
      idCategory: DataTypes.INTEGER,
      idColor: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
