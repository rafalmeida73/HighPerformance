'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'presenca', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
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
        aulas_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'aulas',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('presenca');

  }
};
