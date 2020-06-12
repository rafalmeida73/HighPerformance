$("#form").validate({
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
        cel: {
            required: true,
        },
        senha: {
            required: true,
            minlength: 5
        },
        repSenha: {
            required: true,
            minlength: 5,
            equalTo: "#password"
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