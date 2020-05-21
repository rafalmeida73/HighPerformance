'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'depoimentos', 
        [
          {
            depoimento: 'Dolore labore est deserunt esse do reprehenderit.',
            treinadores_id: 1,
          },
          {
            depoimento: 'Dolore labore est deserunt esse do reprehenderit.',
            treinadores_id: 3,
          },
          {
            depoimento: 'Dolore labore est deserunt esse do reprehenderit.',
            treinadores_id: 2,
          },
          {
            depoimento: 'Dolore labore est deserunt esse do reprehenderit.',
            treinadores_id: 4,
          },
          
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('depoimentos', null, {});
  }
};