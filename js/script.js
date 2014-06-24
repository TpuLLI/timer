$(function() {
  var $go = $('.buttoms_go'),
      $timerID,
      $reset = $('.buttoms_reset'),
      $seconds = $('.timer_seconds'),
      $minuts = $('.timer_minuts'),
      $hours = $('.timer_hours');
      var counter = 0;
      var minutes = 0;
      var seconds = 0;
      var hours = 0;

  $go.on('click', function() {
    $timerID = setInterval(function() {

      if ((counter != 0) && (counter % 60 == 0)) {
        minutes++;
        seconds = 0;
      };
      if ((minutes != 0) && (minutes % 60 == 0)) {
        hours++;
        minutes = 0;
      };
        // if (seconds < 10) {'0' + seconds}
      $seconds.text(seconds);
      $minuts.text(minutes);
      $hours.text(hours);
      counter++;
      seconds++;
    }, 0);
  });

  $reset.on('click', function() {
    clearInterval($timerID);
  });

});
