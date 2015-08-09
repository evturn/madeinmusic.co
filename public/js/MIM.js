const MIM = {

  init() {
    MIM.applyHeight();
    MIM.reapplyHeight();
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.setTitleHeight();
  },

  setInitialLanding() {
    let windowWidth = $(window).width();

    if (windowWidth <= 600 && !MIM.height) {
      MIM.height = MIM.getLandingHeight()

      return MIM.height;
    }
  },

  makeLandingFullHeight() {
    let $landing = $('.landing'),
        $navbar = $('.navbar'),
        $btnContainer = $('.landing .btn-container.mobile'),
        windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        navbarHeight = $navbar.outerHeight(true),
        landingHeight = MIM.height ? MIM.height : MIM.setInitialLanding(),
        padding = windowHeight - (landingHeight + navbarHeight),
        paddingTop = padding / 2,
        paddingBottom = padding;


    if (windowWidth <= 320) {
      paddingTop = 25;
      paddingBottom = 60;
    }

    $btnContainer.css({'paddingTop': paddingTop})
                 .css({'paddingBottom': paddingBottom});
  },

  applyHeight() {
    let windowWidth = $(window).width();

    if (windowWidth > 600) {
      return false
    }

    MIM.makeLandingFullHeight();

  },

  reapplyHeight(previous) {
    let breakpoint = 600,
        $landing = $('.landing'),
        windowWidth = $(window).width();

    if (previous && (previous > breakpoint) && (windowWidth <= breakpoint)) {
      MIM.makeLandingFullHeight();
    }

    MIM.previous = windowWidth;
  },

  getLandingHeight() {

    if (window.location.pathname !== '/') {
      return false;
    }

    let windowHeight = $(window).height(),
        $landing = $('.landing'),
        aboutOffset = $('.about').offset().top;

      if (aboutOffset < windowHeight) {
        return aboutOffset;

      }
      else {
        let landingHeight = $('.landing').outerHeight(true)
        return landingHeight;
      }
    },

  triggerPreloader() {

    $(window).load(function() {
      let $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut('slow');
    });

  },

  showScrollUp() {

    $(window).scroll(function(){
      if ($(this).scrollTop() > 1) {
        $('.scroll-up').css({bottom: '25px'});
      }
      else {
        $('.scroll-up').css({bottom: '-100px'});
      }
    });

  },

  triggerScrollUp() {

    $('.scroll-up').click(function(){
      $('html, body').animate({scrollTop: '0px'}, 800);

      return false;
    });

  },

  setTitleHeight() {
    let imageHeight = $('.contact img').height(),
        $container = $('.contact .title-container');

        $container.css({'height': imageHeight});
  },


};

$(document).on('ready', function() {
  MIM.init();
});

$(window).resize(function() {
  MIM.reapplyHeight(MIM.previous);
});