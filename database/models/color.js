'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Color.hasMany(models.Product, {
        as: "products",
        foreignKey: "idColor",
        onDelete: "cascade"
        
     });
    }
  }
  Color.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};