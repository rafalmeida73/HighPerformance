$("#formFinancas").validate({
 rules: {
     mes: {
         required: true,
     },
     valor: {
         required: true,
         number: true
     },
 },
 errorElement: 'div',
 errorPlacement: function(error, element) {
     var placement = $(element).data('error');
     if (placement) {
         $(placement).append(error)
     } else {
         error.insertAfter(element);
     }
 }
});