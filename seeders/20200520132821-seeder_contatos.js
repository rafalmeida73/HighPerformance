'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'contatos', 
        [
          {
            nome: 'Alguém',
            email: 'alguem@email.com',
            docs:'./curriculo.pdf',
            mensagem: 'Cillum in dolor laborum id id tempor pariatur officia eiusmod velit velit aute.'
          },
          {
            nome: 'Outro Alguém',
            email: 'outroalguem@email.com',
            docs:'./curriculo.pdf',
            mensagem: 'Cillum in dolor laborum id id tempor pariatur officia eiusmod velit velit aute.'
          },
          {
            nome: 'Mais Um Alguém',
            email: 'maisumalguem@email.com',
            docs:'./curriculo.pdf',
            mensagem: 'Cillum in dolor laborum id id tempor pariatur officia eiusmod velit velit aute.'
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contatos', null, {});
  }
};