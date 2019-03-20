import { weekDay } from './weekday';

$(document).ready(function() {
  $('#weekday-form').submit(function(event) {
    event.preventDefault();
    var myDate = $('#myDate').val();
    var output = weekDay(myDate);
    $('#result').text(output);
  });
});