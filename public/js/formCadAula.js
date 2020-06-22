$("#formCadAula").validate({
 rules: {
     nome: {
         required: true,
         maxlength: 100,
         minlength: 5,
     },
     observacoes: {
      required: true,
     },
     alunos_id: {
         required: true,
     },
     data_aula: {
         required: true,
         date : true,
         dateFormat: true
     },
     horario: {
         required: true,
         time: true
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