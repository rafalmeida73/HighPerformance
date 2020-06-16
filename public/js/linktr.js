// Link para tr
$(document).ready(function() {
 $('table tr').click(function() {
     window.location = $(this).data('url');
     returnfalse;
 });
});