function Alarm(hour, minute, ampm) {
  this.hour = hour;
  this.minute = minute;
  this.ampm = ampm;
}

Alarm.prototype.alarmSound = function() {
  var currentTimeH = parseInt(moment().format('HH'));
  var currentTimeM = parseInt(moment().format('mm'));
  var currentTimeA = parseInt(moment().format('A'));
  if ((hour === currentTimeH) && (minute === currentTimeM) && (ampm === currentTimeA)) {
        $('#alarmOutput').show();
        $('#timeForm').hide();
      } else {
        $('#alarmOutput').hide();
      }
    }
};
