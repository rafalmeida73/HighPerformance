'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'treinadores', 
        [
          {
            nome: 'Diogo',
            email: 'diogo@email.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Paulo Ernesto',
            email: 'paulo@email.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Rafael Santana',
            email: 'rafael@email.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Roni Cleber',
            email: 'roni@email.com',
            telefone:'999999999',
            senha: bcrypt.hashSync('123456',10)
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('treinadores', null, {});
  }
};