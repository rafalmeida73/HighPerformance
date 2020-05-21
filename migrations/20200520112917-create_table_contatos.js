'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'contatos', 
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
            type: Sequelize.STRING(100),
            allowNull: false
        },
        docs: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        mensagem: {
            type: Sequelize.STRING(1000),
            allowNull: false
        }
    })
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('contatos');

  }
};
