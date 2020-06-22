$("#formCadastro").validate({
    rules: {
        imgUser: {
            required: true,
        },
        nome: {
            required: true,
            maxlength: 100,
            minlength: 5,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        meta: {
            required: true,
        },
        valor:{
            required: true,
            number: true
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