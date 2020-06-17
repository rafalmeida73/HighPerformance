'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'mensalidades', 
        [
          {
            mes_ref: '01/02/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/03/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/04/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/05/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/06/2020',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/07/2020',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/08/2020',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:1
          },
          {
            mes_ref: '01/02/2020',
            valor: 50,
            alunos_id: 2,
            treinadores_id:1,
            status:0
          },
          {
            mes_ref: '01/02/2020',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: '01/03/2020',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: '01/04/2020',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: '01/05/2020',
            valor: 50,
            alunos_id: 3,
            treinadores_id:2,
            status:0
          },
          {
            mes_ref: '01/06/2020',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: '01/07/2020',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: '01/08/2020',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:0
          },
          {
            mes_ref: '01/09/2020',
            valor: 50,
            alunos_id: 4,
            treinadores_id:3,
            status:1
          },
          {
            mes_ref: '01/02/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: '01/04/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: '01/05/2020',
            valor: 50,
            alunos_id: 1,
            treinadores_id:4,
            status:1
          },
          {
            mes_ref: '01/06/2020',
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