$(document).ready(function () {
    var buttonNav = $('#button-navbar');
    var buttonDiscount = $('#button-discount');
    var modal = $('#modal');
    var close = $('#close');

    buttonNav.on('click', function () {
        modal.addClass('modal_active');
    });
    buttonDiscount.on('click', function () {
        modal.addClass('modal_active');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
    });

});  
 
// всплывающее мини окно
$(document).ready(function () {
    var button = $('#buttonmini');
    var buttons = $('#buttonsmini');
    var modal = $('#modalmini');
    var close = $('#closemini');


    button.on('click', function () {
        modal.addClass('modalmini_active');
    });

    buttons.on('click', function () {
        modal.addClass('modalmini_active');
    });

    close.on('click', function () {
        modal.removeClass('modalmini_active');
    });
}); 
