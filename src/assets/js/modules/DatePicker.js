function DatePicker() {

  // datepicker 
  var $tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  $('#check-in').datepicker({
    dateFormat: "dd-M-yy",
    minDate: 0,
    onSelect: function (date) {
      var date2 = $('#check-in').datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#check-out').datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#check-out').datepicker('option', 'minDate', date2);
    }
  });

  $('#check-out').datepicker({
    dateFormat: "dd-M-yy",
    onClose: function () {
      var dt1 = $('#check-in').datepicker('getDate');
      console.log(dt1);
      var dt2 = $('#check-out').datepicker('getDate');
      if (dt2 <= dt1) {
        var minDate = $('#check-out').datepicker('option', 'minDate');
        $('#check-out').datepicker('setDate', minDate);
      }
    }
  });

  // set checkout placeholder = current date
  $('#check-in').attr('placeholder', Date());
  // set checkout placeholder = tomorrows date
  $('#check-out').attr('placeholder', $tomorrowsDate);

}

module.exports = DatePicker;
