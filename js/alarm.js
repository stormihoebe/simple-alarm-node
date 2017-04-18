function Alarm(hour, minute) {
  this.hour = hour;
  this.minute = minute;
}

Alarm.prototype.alarmSound = function() {
  var alarmSounding = false;
  var currentTimeH = parseInt(moment().format('H'));
  var currentTimeM = parseInt(moment().format('m'));
  if ((this.hour === currentTimeH) && (this.minute === currentTimeM)) {
    alarmSounding = true;
  } else {
    alarmSounding = false;
  }
  return alarmSounding;
};

exports.alarmModule = Alarm;
