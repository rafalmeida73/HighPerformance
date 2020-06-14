'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'aulas', 
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
        observacoes: {
            type: Sequelize.STRING(400),
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
        data_aula: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        horario: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        status: {
          type: Sequelize.STRING(45),
          allowNull: true
      }

    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('aulas');

  }
};
