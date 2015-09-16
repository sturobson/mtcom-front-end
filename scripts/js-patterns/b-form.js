$(function() {
  'use strict';
  
  //////////////////////////////////////////////////////////
  // g-floatlabel (b-form)
  //////////////////////////////////////////////////////////

  // Float Label Plugin see github.com/maman/JVFloat.js
  $('.g-floatlabel').jvFloat();
  $('.input-text').jvFloat()
  $('.input-text').parent().addClass('b-masonry__inner-field');

  var formToggleClass = 'jvFloat--active';

  // Add active class on Select when changing
  $(".b-form__select").on("change", function(){
    $(this).siblings('label').addClass('active');
    $(this).parent().addClass(formToggleClass);
  });

  $('.<img src="./images/placeholder.png" alt="a placeholder image" />.active').on('click', function(){
    $(this).siblings('g-floatlabel').click();
  });


  // Add formToggleClass to non empty inputs
  $('.b-form__input').on('input', function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    $(this).parent().toggleClass(formToggleClass, isNotEmpty);
  });
  $('.input-text').on('input', function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    $(this).parent().toggleClass(formToggleClass, isNotEmpty);
  });

  //////////////////////////////////////////////////////////
  // b-form
  //////////////////////////////////////////////////////////

  var contactFormInput = ".b-form__input, .b-form__select, .input-text";

  $(contactFormInput).change(function() {
    // Set Variables
    var emailvalid = false;
    var empty = false;

    // Check if Email is Valid or Not
    $(this).parents( ".g-container").find('input[type=email]').filter(function(){
        var email=$(this).val();
        var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if( !emailReg.test( email ) ) {
          $(this).siblings('.<img src="./images/placeholder.png" alt="a placeholder image" />').html('<span class="email-error">Email seems invalid</span');
          emailvalid = false;
        } else {
          $(this).siblings('.<img src="./images/placeholder.png" alt="a placeholder image" />').html('Email');
          emailvalid = true;
        }
        if ($(this).val() === '') {
          $(this).siblings('.<img src="./images/placeholder.png" alt="a placeholder image" />').html('Email');
        }
    });

    // Check if fields are empty
    $(this).parents('.g-container').find(contactFormInput).each(function() {
      if ( $(this).val() === '' || $(this).find(':selected').val() === '' )  {
        empty = true;
      }
    });

    // Toggle enable / disable Button
    if ( empty === true || emailvalid === false ) {
        $(this).parents('.g-container').find('.b-button__item').attr('disabled', true);
    } else {
        $(this).parents('.g-container').find('.b-button__item').attr('disabled', false);
    }

  });

  // Fade In all other Input Fields when click on Contact Form Canvas
  var $contactFormCanvas = $( '.b-form--contact .b-form__canvas.initial' );

  $contactFormCanvas.on('click', function() {
    $(this).find('.b-form__table-cell:last-child').slideDown(function(){
      $(this).css('display', 'table-cell');
      $(this).addClass('b-form__table-cell--visible');
    });
    $(this).parents('.g-container').find('.b-button' ).addClass('b-button--visible');
    $(this).find('.b-form__input--textarea').focus();
    $(this).removeClass('initial');
    $contactFormCanvas.off('click');
  });

}); // end document ready