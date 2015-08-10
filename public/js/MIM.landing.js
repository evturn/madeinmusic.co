MIM.landing = {

  init() {
    MIM.landing.applyHeight();
    MIM.landing.reapplyHeight();
    MIM.landing.setTitleHeight();
  },

  setInitialLanding() {
    let windowWidth = $(window).width();

    if (windowWidth <= 600 && !MIM.height) {
      MIM.height = MIM.landing.getLandingHeight()

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
        landingHeight = MIM.height ? MIM.height : MIM.landing.setInitialLanding(),
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

    MIM.landing.makeLandingFullHeight();

  },

  reapplyHeight(previous) {
    let breakpoint = 600,
        $landing = $('.landing'),
        windowWidth = $(window).width();

    if (previous && (previous > breakpoint) && (windowWidth <= breakpoint)) {
      MIM.landing.makeLandingFullHeight();
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

  setTitleHeight() {
    let imageHeight = $('.contact img').height(),
        $container = $('.contact .title-container');

        $container.css({'height': imageHeight});
  },
};