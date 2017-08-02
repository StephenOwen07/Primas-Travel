$(document).ready(function () {

  // scroll top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-btn").fadeIn(300);
    } else {
      $(".scroll-btn").fadeOut(300);
    }
  });

  $(function () {
    $(".scroll-btn").click(function (e) {
      $("html, body").animate({
        scrollTop: "0px"
      },
        500
      );
    });
  });


});