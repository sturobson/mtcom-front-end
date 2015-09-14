$(function() {
  'use strict';
  
  //////////////////////////////////////////////////////////
  // b-type-to-show
  //////////////////////////////////////////////////////////  

  // Show Button after Typing more than one Character
  $('.b-type-to-show__input').keyup(function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    var $target = $(this).parents('.b-type-to-show-form').find('.b-button__item');
    $target.toggleClass('b-button__item--visible', isNotEmpty ); 
  }); // end b-3-1-0-intro-search

}); // end document ready
