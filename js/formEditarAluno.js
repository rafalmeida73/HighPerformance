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
        date: {
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