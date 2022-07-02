'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mission.belongsToMany(models.Medication,{
        through:' Mission_medication'
      })
    }
  }
  Mission.init({
    location: DataTypes.STRING,
    et_depature: DataTypes.TEXT,
    et_delivery: DataTypes.TEXT,
    et_return: DataTypes.TEXT,
    payload: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mission',
  });
  return Mission;
};