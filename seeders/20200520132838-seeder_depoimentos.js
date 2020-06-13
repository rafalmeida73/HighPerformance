'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'depoimentos', 
        [
          {
            img: '/img/diogo.png',
            nome: 'Diogo',
            profissao: 'Educador físico',
            mensagem: 'Dolore labore est deserunt esse do reprehenderit.'
          },
          {
            img: '/img/paulo.png',
            nome: 'Paulo',
            profissao: 'Educador físico',
            mensagem: 'Dolore labore est deserunt esse do reprehenderit.'
          },
          {
            img: '/img/rafael.jpg',
            nome: 'Rafael',
            profissao: 'Educador físico',
            mensagem: 'Dolore labore est deserunt esse do reprehenderit.'
          },
          {
            img: '/img/roni.png',
            nome: 'Diogo',
            profissao: 'Educador físico',
            mensagem: 'Dolore labore est deserunt esse do reprehenderit.'
          }
          
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('depoimentos', null, {});
  }
};