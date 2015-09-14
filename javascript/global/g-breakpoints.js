$(function() {
  'use strict';
  
  //////////////////////////////////////////////////////////
  // Import CSS Breakpoints
  //////////////////////////////////////////////////////////
  var breakpoint = {};
  breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content').replace(/\"/g, '');
  };
  $(window).resize(function () {
    breakpoint.refreshValue();
  }).resize();
  
}); // end document ready
