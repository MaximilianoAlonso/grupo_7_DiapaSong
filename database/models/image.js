'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Product, {
        as: "products",
        foreignKey: "idProduct",
        onDelete: "cascade"
       
     });
    }
  }
  Image.init({
    name: DataTypes.STRING,
    main: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};