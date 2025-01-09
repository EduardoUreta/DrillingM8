'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_bootcamp extends Model {

    
    static async addUser(data){
      const t = await sequelize.transaction();
      try {
        const addUserToBootcamp = await this.create(data, {t});
        await t.commit();
        return addUserToBootcamp;
      } catch (error) {
        await t.rollback();
        throw error;
      };
    };
    
    static associate(models) {
      const { User, Bootcamp } = models;
  
      this.belongsToMany(Bootcamp, { through: 'user_bootcamps'} );
      this.belongsToMany(User, { through: 'user_bootcamps'});
    };

    toJSON() {
      const user_bootcamp = this.dataValues;
      delete user_bootcamp.createdAt;
      delete user_bootcamp.updatedAt;
      return user_bootcamp;
    }
    
  }
  user_bootcamp.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    BootcampId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'Bootcamps',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'user_bootcamp',
  });
  return user_bootcamp;
};