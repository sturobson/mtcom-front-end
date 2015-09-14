$(function() {
  'use strict';

  //////////////////////////////////////////////////////////
  // b-item-checkbox-list interaction
  //////////////////////////////////////////////////////////

  // Variables
  var $checkboxes = $('.b-item-checkbox-list__checkbox');

  $checkboxes.click(function() {
    var $parentContainer = $(this).parents('.g-container');
    var isChecked = $('.b-item-checkbox-list__checkbox').is(':checked');

    if(isChecked){
        $('.b-form .b-form__canvas', $parentContainer).slideDown();
    } else {
       $('.b-form .b-form__canvas', $parentContainer).slideUp();
    }

  }); 

}); // end document ready
