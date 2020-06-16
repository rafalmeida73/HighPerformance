'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'treinadores', 
        [
          {
            nome: 'Diogo',
            email: 'diogofcar@gmail.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Paulo Ernesto',
            email: 'pauloernestom@gmail.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Rafael Santana',
            email: 'rafaelsantana7213@gmail.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Roni Cleber',
            email: 'ronycleber_pm@hotmail.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('treinadores', null, {});
  }
};