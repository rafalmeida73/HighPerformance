'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'mensalidades', 
        [
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mensalidades', null, {});
  }
};