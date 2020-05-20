'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'metas', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        detalhes: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        alunos_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'alunos',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('metas');

  }
};
