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



$(function() {
  'use strict';

  //////////////////////////////////////////////////////////
  // g-accordion
  //////////////////////////////////////////////////////////

  // Accordion trigger Variable
  var accordionTrigger = '.g-accordion-toggle';

  $(accordionTrigger).click(function() {

    // More Accordion Variables
    var accordionContent = '.g-accordion-content';
    var selectedAccordionTrigger = 'g-accordion-toggle--selected'; // up and down arrow
    var selectedAccordionContent = 'g-accordion-content--selected'; // showing and hiding accordion content

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

}); // end document ready




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


// Carousel Specimen Show/Hide
$(".image-selector #img-one").click(function() {
  $(".image-selector li").removeClass();
  $(".carousel--item").removeClass("visible").addClass("hidden");
  $(".img-one").removeClass("hidden");
  $(".img-one").addClass("visible");
  $(this).addClass("selected");
  return false;
});

$(".image-selector #img-two").click(function() {
  $(".image-selector li").removeClass();
  $(".carousel--item").removeClass("visible").addClass("hidden");
  $(".img-two").removeClass("hidden");
  $(".img-two").addClass("visible");
  $(this).addClass("selected");
  return false;
});


$(".image-selector #img-three").click(function() {
  $(".image-selector li").removeClass();
  $(".carousel--item").removeClass("visible").addClass("hidden");
  $(".img-three").removeClass("hidden");
  $(".img-three").addClass("visible");
  $(this).addClass("selected");
  return false;
});

$(".image-selector #img-four").click(function() {
  $(".image-selector li").removeClass();
  $(".carousel--item").removeClass("visible").addClass("hidden");
  $(".img-four").removeClass("hidden");
  $(".img-four").addClass("visible");
  $(this).addClass("selected");
  return false;
});

$(".image-selector #img-five").click(function() {
  $(".image-selector li").removeClass();
  $(".carousel--item").removeClass("visible").addClass("hidden");
  $(".img-five").removeClass("hidden");
  $(".img-five").addClass("visible");
  $(this).addClass("selected");
  return false;
});



// instagram feed JS
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:square,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);

// JS for the specific feed required

    var feed = new Instafeed({
      get: 'user',
      userId: '356188239',
      limit: '9',
      clientId: 'f87ce9a9d3e34fc290c8031df0b7168f',
      resolution:'standard_resolution',
  });
feed.run();
