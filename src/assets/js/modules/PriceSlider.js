function PriceSlider() {

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
}

module.exports = PriceSlider;
