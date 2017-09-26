function ScrollTopBtn() {
  $(document).ready(function () {

    // scroll top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scroll-top-btn").fadeIn(300);
      } else {
        $(".scroll-top-btn").fadeOut(300);
      }
    });


    $(".scroll-top-btn").click(function (e) {
      $("html, body").animate({
        scrollTop: "0px"
      },
        500
      );
    });

  });
}

module.exports = ScrollTopBtn;
