$(function () {

    'use stract';

    $('.header').height($(window).height());

    $(window).resize(function () {

        $('.header').height($(window).height());

        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider').height()) / 2);
        });
    });

    //Links ad Active Class
    $('.ulnav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //trigger the px slider 
    $('.bxslider').bxSlider({
        pager: false
    });

    //Adjuste Bxslider li items center
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider').height()) / 2);
    });

    $('.ulnav li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 60
        }, 1000);
    })

    //trigger start mixtup

    $('#maixed').mixItUp();

    //trigger start links

    $('.shuffle li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });


    // Simple mode, it styles document scrollbar:

    $("body").niceScroll({

        cursorcolor: "#1abc9c",

        cursorborder: "1px solid #1abc9c"
    });

});