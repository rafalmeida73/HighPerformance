'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'presenca', 
        [
          {
            alunos_id: 1,
            aulas_id: 3,
          },
          {
            alunos_id: 2,
            aulas_id: 1,
          },
          {
            alunos_id: 1,
            aulas_id: 2,
          },
          {
            alunos_id: 3,
            aulas_id: 1,
          },
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('presenca', null, {});
  }
};