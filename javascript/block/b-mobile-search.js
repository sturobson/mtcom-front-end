$(function() {
  'use strict';
    
  //////////////////////////////////////////////////////////
  // b-mobile-search
  //////////////////////////////////////////////////////////

  // Show Button after Typing more than one Character
  $('.b-mobile-search__input').keyup(function(){
    $(".b-search-form__input").val($(this).val());
    enableSearchButton()
  }); // end b-3-1-0-intro-search

}); // end document ready
