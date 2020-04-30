$("#form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        senha: {
            required: true,
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