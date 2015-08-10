'use strict';

var MIM = {

  init: function init() {
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.landing.init();
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
  }
};

$(document).on('ready', function () {
  MIM.init();
});

$(window).resize(function () {
  MIM.landing.reapplyHeight(MIM.previous);
});
'use strict';

MIM.landing = {

  init: function init() {
    MIM.landing.applyHeight();
    MIM.landing.reapplyHeight();
    MIM.landing.setTitleHeight();
  },

  setInitialLanding: function setInitialLanding() {
    var windowWidth = $(window).width();

    if (windowWidth <= 600 && !MIM.height) {
      MIM.height = MIM.landing.getLandingHeight();

      return MIM.height;
    }
  },

  makeLandingFullHeight: function makeLandingFullHeight() {
    var $landing = $('.landing'),
        $navbar = $('.navbar'),
        $btnContainer = $('.landing .btn-container.mobile'),
        windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        navbarHeight = $navbar.outerHeight(true),
        landingHeight = MIM.height ? MIM.height : MIM.landing.setInitialLanding(),
        padding = windowHeight - (landingHeight + navbarHeight),
        paddingTop = padding / 2,
        paddingBottom = padding;

    if (windowWidth <= 320) {
      paddingTop = 25;
      paddingBottom = 60;
    }

    $btnContainer.css({ 'paddingTop': paddingTop }).css({ 'paddingBottom': paddingBottom });
  },

  applyHeight: function applyHeight() {
    var windowWidth = $(window).width();

    if (windowWidth > 600) {
      return false;
    }

    MIM.landing.makeLandingFullHeight();
  },

  reapplyHeight: function reapplyHeight(previous) {
    var breakpoint = 600,
        $landing = $('.landing'),
        windowWidth = $(window).width();

    if (previous && previous > breakpoint && windowWidth <= breakpoint) {
      MIM.landing.makeLandingFullHeight();
    }

    MIM.previous = windowWidth;
  },

  getLandingHeight: function getLandingHeight() {

    if (window.location.pathname !== '/') {
      return false;
    }

    var windowHeight = $(window).height(),
        $landing = $('.landing'),
        aboutOffset = $('.about').offset().top;

    if (aboutOffset < windowHeight) {
      return aboutOffset;
    } else {
      var landingHeight = $('.landing').outerHeight(true);
      return landingHeight;
    }
  },

  setTitleHeight: function setTitleHeight() {
    var imageHeight = $('.contact img').height(),
        $container = $('.contact .title-container');

    $container.css({ 'height': imageHeight });
  }
};