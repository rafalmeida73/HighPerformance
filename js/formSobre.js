$("#formValidate").validate({
    rules: {
        name: {
            required: true,
            minlength: 5,
        },
        email: {
            required: true,
            email: true
        },
        msg: {
            required: true,
            maxlength: 250,
        },
        senha: {
            required: true,
            minlength: 5
        },
        file: {
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