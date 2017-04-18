var Alarm = require('./../js/alarm.js').alarmModule;


$(function(){
  $('#alarmOutput').hide();

  $('#timeForm').submit(function(event) {
      event.preventDefault();
      var inputTime = $('#inputTime').val();
      var inputH = parseInt(inputTime.slice(0,2));
      var inputM = parseInt(inputTime.slice(3,5));
      // console.log(inputTime);
      // console.log(inputH);
      // console.log(inputM);
      var newAlarm = new Alarm(inputH, inputM);
      function checkAlarm() {
        var alarmSounding = newAlarm.alarmSound();
        if (alarmSounding === true) {
          $('#alarmOutput').show();
          $('#timeForm').hide();
          console.log("TIME!!!");

        } else {
          $('#alarmOutput').hide();
          console.log("I am checking, it isn't time yet");
        }
      }
      var interval = setInterval(checkAlarm, 1000);

    });



});
