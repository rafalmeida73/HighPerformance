$("#pdf").on("click", function() {
    $("#exportar").tableHTMLExport({
        type: 'pdf',
        filename: 'alunos.pdf'
    });
});
$("#csv").on("click", function() {
    $("#exportar").tableHTMLExport({
        type: 'csv',
        filename: 'alunos.csv'
    });
});

// Link para tr
$(document).ready(function() {
    $('table tr').click(function() {
        window.location = $(this).data('url');
        returnfalse;
    });
});