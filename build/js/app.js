!function t(r,e,n){function o(u,a){if(!e[u]){if(!r[u]){var m="function"==typeof require&&require;if(!a&&m)return m(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=e[u]={exports:{}};r[u][0].call(s.exports,function(t){var e=r[u][1][t];return o(e||t)},s,s.exports,t,r,e,n)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(t,r,e){function n(t,r){this.hour=t,this.minute=r}n.prototype.alarmSound=function(){var t=parseInt(moment().format("H")),r=parseInt(moment().format("m"));return this.hour===t&&this.minute===r},e.alarmModule=n},{}],2:[function(t,r,e){var n=t("./../js/alarm.js").alarmModule;$(function(){$("#alarmOutput").hide(),$("#timeForm").submit(function(t){function r(){!0===u.alarmSound()?($("#alarmOutput").show(),$("#timeForm").hide(),console.log("TIME!!!")):($("#alarmOutput").hide(),console.log("I am checking, it isn't time yet"))}t.preventDefault();var e=$("#inputTime").val(),o=parseInt(e.slice(0,2)),i=parseInt(e.slice(3,5)),u=new n(o,i);setInterval(r,1e3)})})},{"./../js/alarm.js":1}]},{},[2]);