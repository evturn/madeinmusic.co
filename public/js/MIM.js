const MIM = {

  init() {
    MIM.makeFullHeight();
  },

  makeFullHeight() {
    let $landing = $('.landing'),
        $navbar = $('.navbar'),
        windowHeight = $(window).height(),
        landingHeight = $landing.outerHeight(true),
        navbarHeight = $navbar.outerHeight(true),
        padding = windowHeight - (landingHeight + navbarHeight);

    $landing.css({'paddingBottom': padding});
  }

};

$(document).on('ready', function() {
  MIM.init();
});