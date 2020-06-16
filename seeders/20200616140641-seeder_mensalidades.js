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
            status:1
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:0
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:'0
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:1
          },
          {
            mes_ref: 'Janeiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: 'Fevereiro',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: 'Março',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: 'Abril',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:0
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mensalidades', null, {});
  }
};