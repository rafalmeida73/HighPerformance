$("#form").validate({
    rules: {
        name: {
            required: true,
            minlength: 5,
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
        senha2: {
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