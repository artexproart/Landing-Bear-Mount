
$(document).ready(function () {
    // валидация формы
 
    $('#offer-form__sale').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Ещё {0} символа"),
                maxlength: jQuery.validator.format("Надо меньше {0} символов")
            },
            email: {
                required: "Нам нужен ваш email",
                email: "email введен не верно"
            },
            userphone: {
                required: "Укажите телефон"
            }
        },

        errorClass: "invalid",
        errorElement: "label"

    });
    
    $('#offer-form__sale').on('submit', function (event) {
        event.preventDefault();
        var username1 = $('.username1').val();
        var userphone1 = $('.userphone1').val();
        
        if (username1 == '' || userphone1 == '') {
            valid = false;
            return valid;
        }

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (valid) {
                if (valid == true) {
                    $('#modalmini').addClass('modalmini_active');
                    $(this).trigger('reset');
                }
            }
        });
    });

    // -------------------------------------------------

    $('#offer-form__modal').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Ещё {0} символа"),
                maxlength: jQuery.validator.format("Надо меньше {0} символов")
            },
            email: {
                required: "Нам нужен ваш email",
                email: "email введен не верно"
            },
            userphone: {
                required: "Укажите телефон"
            }
        },

        errorClass: "invalid",
        errorElement: "label"

    });

    $('#offer-form__modal').on('submit', function (event) {
        event.preventDefault();
        var username2 = $('.username2').val();
    var userphone2 = $('.userphone2').val();
        if (username2 == '' || userphone2 == '') {
            valid = false;
            return valid;
        }

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (valid) {
                if (valid == true) {                
                $('#modalmini').addClass('modalmini_active');
                $(this).trigger('reset');
            } 
        }

        });
    });

    $('.phone').mask('+7 (999) 999-99-99');

    $('.success').html(data['username'] + ', Ваша форма отправлена');

});