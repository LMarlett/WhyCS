'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserResponses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zip: {
        type: Sequelize.INTEGER
      },
      ageRange: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      careerField: {
        type: Sequelize.STRING
      },
      EWD: {
        type: Sequelize.INTEGER
      },
      CC: {
        type: Sequelize.INTEGER
      },
      CL: {
        type: Sequelize.INTEGER
      },
      TSS: {
        type: Sequelize.INTEGER
      },
      ESJ: {
        type: Sequelize.INTEGER
      },
      SRI: {
        type: Sequelize.INTEGER
      },
      PJA: {
        type: Sequelize.INTEGER
      },
      beliefString: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      misc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserResponses');
  }
};