'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'mensalidades', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        mes_ref: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        valor: {
            type: Sequelize.DECIMAL(4,2),
            allowNull: true
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
        alunos_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'alunos',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        },
        status: {
          type: Sequelize.STRING(10),
          allowNull: true
      }

    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('mensalidades');

  }
};
