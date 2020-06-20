$("#formEditarMensalidade").validate({
 rules: {
     valor: {
         required: true,
         number: true
     },
     pago:{
      required: true,
     }
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