function dowloadDoc() {
    html2canvas($("#tabledata")[0], {
        onrendered: function(canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("alunos.pdf");
        }
    })
}

// EXCEL
$("#csv").click(function() {
    $(".table").table2excel({
        exclude: ".noExl",
        name: "Alunos",
        filename: "alunos"
    })
});
