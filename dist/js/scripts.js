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
$(function() {

  $(window).load(function() {
    $("#preloader").delay(500).fadeOut();
    $(".preloader").delay(600).fadeOut("slow");
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
        $('.dmtop').css({bottom:"25px"});
    } else {
        $('.dmtop').css({bottom:"-100px"});
    }
  });
  $('.dmtop').click(function(){
      $('html, body').animate({scrollTop: '0px'}, 800);
      return false;
  });

  $('[data-toggle="tooltip"]').tooltip();

});