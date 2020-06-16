let valor = []
let pendentes = document.getElementById("pendentes").textContent;
let pagos = document.getElementById("pagos").textContent;
valor.push(pagos);
valor.push(pendentes);
new Chart(document.getElementById("doughnut-chart"), {
type: 'doughnut',
data: {
labels: ["Recebido", "A Receber"],
datasets: [
{
 label: "Pagamentos",
 backgroundColor: [
 "rgba(86, 171, 47, 0.2)",
 "rgba(240, 0, 0, 0.2)",
   ],
   borderColor: [
       "rgba(86, 171, 47, 1)",
       "rgba(240, 0, 0, 1)",
   ],
   borderWidth: 1,
 data: valor,
}
]
},
options: {
responsive: true,
title: {
display: true,
fontSize: 20,
text: ''
}
},

});