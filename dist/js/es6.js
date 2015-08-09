'use strict';

var MIM = {

  init: function init() {
    MIM.makeLandingFullHeight();
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.setTitleHeight();
  },

  makeLandingFullHeight: function makeLandingFullHeight() {
    var $landing = $('.landing'),
        $navbar = $('.navbar'),
        $btnContainer = $('.landing .btn-container.mobile'),
        windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        landingHeight = $landing.outerHeight(true),
        navbarHeight = $navbar.outerHeight(true),
        padding = windowHeight - (landingHeight + navbarHeight);

    if (windowWidth > 600) {
      return false;
    }

    $btnContainer.css({ 'paddingTop': padding / 2 }).css({ 'paddingBottom': padding / 2 });
  },

  triggerPreloader: function triggerPreloader() {

    $(window).load(function () {
      var $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut('slow');
    });
  },

  showScrollUp: function showScrollUp() {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.scroll-up').css({ bottom: '25px' });
      } else {
        $('.scroll-up').css({ bottom: '-100px' });
      }
    });
  },

  triggerScrollUp: function triggerScrollUp() {

    $('.scroll-up').click(function () {
      $('html, body').animate({ scrollTop: '0px' }, 800);

      return false;
    });
  },

  setTitleHeight: function setTitleHeight() {
    var imageHeight = $('.contact img').height(),
        $container = $('.contact .title-container');

    $container.css({ 'height': imageHeight });
  }

};

$(document).on('ready', function () {
  MIM.init();
});

$(window).resize(function () {
  // MIM.makeLandingFullHeight();
});