$(function () {
  window.onscroll = function () {
    let scrollTop = $(window).scrollTop();
    let wrapperTopAreaBottom = $('.wrapper-top-area').innerHeight();
    if (scrollTop > wrapperTopAreaBottom) {
      $('.header').addClass('header-scroll-color');
      $('.header-nav').addClass('header-scroll-width');
    } else {
      $('.header').removeClass('header-scroll-color');
      $('.header-nav').removeClass('header-scroll-width');
    }
  };

  $('#nav-toggle').on('click', function () {
    $('body').toggleClass('open');
  });

  $('a[href^="#"]')
    .not('#retop')
    .click(function () {
      var headerHeight = $('header').outerHeight();
      var speed = 1000;
      var href = $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('html, body').animate({ scrollTop: position - headerHeight }, speed, 'swing');
      $('body').toggleClass('open');
      return false;
    });

  $('.buy-now').on('click', function () {
    $('body').toggleClass('open-product');
  });

  $('#gloval-product-nav').on('click', function () {
    $('body').toggleClass('open-product');
  });

  $('.selecter').scrolla({
    mobile: true,
    once: true,
  });
});
$(document).ready(function () {
  $('#slider-left').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    //追加
    focusOnSelect: false,
    draggable: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    waitForAnimate: true,
    // responsive: [
    //   {
    //     breakpoint: 481,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
  $('#slider-right').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    //追加
    focusOnSelect: false,
    draggable: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    waitForAnimate: true,
    // responsive: [
    //   {
    //     breakpoint: 481,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
});
$(function () {
  if ($(document).load) {
    var sliderTopHeight = $('.slide-left').outerHeight();
    var topHeight = $(window).height();
    $('.top-area').css({ height: topHeight - sliderTopHeight + 'px' });
  } else {
    $('.top-area').css({ height: '70vh' });
  }
});
