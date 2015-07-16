$(function () {
    $('.carousel').carousel({interval: 6000});

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 350) {
            $("nav").addClass("js-on-scroll");
            $(".header-bg").addClass("js-on-scroll");
        }
    });
});