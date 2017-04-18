(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
      setInterval(checkAlarm, 1000);

    });



});

},{"./../js/alarm.js":1}]},{},[2]);
