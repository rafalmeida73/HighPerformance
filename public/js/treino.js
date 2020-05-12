var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sab",
            "Dom",
        ],
        datasets: [{
            label: "Semana",
            data: [12, 22, 3, 5, 2, 3, 12],
            backgroundColor: [
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        }, ],
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Atividades essa semana",
        },
        labels: {
            fontStyle: "bold",
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + " km";
                    },
                },
            }, ],
        },
    },
});