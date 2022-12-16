$(document).ready(function () {

    setTimeout(function () {
        $('.preloader').css('height', 0);
        setTimeout(function () {
            $('.preloader').children().hide();
        }, 200);
    }, 500);
});