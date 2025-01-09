'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_bootcamps', 'deletedAt', {type: Sequelize.DATE});
    await queryInterface.addColumn('Users', 'deletedAt', {type: Sequelize.DATE});
    await queryInterface.addColumn('Bootcamps', 'deletedAt', {type: Sequelize.DATE});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_bootcamps', 'deletedAt');
    await queryInterface.removeColumn('Users', 'deletedAt');
    await queryInterface.removeColumn('Bootcamps', 'deletedAt');
  }
};
