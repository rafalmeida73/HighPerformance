$("#form1").validate({
    rules: {
        email: {
            required: true,
            email: true
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


$("#formCadastro").validate({
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


$("#formSobre").validate({
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

$("#formCadastroAluno").validate({
    rules: {
        name: {
            required: true,
            minlength: 5,
        },
        email: {
            required: true,
            email: true
        },
        data: {
            required: true,
            date: true
        },
        cel: {
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

$("#formdas").validate({
    rules: {
        name: {
            required: true,
            minlength: 5,
        },
        email: {
            required: true,
            email: true
        },
        data: {
            required: true,
            date: true
        },
        cel: {
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