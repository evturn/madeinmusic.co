var MIM = {

  init: function() {
    MIM.makeFullHeight();
  },

  makeFullHeight: function() {
    var $landing = $('.landing');
    var $navbar = $('.navbar');
    var windowHeight = $(window).height();
    var landingHeight = $landing.outerHeight(true);
    var navbarHeight = $navbar.outerHeight(true);

    console.log(windowHeight);
    console.log(landingHeight);
    console.log(navbarHeight);

    var padding = windowHeight - (landingHeight + navbarHeight);
    console.log(padding);
    $('.landing .btn-container').css({'paddingBottom': padding});
  },

};

$(document).on('ready', function() {
  MIM.init();
});