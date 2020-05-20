'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'treinadores', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(20),
        },
        senha: {
            type: Sequelize.STRING(256),
            allowNull: false
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('treinadores');

  }
};
