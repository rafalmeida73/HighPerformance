'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'equipe_admin', 
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
        funcao: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        site: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        location: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(20),
        },
        img: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING(256),
            allowNull: false
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('equipe_admin');

  }
};
