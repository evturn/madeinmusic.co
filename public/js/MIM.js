const MIM = {

  init() {
    MIM.makeLandingFullHeight();
    MIM.preloader();
  },

  makeLandingFullHeight() {
    let $landing = $('.landing'),
        $navbar = $('.navbar'),
        windowHeight = $(window).height(),
        landingHeight = $landing.outerHeight(true),
        navbarHeight = $navbar.outerHeight(true),
        padding = windowHeight - (landingHeight + navbarHeight);

    $landing.css({'paddingBottom': padding});
  },

  preloader: function() {
    $(window).load(function() {
      let $container = $('#preloader'),
          $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut('slow');
    });
  },

};

$(document).on('ready', function() {
  MIM.init();
});