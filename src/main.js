import Weekday from './weekday.js';

$(document).ready(function() {
  $('#weekday-form').submit(function(event) {
    event.preventDefault();
    let myDate = $('#myDate').val();
    let d = new Weekday(myDate);
    $('#result').text(d.dayOfWeek);
  });
});
