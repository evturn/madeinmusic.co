let MIM = {

  init() {
    MIM.triggerPreloader();
    MIM.triggerScrollUp();
    MIM.showScrollUp();
    MIM.landing.init();
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
};

$(document).on('ready', function() {
  MIM.init();
});

$(window).resize(function() {
  MIM.landing.reapplyHeight(MIM.previous);
});