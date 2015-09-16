$(function() {
  'use strict';

  //////////////////////////////////////////////////////////
  // Navigation Demo (TO BE DELETED)
  //////////////////////////////////////////////////////////
  /*$('.b-navigation__link').click(function() {
    $('.b-navigation__item').removeClass('b-navigation__item--selected');
    $(this).parent().addClass('b-navigation__item--selected');
    return false;
  });*/


  //////////////////////////////////////////////////////////
  // b-3-1-0-intro-search and 11-0-0-newsletter
  //////////////////////////////////////////////////////////

  // Show Button after Typing more than one Character
  $('.b-type-to-show__input').keyup(function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    var $target = $(this).parents('.b-type-to-show-form').find('.b-button__item');
    $target.toggleClass('b-button__item--visible', isNotEmpty ); 
  }); // end b-3-1-0-intro-search

  //////////////////////////////////////////////////////////
  // b-tab-content
  //////////////////////////////////////////////////////////

  // Show and Hide Tabs
  $('.b-hover-list__list--tabs .b-hover-list__item .b-hover-list__link').click(function() {
    // Get Index of Clicked Tab
    var index = $(this).parent().index();
    var tabContent = '.b-tab-content';
    var $parentContainer = $(this).parents('.g-container');

    // Selected Variables
    var selectedTabTrigger = 'b-hover-list__item--selected';
    var selectedTabContent = 'b-tab-content__item--selected';

    // Remove Aria State and Selected Class on Trigger
    $(this).parent().siblings().removeClass(selectedTabTrigger).attr('aria-selected', 'false');

    // Add Aria State and Selected Class on Trigger
    $(this).parent().addClass(selectedTabTrigger).attr('aria-selected', 'true');

    // Remove Aria State and Selected Class on Content
    $parentContainer.find(tabContent).children().removeClass(selectedTabContent).attr('aria-hidden', 'true');

    // Add Aria State and Selected Class on Content
    $parentContainer.find(tabContent).children().eq(index).addClass(selectedTabContent).attr('aria-hidden', 'false');
  });

  //////////////////////////////////////////////////////////
  // b-item-list Accordion
  //////////////////////////////////////////////////////////

  // Accordion rigger Variable
  var accordionTrigger = '.b-item-list__toggle';

  $(accordionTrigger).click(function() {

    // More Accordion Variables
    var accordionContent = '.b-item-list__item-content';
    var selectedAccordionTrigger = 'b-item-list__toggle--selected'; // up and down arrow
    var selectedAccordionContent = 'b-item-list__content--selected'; // showing and hiding accordion content

    // Slide up content, remove class and Set Aria State to false
    $(accordionContent).slideUp().removeClass(selectedAccordionContent).attr('aria-hidden', 'true');

    // If Clicked on a selected accordion trigger, just close the accordion
    if ( $(this).hasClass(selectedAccordionTrigger) ) {
      $(this).removeClass(selectedAccordionTrigger).attr('aria-selected', 'false');
    }
    // Otherwise close all open accordions and open the clicked one
    else {
      $(accordionTrigger).removeClass(selectedAccordionTrigger).attr('aria-selected', 'false');
      $(this).parent().next(accordionContent).slideDown().addClass(selectedAccordionContent).attr('aria-hidden', 'false');
      $(this).addClass(selectedAccordionTrigger).attr('aria-selected', 'true');
    }
  });

  //////////////////////////////////////////////////////////
  // b-item-list and b-6-1-0-list-downloads Checkbox Interaction
  //////////////////////////////////////////////////////////

  // Variables
  var $checkboxes = $('.b-item-list__checkbox');

  $checkboxes.click(function() {
    var $parentContainer = $(this).parents('.g-container');
    var isChecked = $(this).is(':checked');
    var $submitButton = $('.b-button__item--downloads', $parentContainer);

    // Toggle Download Button
    $submitButton.prop('disabled', !isChecked);

    if(isChecked){
        $('.b-form .b-form__canvas', $parentContainer).slideDown();
    } else {
       $('.b-form .b-form__canvas', $parentContainer).slideUp();

    }

  });

  //////////////////////////////////////////////////////////
  // b-6-1-0-list-downloads Form and Float Label Interaction
  //////////////////////////////////////////////////////////

  // Float Label Plugin see github.com/maman/JVFloat.js
  $('.g-floatlabel').jvFloat();

  var formToggleClass = 'jvFloat--active';

  // Add active class on Select when changing
  $('.b-form__select').change(function(){
    $(this).siblings('label').addClass('active');
    $(this).parent().addClass(formToggleClass);
  });

  // Add formToggleClass to non empty inputs
  $('.b-form__input').on('input', function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    $(this).parent().toggleClass(formToggleClass, isNotEmpty);
  });

  //////////////////////////////////////////////////////////
  // b-client-list
  //////////////////////////////////////////////////////////

  // Set active Filter
  $('.b-hover-list__list--filter .b-hover-list__item .b-hover-list__link').click(function() {

    var $parentContainer = $(this).parents('.g-container');

    // Get data-client-category
    var $dataFilter = $(this).parent().data("id");
    var filterContentList = '.b-filter-list__list';

    // Selected Variables
    var selectedfilterTrigger = 'b-hover-list__item--selected';
    var selectedfilterContent = 'b-filter-list__list-item--selected';

    // Remove Aria State and Selected Class on Trigger
    $(this).parent().siblings().removeClass(selectedfilterTrigger).attr('aria-selected', 'false');

    // Add Aria State and Selected Class on Trigger
    $(this).parent().addClass(selectedfilterTrigger).attr('aria-selected', 'true');

    // Remove Aria State and Selected Class on Content
    $parentContainer.find(filterContentList).children().removeClass(selectedfilterContent).attr('aria-hidden', 'true');

    // Look for corresponding elements in List
    if ( $dataFilter === 0) {
      // Add Aria State and Selected Class on Content
      $parentContainer.find(filterContentList).children().addClass(selectedfilterContent).attr('aria-hidden', 'false');
    } else {
      // Add Aria State and Selected Class on Content
      $parentContainer.find(filterContentList).find("[data-id='" + $dataFilter + "']").addClass(selectedfilterContent).attr('aria-hidden', 'false');
    }
  });

  //////////////////////////////////////////////////////////
  // b-8-0-0-typetester
  //////////////////////////////////////////////////////////

  // Entering the Typetester and Set Selection
  var enterTypetester = function(){
    //var $cursor = $('.b-typetester__cursor', this);
    $(this).removeClass('initial');
    $(this).find('.b-typetester__cursor').hide();
  };

  // Cursor Variable
  var cursorHTML = '<span class="b-typetester__cursor">|</span>';

  var leaveTypetester = function(){
    // If the typetester is empty, display a placeholder
    if($(this).text().trim().replace(/\|/g, '') === ''){
      $(this)
        .html( $(this).attr('placeholder') + cursorHTML)
        .addClass('initial');
    }
  };

  // Strip HTML when pasting Text
  var stripHTML = function(e){
      var pastedText = e.originalEvent.clipboardData.getData("text/plain");
      $(this).html(pastedText);
      e.preventDefault();
  };

  $('.b-typetester')
    .on('click', '.b-typetester__write', enterTypetester)
    .on('blur', '.b-typetester__write', leaveTypetester)
    .on('paste', '.b-typetester__write', stripHTML);

  // Show Controls and Prevent from losing focus
  $( '.b-typetester__canvas' ).on('click', function() {
    $(this).find('.b-typetester__meta-list').addClass('b-typetester__meta-list--visible');
  });

  $( 'body' ).on('click', '.b-typetester__list-trigger', function() {
    // Is an active link
    if( !$(this).parent().hasClass('b-typetester__list-item--inactive')){

      // clicked on weight
      if ( $(this).parents('.b-typetester__meta-list').hasClass('b-typetester__meta-list--weight') ) {

      // do nothing if you click on selected element
      if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
            return false;
          //change selected state
          } else {
        $(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item').removeClass('b-typetester__list-item--selected');
            $(this).parent().addClass('b-typetester__list-item--selected');
      }

      var dataID = $(this).data('id');
      var className = 'weight-';

      // remove all weight classes on write container (could be improved)
      $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('weight-100 weight-200 weight-300 weight-400 weight-500 weight-600 weight-700 weight-800 weight-900');

      // remove current class on write container
      $(this).parents('.b-typetester').find('.b-typetester__write').addClass(className + dataID);

      // Is italic available?
      if ( !$(this).hasClass('italic') ) {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--selected').addClass('b-typetester__list-item--inactive');
            $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('italic');
          } else {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive');
          }

      // Is condensed available?
      if ( !$(this).hasClass('condensed') ) {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--selected').addClass('b-typetester__list-item--inactive');
            $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('condensed');
          } else {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive');
          }

      // Is wide available?
      if ( !$(this).hasClass('wide') ) {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--selected').addClass('b-typetester__list-item--inactive');
            $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('wide');

          } else {
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive');
          }

    // font feature triggers
    } else {

      //////////////////////////////////////////////////////////
      // italic trigger
      //////////////////////////////////////////////////////////
      if ( $(this).parent().hasClass('italic') ) {

        if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
          // deselect
          // condensed is not available
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('condensed') ) {
                $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
          // condensed is available
          } else {
                // wide is selected, keep condensed disabled
                if ( $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').hasClass('b-typetester__list-item--selected') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
                // wide is not selected, enable condensed
                } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive');
                }
              }
          // wide is not available
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('wide') ) {
                $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
              // wide is available
          } else {
            // condensed is selected, keep wide disabled
            if ( $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').hasClass('b-typetester__list-item--selected') ) {
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // condensed is not selected, enable wide
            } else {
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive');
            }
          }
        } else {
          // select
          // italic condensed is not available
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-condensed') ) {
                $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
          // italic condensed is available
              } else {
                // wide is selected, keep condensed disabled
                if ( $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').hasClass('b-typetester__list-item--selected') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
                // wide is not selected, enable condensed
                } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive');
                }
              }
          // italic-wide is not available
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-wide') ) {
                $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
          // italic-wide is available
          } else {
            // wide is selected, keep condensed disabled
            if ( $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').hasClass('b-typetester__list-item--selected') ) {
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // wide is not selected, enable condensed
            } else {
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive');
            }
          }
        }

        // select state
        $(this).parent().toggleClass('b-typetester__list-item--selected');

        // apply to write container
        $(this).parents('.b-typetester').find('.b-typetester__write').toggleClass('italic');
      }

      //////////////////////////////////////////////////////////
      // condensed trigger
      //////////////////////////////////////////////////////////
      if ( $(this).parent().hasClass('condensed') ) {

        if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
          // deselect
          // italic is not selected
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').hasClass('b-typetester__list-item--selected') ) {
            // wide is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('wide') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // wide is available
            } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
            // italic is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // wide is available
            } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
          // italic is selected
          } else {
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-wide') ) {
                  // italic-wide is not available
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            } else {
              // yes, wide is available
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
          }
        } else {
          // select
          // is italic-condensed available?
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-condensed') ) {
            // no
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
          } else {
            // yes, italic-condensed is available
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive');
          }
          // deselect wide
          $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
        }

        // select state
        $(this).parent().toggleClass('b-typetester__list-item--selected');

        // apply to write container
        $(this).parents('.b-typetester').find('.b-typetester__write').toggleClass('condensed');

      }
      //////////////////////////////////////////////////////////
      // wide trigger
      //////////////////////////////////////////////////////////
      if ( $(this).parent().hasClass('wide') ) {

        if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
            // deselecting condensed
            // italic is not selected
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').hasClass('b-typetester__list-item--selected') ) {
            // condensed is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('condensed') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // condensed is available
            } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
            // italic is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            // italic is available
            } else {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
          // italic is selected
              } else {
                // italic-condensed is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-condensed') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            } else {
              // yes, condensed is available
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            }
              }
          } else {
            //italic-wide is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('italic-wide') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
            //italic-wide is available
            } else {
              // yes, italic-condensed is available
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive');
            }

            // deselect condensed
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').addClass('b-typetester__list-item--inactive').removeClass('b-typetester__list-item--selected');
          }

          // select state
          $(this).parent().toggleClass('b-typetester__list-item--selected');

          // apply to write container
          $(this).parents('.b-typetester').find('.b-typetester__write').toggleClass('wide');
        }
      }
    }
  });

  //////////////////////////////////////////////////////////
  // Typetester Home
  //////////////////////////////////////////////////////////


  // Default Typetester
  $('.b-typetester__meta-list-home').load( 'html/typetester-home/malabar.html', function() {
    var dataID = $('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').data('id');
    var className = 'weight-';
    $(this).parents('.b-typetester--home').find('.b-typetester__write').attr('class', 'b-typetester__write initial').addClass(className + dataID);
  });

  // Adapt Weight List according to Select and apply default class to write container
  $('.b-typetester--home .b-typetester__meta-select').on('change', function() {
    var typetesterFontName = $(this).val();

    $(this).parents('.b-typetester--home').attr('class', 'b-typetester b-typetester--home');
    $(this).parents('.b-typetester--home').addClass(typetesterFontName);
    $(this).parents('.b-typetester--home').find('.b-typetester__meta-list-home').load( 'html/typetester-home/' + typetesterFontName + '.html', function() {
      var dataID = $('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').data('id');
      var className = 'weight-';
      $(this).parents('.b-typetester--home').find('.b-typetester__write').attr('class', 'b-typetester__write initial').addClass(className + dataID);
    });

  });

  // Make Links Clickable on Home
  $('.b-typetester--home .b-typetester__write').on('click', function(ev){
    if (ev.target.tagName === 'A'){
      window.location.href = ev.target.getAttribute('href');
    }
  });

  //////////////////////////////////////////////////////////
  // Form Validation
  //////////////////////////////////////////////////////////

  // Enable Send Message Button if all Fields have been filled out

  var contactFormInput = ".b-12-0-0-contact-form .b-form__input, .b-12-0-0-contact-form .b-form__select";

  $(contactFormInput).change(function() {

    var empty = false;
    var emailvalid = false;

    if ( $(this).is( "input[type=email]" ) ) {
      $(this).filter(function(){
        var email=$(this).val();
        var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if( !emailReg.test( email ) ) {
          $(this).siblings('.placeHolder').html('<span style="color:red">Email seems invalid</span');
          emailvalid = false;
        } else {
          $(this).siblings('.placeHolder').html('Email');
          emailvalid = true;
        }
      });
      if ($(this).val() === '') {
        $(this).siblings('.placeHolder').html('Email');
      }
    }

    $(contactFormInput).each(function() {
      if ( $(this).val() === '' )  {
        empty = true;
      }
    });

    if ( empty === true) {
      $(this).parents('.g-container').find('.b-button__item').attr('disabled', true);
    } else if ( emailvalid === false ) {
      $(this).parents('.g-container').find('.b-button__item').attr('disabled', true);
    } else {
      if ( emailvalid === true ) {
        $(this).parents('.g-container').find('.b-button__item').attr('disabled', false);
      }
    }
  });

  // Fade In all other Input Fields when click on Contact Form Canvas
  var $contactFormCanvas = $( '.b-form--contact .b-form__canvas' );

  $contactFormCanvas.on('click', function() {
    $(this).find('.b-form__table-cell:last-child' ).addClass('b-form__table-cell--visible');
  });

  // Demo Interaction when sending Form
  $('.b-12-0-0-contact-form .b-button__item').on('click', function() {
    $(this).parents('.g-container').find('.b-title:nth-child(1)').hide();
    $(this).parents('.g-container').find('.b-title:nth-child(2)').show();
    $(this).parents('.g-container').find('.b-form-sent-image').fadeIn(2000, function() {
      $(this).css('visibility', 'hidden');
      return true;
    });
  });

}); // end document ready

$(window).load(function(){
  //////////////////////////////////////////////////////////
  // Prevents Navigation from Jumping by Setting a fixed width.
  //////////////////////////////////////////////////////////

  $('.b-navigation__item').each(function() {
      if (!$(this).hasClass('b-navigation__item--selected')) {
          var w = $(this).toggleClass('b-navigation__item--selected').innerWidth();
          $(this).toggleClass('b-navigation__item--selected').width(w);
      }
  });
});
