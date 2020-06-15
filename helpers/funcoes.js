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
    }

}
  module.exports = helpers

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