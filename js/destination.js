$(function () {

  // datepicker 
  $('.datepicker').datepicker();


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

  $dropBtns.on('click', function (e) {

    $('li > ul').not($(this).children("ul")).hide();
    $(this).children("ul").toggle();
    // prevent event bubbling
    e.stopPropagation();
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
//     menu.classList.add('show');

//     window.addEventListener('mouseup', function (event) {
//       if (event.target != dropBtns && event.target.parentNode != dropBtns) {
//         menu.classList.remove('show');
//       }
//     });


//   }

// })();