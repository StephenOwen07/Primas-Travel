$(function () {

  // datepicker 
  var $tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  $('#check-in').datepicker({
    showOtherMonths: true,
    minDate: 0
  });

  $('#check-out').datepicker({
    showOtherMonths: true,
    minDate: $tomorrowsDate
  });

  // set checkout placeholder = current date
  $('#check-in').attr('placeholder', Date());
  // set checkout placeholder = tomorrows date
  $('#check-out').attr('placeholder', $tomorrowsDate);

  // Price slider
  $('#slider-range').slider({
    range: true,
    step: 100,
    min: 0,
    max: 30000,
    values: [0, 30000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

      $("#amount").val("TWD " + $("#slider-range").slider("values", 0) +
        " - TWD " + $("#slider-range").slider("values", 1));
    }
  });

  // Sort dropdown menus 
  var $dropBtns = $('.dropdown');

  $dropBtns.on('click', function (event) {

    // hide dropdown content as default
    $('.dropMenu').not($(this).children("ul")).hide();
    // toggle dropdown content when clicked
    $(this).children("ul").toggle();
    // prevent event bubbling
    event.stopPropagation();
    // prevent default browser button behaviour
    event.preventDefault();
  });
  // hide drop menue when clicking outside of element
  $('body').on('click', function () {
    $('.dropMenu').hide();
  });

});



// (function () {

//   var dropBtns = document.querySelectorAll('.dropdown');
//   for (var i = 0; i < dropBtns.length; i++) {
//     dropBtns[i].addEventListener('click', menus);
//   }

//   function menus() {

//     var menu = this.querySelector('.dropMenu');
//     menu.classList.toggle('show');
//     e.stopPropagation();

//     window.addEventListener('mouseup', function (event) {
//       if (event.target != dropBtns && event.target.parentNode != dropBtns) {
//         menu.classList.remove('show');
//       }
//     });


//   }

// })();