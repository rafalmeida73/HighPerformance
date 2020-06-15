'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'alunos', 
        [
          {
            nome: 'Diogo',
            img: '/img/diogo.png',
            email: 'diogo@email.com',
            telefone:'999999999',
            meta: 39,
            metaFeita: 20,
            treinadores_id: 1
          },
          {
            nome: 'Paulo Ernesto',
            img: '/img/paulo.png',
            email: 'paulo@email.com',
            telefone:'999999999',
            meta: 39,
            metaFeita: 20,
            treinadores_id: 2
          },
          {
            nome: 'Rafael Santana',
            img: '/img/rafael.jpg',
            email: 'rafael@email.com',
            telefone:'999999999',
            meta: 39,
            metaFeita: 20,
            treinadores_id: 1
          },
          {
            nome: 'Roni Cleber',
            img: '/img/roni.png',
            email: 'roni@email.com',
            telefone:'999999999',
            meta: 39,
            metaFeita: 20,
            treinadores_id: 3
          },
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('alunos', null, {});
  }
};