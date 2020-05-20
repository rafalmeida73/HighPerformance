'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'metas', 
        [
          {
            detalhes: '38k',
            alunos_id: 1,
          },
          {
            detalhes: '20k',
            alunos_id: 1,
          },
          {
            detalhes: '40k',
            alunos_id: 2,
          },
          {
            detalhes: '100k',
            alunos_id: 3,
          },
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('metas', null, {});
  }
};