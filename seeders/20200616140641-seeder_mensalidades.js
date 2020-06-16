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
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:'p'
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:'np'
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:'np'
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:'np'
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:'np'
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:'np'
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:'np'
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:'np'
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:'np'
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:'np'
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:'p'
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:'p'
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:'p'
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:'p'
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:'np'
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mensalidades', null, {});
  }
};