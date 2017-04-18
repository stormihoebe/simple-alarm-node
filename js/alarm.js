function Alarm(hour, minute) {
  this.hour = hour;
  this.minute = minute;
};

Alarm.prototype.alarmSound = function() {
  var currentTimeH = parseInt(moment().format('HH'));
  var currentTimeM = parseInt(moment().format('mm'));
  if ((hour === currentTimeH) && (minute === currentTimeM)) {
    $('#alarmOutput').show();
    $('#timeForm').hide();
  } else {
    $('#alarmOutput').hide();
  }
};
