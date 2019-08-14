'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hobbies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      StudentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Students', // name of Target model
        key: 'id', // key in Target model that we're referencing
        },
       },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hobbies');
  }
};