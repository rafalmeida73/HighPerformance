'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'alunos', 
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
        img: {
            type: Sequelize.STRING(100)
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        meta: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        metaFeita: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        treinadores_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'treinadores',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        },
        plano: {
          type: Sequelize.STRING(45),
          allowNull: false
        },
        tempo_plano: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        valor: {
          type: Sequelize.DECIMAL(4,2),
          allowNull: true,
        },
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('alunos');

  }
};
