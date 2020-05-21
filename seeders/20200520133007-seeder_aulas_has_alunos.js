'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'aulas_has_alunos', 
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
    return queryInterface.bulkDelete('aulas_has_alunos', null, {});
  }
};