let valor = []
let pendentes = document.getElementById("pendentes").textContent;
let pagos = document.getElementById("pagos").textContent;
valor.push(pagos);
valor.push(pendentes);

      myData = {
        labels: ["Recebido", "A Receber"],
        datasets: [
          {
            label: "Mensalidades",
            fill: false,
            backgroundColor: ["rgba(86, 171, 47, 0.2)", "rgba(240, 0, 0, 0.2)"],
            borderColor: ["rgba(86, 171, 47, 1)", "rgba(240, 0, 0, 1)"],
            data: valor,
          },
        ],
      };

      // Default chart defined with type: 'line'
      Chart.defaults.global.defaultFontFamily = "monospace";
      var ctx = document.getElementById("my_Chart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: myData,
      });

      // Function runs on chart type select update
      function updateChartType() {
        // here we destroy/delete the old or previous chart and redraw it again
        myChart.destroy();
        myChart = new Chart(ctx, {
          type: document.getElementById("chartType").value,
          data: myData,
        });
      }