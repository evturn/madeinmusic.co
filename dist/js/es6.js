'use strict';

var MIM = {

  init: function init() {
    MIM.makeLandingFullHeight();
    MIM.preloader();
  },

  makeLandingFullHeight: function makeLandingFullHeight() {
    var $landing = $('.landing'),
        $navbar = $('.navbar'),
        windowHeight = $(window).height(),
        landingHeight = $landing.outerHeight(true),
        navbarHeight = $navbar.outerHeight(true),
        padding = windowHeight - (landingHeight + navbarHeight);

    $landing.css({ 'paddingBottom': padding });
  },

  preloader: function preloader() {
    $(window).load(function () {
      var $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut('slow');
    });
  }

};

$(document).on('ready', function () {
  MIM.init();
});
'use strict';

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.scroll-up').css({ bottom: '25px' });
        } else {
            $('.scroll-up').css({ bottom: '-100px' });
        }
    });
    $('.scroll-up').click(function () {
        $('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();
});