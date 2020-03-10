$(function(){

    $('.portfolio-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,
    });

    $('.menu-btn').on('click', function(){
        $('.navigation').slideToggle();
    });

    $(window).on('load', function () {
      $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
      } else {
      $('.scroll-top').fadeOut();
      }
      });
      $('.scroll-top').click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 600);
        return false;
      });

});