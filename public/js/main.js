$(function() {



  $(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
        $('.scroll-up').css({bottom: '25px'});
    } else {
        $('.scroll-up').css({bottom: '-100px'});
    }
  });
  $('.scroll-up').click(function(){
      $('html, body').animate({scrollTop: '0px'}, 800);
      return false;
  });

  $('[data-toggle="tooltip"]').tooltip();

});