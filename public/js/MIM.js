const MIM = {

  init() {
    MIM.makeLandingFullHeight();
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.setTitleHeight();
  },

  makeLandingFullHeight() {
    let $landing = $('.landing'),
        $navbar = $('.navbar'),
        $btnContainer = $('.landing .btn-container'),
        windowHeight = $(window).height(),
        landingHeight = $landing.outerHeight(true),
        navbarHeight = $navbar.outerHeight(true),
        padding = windowHeight - (landingHeight + navbarHeight);

    $btnContainer.css({'paddingTop': padding / 4})
                 .css({'paddingBottom': padding / 2});
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