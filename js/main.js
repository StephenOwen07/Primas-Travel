$(document).ready(function () {

  // scroll top button
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.scroll-btn').fadeIn(1000);
    } else {
      $('.scroll-btn').fadeOut(1000);
    }
  });

  $(function () {
    $('.scroll-btn').click(
      function (e) {
        $('html, body').animate({
          scrollTop: '0px'
        }, 700);
      });
  });

});