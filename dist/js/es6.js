'use strict';

var MIM = {

  init: function init() {
    MIM.applyHeight();
    MIM.reapplyHeight();
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.setTitleHeight();
  },

  setInitialLanding: function setInitialLanding() {
    var windowWidth = $(window).width();

    if (windowWidth <= 600 && !MIM.height) {
      MIM.height = MIM.getLandingHeight();

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
        padding = MIM.height ? MIM.height : MIM.setInitialLanding();

    $btnContainer.css({ 'paddingTop': padding * 0.25 }).css({ 'paddingBottom': padding * 0.75 });
  },

  applyHeight: function applyHeight() {
    var windowWidth = $(window).width();

    if (windowWidth > 600) {
      return false;
    }

    MIM.makeLandingFullHeight();
  },

  reapplyHeight: function reapplyHeight(previous) {
    var breakpoint = 600,
        $landing = $('.landing'),
        windowWidth = $(window).width();

    if (previous && previous > breakpoint && windowWidth <= breakpoint) {
      MIM.makeLandingFullHeight();
    }

    MIM.previous = windowWidth;
  },

  getLandingHeight: function getLandingHeight() {
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
  MIM.reapplyHeight(MIM.previous);
});