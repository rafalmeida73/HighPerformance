const helpers = {
    formatDate: function (dt) {
        let dat = new Date(dt)
        return dat.getUTCDate() + '/' + (dat.getMonth() + 1) + '/' + dat.getFullYear()
    },

    diaDaSemana: function (date) {
        let data = new Date(date)
        let diaSemana = ''
        switch (data.getUTCDay()) {
            case 0: diaSemana = 'Domingo'; break
            case 1: diaSemana = 'Segunda-feira'; break
            case 2: diaSemana = 'Terça-feira'; break
            case 3: diaSemana = 'Quarta-feira'; break
            case 4: diaSemana = 'Quinta-feira'; break
            case 5: diaSemana = 'Sexta-feira'; break
            case 6: diaSemana = 'Sábado'; break
            default: diaSemana = 'Data não definida'
        }
        return '(' + diaSemana + ')'
    },

    addDias: function (data, dias) {
        let nDate = new Date(data);
        return nDate.setUTCDate(nDate.getUTCDate() + dias);
    },

    periodo: async function(){
        //let dt = new Date().toLocaleDateString().split('/').reverse().join('-')
        let dt = new Date()
        let dataInicio = new Date(dt).getTime()
        let dataFinal  = this.addDias(dataInicio,10)
        let a = []

        // criando array com as datas do calendário conforme período dataInicio e dataFinal definidas acima     
       for (let i=0; i < 10; i++) {
            console.log(helpers.formatDate(dataInicio),helpers.diaDaSemana(dataInicio))
            a.push({data:helpers.formatDate(dataInicio),diaSemana:helpers.diaDaSemana(dataInicio), qtde:0})
            dataInicio =  helpers.addDias(dataInicio,1)
        }
        return await a
    }

}
  module.exports = helpers

//console.log(helpers.periodo())
// dt = '2020-06-14'
// data = new Date(dt)
// console.log(data)
// dataFinal = helpers.addDias(data,10)
// count=1
// while(data <= dataFinal){
//     console.log(count +' menor '+ helpers.formatDate(data) +' = '+helpers.formatDate(dataFinal))    
//     data = helpers.addDias(data,1)
//     count++
// }