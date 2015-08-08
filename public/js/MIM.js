const MIM = {

  init() {
    MIM.makeFullHeight();
  },

  makeFullHeight() {
    var $landing = $('.landing');
    var $navbar = $('.navbar');
    var windowHeight = $(window).height();
    var landingHeight = $landing.outerHeight(true);
    var navbarHeight = $navbar.outerHeight(true);
    var padding = windowHeight - (landingHeight + navbarHeight);

    $landing.css({'paddingBottom': padding});
  }

};

$(document).on('ready', function() {
  MIM.init();
});