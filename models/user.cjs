'use strict';
const {
  Model
} = require('sequelize');
const { default: user_bootcamp } = require('./user_bootcamp.cjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Bootcamp, user_bootcamp } = models;
      
      this.belongsToMany(Bootcamp, { through: user_bootcamp });
    };

    toJSON() {
      const user = this.dataValues;
      delete user.createdAt;
      delete user.updatedAt;
      return user;
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Ingresa un correo válido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        min: 8
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true
  });
  return User;
};