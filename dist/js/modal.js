$(document).ready(function () {
    
    $('.btn-popup').on('click', function () {
            $('.popup-form').addClass('modal_active');
        });

    $('#close').on('click', function () {
        $('.popup-form').removeClass('modal_active');
    });

    $('#closemini').on('click', function () {
            $('#modalmini').removeClass('modalmini_active');
        });
        
});

