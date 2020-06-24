$("#formValidate").validate({
    rules: {
        name: {
            required: true,
            maxlength: 100,
            minlength: 5,
            minWords: 2
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