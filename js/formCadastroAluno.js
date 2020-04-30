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