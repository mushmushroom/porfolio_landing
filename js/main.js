$(function () {

  $(".menu a, .hero__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    if (id === "#portfolio" || id === "#contacts") {
      top = top - 70;
    }
    if ($(window).width() > 992) {
      top = top - 80;
      $('body, html').animate({ scrollTop: top }, 1000);
    }
    else {
      $('body, html').animate({ scrollTop: top - 50 }, 1000);
    }
  });

   $(document).scroll(function () {
    var nav = $(".header");
    nav.toggleClass('header-fixed', $(this).scrollTop() > nav.height() - 80);
  });
  

  $('.reviews__slider').slick({
    arrows: false,
    dots: true
  });

  $('.menu__btn, .menu__list a').on('click', function () {
    $('.menu__btn').toggleClass('open');
    $('.menu').toggleClass('active')
    $('.hero').toggleClass('hide');
    $('body').toggleClass('no-scroll');
  });

  var mixer = mixitup('.portfolio__content', {
    animation: {
      duration: 300
    }
  });

});