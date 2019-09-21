
$(document).ready(function () {

  $('#offer-form__sale').submit(function (event) {
    event.preventDefault();

    let inputName = $('#offer-form__sale .input__name');
    let inputPhone = $('#offer-form__sale .input__phone');

    if (inputName.val() === '' || inputPhone.val() === '') {
      inputName.css('border', '2px solid red');
      inputPhone.css('border', '2px solid red');

    } else {
      $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize(),
        success: function () {

          $('.input__name').css('border', '');
          $('.input__phone').css('border', '');

         
          $('.modalmini').addClass('modalmini_active');
          $('#offer-form__sale').trigger('reset');

        }

      });
    }

  });

  $('#offer-form__modal').submit(function (event) {
    event.preventDefault();

    let inputName2 = $('#offer-form__modal .input__name');
    let inputPhone2 = $('#offer-form__modal .input__phone');

    if (inputName2.val() === '' || inputPhone2.val() === '') {
      inputName2.css('border', '2px solid red');
      inputPhone2.css('border', '2px solid red');

    } else {
      $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize(),
        success: function () {

          $('.input__name').css('border', '');
          $('.input__phone').css('border', '');

          $('.popup-form').removeClass('modal_active');
          
          $('#modalmini').addClass('modalmini_active');
          $('#offer-form__modal').trigger('reset');

        }

      });
    }

  });

  $('.phone').mask('+7 (999) 999-99-99');

});