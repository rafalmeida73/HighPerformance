'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'aulas', 
        [
          {
            nome: 'Corrida',
            observacoes: '5k',
            treinadores_id: 1,
            data_aula:'2020-06-17',
            horario: '13:00',
            status:'a'
          },
          {
            nome: 'Corrida',
            observacoes: '20k',
            treinadores_id: 1,
            data_aula:'2020-06-17',
            horario: '13:00',
            status:'a'
          },
          {
            nome: 'Bike',
            observacoes: '50k',
            treinadores_id: 4,
            data_aula:'2020-06-17',
            horario: '19:00',
            status:'a'
          },
          {
            nome: 'Bike',
            observacoes: '20k',
            treinadores_id: 2,
            data_aula:'2020-06-17',
            horario: '13:00',
            status:'a'
          },
          {
            nome: 'Bike',
            observacoes: '20k',
            treinadores_id: 3,
            data_aula:'2020-06-17',
            horario: '13:00',
            status:'a'
          },
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('aulas', null, {});
  }
};