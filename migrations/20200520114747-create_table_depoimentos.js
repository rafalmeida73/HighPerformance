'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'depoimentos', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        depoimento: {
            type: Sequelize.STRING(300),
            allowNull: false
        },
        treinadores_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'treinadores',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('depoimentos');

  }
};
