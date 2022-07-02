'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medication.belongsToMany(models.Mission, {
        through: 'Mission_medication'
      });
    }
  }
  Medication.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      validate: {
        is: /^[A-Z]+(?:_[A-Z]+)*$/
      },
      allowNull: false
    }
  },
    {
      sequelize,
      modelName: 'Medication',
    });
  return Medication;
};