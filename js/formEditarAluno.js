$("#form").validate({
    rules: {
        name: {
            maxlength: 100,
            minlength: 5,
            minWords: 2
        },
        email: {
            email: true
        },
        date: {
            date: true
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