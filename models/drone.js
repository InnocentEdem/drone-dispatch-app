'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drone.init({
    model:{
      type: DataTypes.ENUM,
      validate:{ 
        isIn:[["Lightweight","Middleweight","CruiserWeight","Heavyweight"]]
      }
    },
    weight_limit: {
      type:DataTypes.FLOAT,
      validate: {
        max:500,
        min:0
      }
    },
    battery_capacity: DataTypes.INTEGER,
    state:{ 
      type:DataTypes.ENUM,
      validate:{ 
        isIn:[["IDLE","LOADING","DELIVERING","DELIVERED","RETURNING"]]
      }
    }
  }, {
    sequelize,
    modelName: 'Drone',
  });
  return Drone;
};