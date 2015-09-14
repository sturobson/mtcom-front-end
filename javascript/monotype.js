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
  
  //////////////////////////////////////////////////////////
  // b-navigation
  //////////////////////////////////////////////////////////
  
  if ($('.b-navigation__list').length) {
    
    // Initializing Mobile Nav – responsive-nav.com
    var nav = responsiveNav('.b-navigation__list', {
      animate: false,
      label: 'Menu',
      open: function(){
        $('.nav-toggle').text('Close');
        $('body').prepend("<div class='b-navigation__overlay'>&nbsp;</div>");
      },
      close: function(){
        $('.nav-toggle').text('Menu');
        $('.b-navigation__overlay').remove();
        $('.b-mobile-search__input').blur();//prevents from zooming in when search was focused
      },
    });

    $('body').on('click', '.b-navigation__overlay', function() {
      nav.close();
    });

    //Auto dismiss menu bar
    $(document).on('scroll', function(event) {
      if($('.b-navigation__list').hasClass('opened')) {
        var scrollY = 0;
        var thresholder_int = 3;
        if(window.pageYOffset != undefined){
          scrollY = pageYOffset;
        } else {
          var sy, d= document, r= d.documentElement, b= d.body;
          scrollY = r.scrollTop || b.scrollTop || 0;
        }
        var menuHeight = 0;
        $('.b-head').children().each(function(){
          menuHeight += $(this).outerHeight(true);
        });
        menuHeight = Math.max(menuHeight, 400)
        if (scrollY > menuHeight * thresholder_int ) {
          nav.close();
        }
      }
    });

    // Close Navigation when clicking outside of Header
    $(document).on('click', function(event) {
      if ($('.b-navigation__list').hasClass('opened') ) {
        if($(event.target).parents('.b-1-0-0-header').length === 0) {
          nav.close();
          return false;
        }
      }
    });
    
  }
  
  var navResize = function() {
    
    // Breakpoint between Tablet and Desktop, sniffed from CSS
    if (breakpoint.value == 'medium') {
      
      // Close Mobile Nav when going back to Desktop
      if (typeof nav != 'undefined') {
        nav.close();
      }

    // Breakpoint below Tablet, sniffed from CSS
    } else if (breakpoint.value == 'fromAdaptiveToFluid') {

      // Prevent logo to reveal first level navigation
      if( $('.b-navigation__nav').hasClass('b-navigation__nav--breadcrumb') ) {
        $('.b-logo').off('mouseover');
        $('.b-navigation').off('mouseleave');
      }
    
    // Breakpoint Desktop and above, sniffed from CSS
    } else {
      
      // Make logo reveal first level navigation
      if( $('.b-navigation__nav').hasClass('b-navigation__nav--breadcrumb') ) {
        $('.b-logo').on('mouseover', function() {
          $('.b-navigation__list li').removeClass('b-navigation__item--selected');
          $('.b-navigation__list').addClass('visible');
          $('.b-navigation__breadcrumb').addClass('invisible');
        });
        $('.b-navigation').on('mouseleave', function() {
          $('.b-navigation__list').removeClass('visible');
          $('.b-navigation__breadcrumb').removeClass('invisible');
        });
      }
      
      // Close Mobile Nav when going back to Desktop
      if (typeof nav != 'undefined') {
        nav.close();
      }
      
    }
  }
  
  navResize();
  
  $(window).resize(function() {
    navResize();
  });

  //////////////////////////////////////////////////////////
  // b-type-to-show
  //////////////////////////////////////////////////////////

  // Show Button after Typing more than one Character
  $('.b-type-to-show__input').keyup(function(){
    var isNotEmpty = $(this).val().trim().length > 0;
    var $target = $(this).parents('.b-type-to-show-form').find('.b-button__item');
    $target.toggleClass('b-button__item--visible', isNotEmpty ); 
  }); // end b-3-1-0-intro-search

  //////////////////////////////////////////////////////////
  // b-search-form
  //////////////////////////////////////////////////////////

  // Remove Border and Spacing Bottom if Full Width Images are used
  if( $('.b-3-4-1-intro-full-width-background').length === 1) {
    $('.b-3-2-0-intro-search--interaction').addClass('b-3-2-0-intro-search--interaction-fullwidth');
  }

  // Toggle Search Form
  $('.b-meta--interaction .b-meta__search').on('click', function(){

    var searchIsClosed = $(this).hasClass('initial');

    //Check state of Search
    if(searchIsClosed){
      openSearch();
    } else {
      closeSearch();
    }
    // Prevents direct linking to search page
    return false;
  });

  var openSearch = function() {
    $('.b-meta--interaction .b-meta__search').removeClass('initial').find('.b-meta__search-text--active').show();//Shows «Close Search» string
    $('.b-meta--interaction .b-meta__search').find('.b-meta__search-text--inactive').hide();//Hides default search string

    $('.b-3-2-0-intro-search--interaction').addClass('b-3-2-0-intro-search--interaction-active').slideDown(function(){
      setTimeout(function(){ $('.b-search-form__input').focus(); }, 300);
    });
  }

  var closeSearch = function() {
    $('.b-meta--interaction .b-meta__search').addClass('initial').find('.b-meta__search-text--active').hide();//Hides «Close Search» string
    $('.b-meta--interaction .b-meta__search').find('.b-meta__search-text--inactive').show();//Shows default search string

    $('.b-3-2-0-intro-search--interaction').removeClass('b-3-2-0-intro-search--interaction-active').slideUp(function(){
      setTimeout(function(){ $('.b-search-form__input').blur(); }, 300);
    });
  }

  var enableSearchButton = function() {
    var $target = $('.b-search-form__input').parents('.b-search-form').find('.b-button__item');
    if ( $('.b-search-form__input').val().trim().length > 0 ) {
      $target.attr('disabled', false);
    } else {
      $target.attr('disabled', true);
    }
    var isNotEmpty = $('.b-mobile-search__input').val().trim().length > 0;
    var $target = $('.b-mobile-search__input').parents('.b-mobile-search').find('.b-mobile-search__submit-wrapper');
    $target.toggleClass('b-mobile-search__submit-wrapper--visible', isNotEmpty ); 
  }
  
  // Enable Button after Typing more than one Character
  $('.b-search-form__input').keyup(function(){
    $(".b-mobile-search__input").val($(this).val());
    enableSearchButton()
  });
  
  var searchResize = function() {
    if (breakpoint.value == 'fromAdaptiveToFluid') {
      // Hide Search Interaction Field on Mobile
      closeSearch();
    }
  }
  
  searchResize();
  $(window).resize(function() {
    searchResize();
  })// end b-search
  
  //////////////////////////////////////////////////////////
  // b-mobile-search
  //////////////////////////////////////////////////////////

  // Show Button after Typing more than one Character
  $('.b-mobile-search__input').keyup(function(){
    $(".b-search-form__input").val($(this).val());
    enableSearchButton()
  }); // end b-3-1-0-intro-search

  //////////////////////////////////////////////////////////
  // b-hover-list tabs
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
  // b-hover-list filter
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
  // b-item-checkbox-list accordion
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

  //////////////////////////////////////////////////////////
  // b-expertise download
  //////////////////////////////////////////////////////////

  $( 'body' ).on('click', '.b-button__item--expertise', function() {
    $(this).parents('.g-container').find('.b-form--expertise').addClass('b-form--expertise-open');
    $(this).parents('.g-container').find('.b-form--expertise .b-form__canvas').slideDown();
    $(this).attr('disabled', true).attr('value', 'Download');
    $(this).off('click');
    return false;
  });

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

  $('.<img src="./image/placeholder.png" alt="a placeholder image" />.active').on('click', function(){
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
          $(this).siblings('.<img src="./image/placeholder.png" alt="a placeholder image" />').html('<span class="email-error">Email seems invalid</span');
          emailvalid = false;
        } else {
          $(this).siblings('.<img src="./image/placeholder.png" alt="a placeholder image" />').html('Email');
          emailvalid = true;
        }
        if ($(this).val() === '') {
          $(this).siblings('.<img src="./image/placeholder.png" alt="a placeholder image" />').html('Email');
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

  // Demo Interaction when sending Form
  $('.b-12-0-0-contact-form .b-button__item').on('click', function() {
    $(this).parents('.g-container').find('.b-title:nth-child(1)').hide();
    $(this).parents('.g-container').find('.b-title:nth-child(2)').show();
    $(this).parents('.g-container').find('.b-form-sent-image').fadeIn(2000, function() {
      $(this).css('visibility', 'hidden');
      return true;
    });
  });

  //////////////////////////////////////////////////////////
  // b-typetester
  //////////////////////////////////////////////////////////

  // Entering the Typetester and Set Selection
  var enterTypetester = function(){
    //var $cursor = $('.b-typetester__cursor', this);
    $(this).removeClass('initial');
    $(this).find('.b-typetester__cursor').css({
      'visibility':'hidden',
      'font-size':'inherit',
      'opacity':'0'
    });
  };

  // Cursor Variable
  var cursorHTML = '<span class="b-typetester__cursor">|</span>';

  var leaveTypetester = function(){
    // If the typetester is empty, display a <img src="./image/placeholder.png" alt="a placeholder image" />
    if($(this).text().trim().replace(/\|/g, '') === ''){
      $(this)
        .html( $(this).attr('<img src="./image/placeholder.png" alt="a placeholder image" />') + cursorHTML)
        .addClass('initial');
    }
  };

  // Strip HTML when pasting Text
  var stripHTML = function(e){
      e.preventDefault();
      document.execCommand("insertHTML", false, e.originalEvent.clipboardData.getData("text/plain"));
  };

  $('.b-typetester')
    .on('mousedown click', '.b-typetester__write', enterTypetester)
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
      $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('weight-100 weight-200 weight-300 weight-400 weight-500 weight-600 weight-700 weight-800 weight-900').attr('data-id', '');

      // remove current class on write container
      $(this).parents('.b-typetester').find('.b-typetester__write').addClass(className + dataID).attr('data-id', dataID);

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

      // italic trigger
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
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--selected');
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
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--selected');
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
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--selected');
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
              $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--selected');
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

      // condensed trigger
      if ( $(this).parent().hasClass('condensed') ) {

        if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
          // deselect
          // italic is not selected
          if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').hasClass('b-typetester__list-item--selected') ) {
            // wide is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('wide') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--selected');
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
          $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--selected');
        }

        // select state
        $(this).parent().toggleClass('b-typetester__list-item--selected');

        // apply to write container
        $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('wide');
        $(this).parents('.b-typetester').find('.b-typetester__write').toggleClass('condensed');

      }
      // wide trigger
      if ( $(this).parent().hasClass('wide') ) {

        if ( $(this).parent().hasClass('b-typetester__list-item--selected') ) {
            // deselecting condensed
            // italic is not selected
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').hasClass('b-typetester__list-item--selected') ) {
            // condensed is not available
            if ( !$(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').hasClass('condensed') ) {
                  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--selected');
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
            $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--selected');
          }

          // select state
          $(this).parent().toggleClass('b-typetester__list-item--selected');

          // apply to write container
          $(this).parents('.b-typetester').find('.b-typetester__write').removeClass('condensed');
          $(this).parents('.b-typetester').find('.b-typetester__write').toggleClass('wide');
        }
      }
    }
  });
  
  // This Functions syncs Typetester Desktop List and Mobile Select
  var typetesterResize = function() {
    
    // Breakpoint between Tablet and Desktop, sniffed from CSS
    if (breakpoint.value == 'small' || breakpoint.value == 'fromAdaptiveToFluid' || breakpoint.value == 'medium' ) {

      // Treat typetesters separately (if there are multiple instances on a site
      $('.b-typetester__write').each(function() {

        // save selected font weight and data attributes
        var fontWeight = $(this).attr('data-id');
        var classesForSelect = '.weight-' + fontWeight;

        // transfers typetester write classes when viewport is changed from desktop to tablet
        if ( $(this).hasClass('italic') ) {
          classesForSelect = '.weight-' + fontWeight + '.italic';

          if ( $(this).hasClass('condensed') ) {
            classesForSelect = '.weight-' + fontWeight + '.italic.condensed';
          }
          if ( $(this).hasClass('wide') ) {
            classesForSelect = '.weight-' + fontWeight + '.italic.wide';
          }
        } else {
          if ( $(this).hasClass('condensed') ) {
            classesForSelect = '.weight-' + fontWeight + '.condensed';
          }
          if ( $(this).hasClass('wide') ) {
            classesForSelect = '.weight-' + fontWeight + '.wide';
          }
        }
        // removes selected state
        $(this).parents('.b-typetester').find('.b-typetester__meta-select-mobile option').removeClass('b-typetester__list-item--selected').removeAttr('selected');

        // find corresponding option and select it
        $(this).parents('.b-typetester')
          .find('.b-typetester__meta-select-mobile')
          .find(classesForSelect)
          .first()
          .prop('selected',true);
      });

    } else {

      // Transfers typetester write classes when viewport is changed from tablet to desktop
      $('.b-typetester__write').each(function() {
        // save selected font weight and data attributes
        var fontWeight = $(this).attr('data-id');

        //remove all selected classes from weight list
        $(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item').removeClass('b-typetester__list-item--selected');

        // transfer selected option to weight list
        $(this).parents('.b-typetester').find('.b-typetester__meta-list--weight').find("[data-id='" + fontWeight + "']").parent().addClass('b-typetester__list-item--selected');

        // remove all selected classes from style lisgt
        $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .b-typetester__list-item').removeClass('b-typetester__list-item--selected');

        // add selected classes according to select dropdown choices
        if ( $(this).hasClass('italic') ) {
          $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
        }
        if ( $(this).hasClass('condensed') ) {
          $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
        }
        if ( $(this).hasClass('wide') ) {
          $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
        }
      });
    }
  }
  
  typetesterResize();
  
  $(window).resize(function() {
    typetesterResize();
  });
  
  //////////////////////////////////////////////////////////
  // b-typetester home
  //////////////////////////////////////////////////////////

  // Default Typetester
  $('.b-typetester__meta-list-home').load( 'html/typetester-home/malabar.html', function() {
    var dataID = $('.b-typetester__meta-list--weight .b-typetester__list-item--selected .b-typetester__list-trigger').data('id');
    var className = 'weight-';
    $(this).parents('.b-typetester--home').find('.b-typetester__write').attr('class', 'b-typetester__write initial').addClass(className + dataID).attr('data-id', dataID);
    typetesterMobile();
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
      typetesterMobile();
    });

  });

  // Make Links Clickable on Home
  $('.b-typetester--home .b-typetester__write').on('click', function(ev){
    if (ev.target.tagName === 'A'){
      window.location.href = ev.target.getAttribute('href');
    }
  });
  
  //////////////////////////////////////////////////////////
  // b-typetester mobile select
  //////////////////////////////////////////////////////////
  
  // Typetester mobile: applies styles from select to b-typetester__write container
  var typetesterMobile = function(){
    $('.b-typetester__meta-select-mobile').change(function(){
      var selectClasses = $(this).find('option:selected').attr('class').replace(/italic\-/gi, 'italic ');
      
      var selectWeight = $(this).find('option:selected').attr('data-id');

      // remove classes from write container
      $(this).parents('.b-typetester').find('.b-typetester__write').attr('class', 'b-typetester__write initial').attr('data-id', '');

      // add selected classes to write container
      $(this).parents('.b-typetester').find('.b-typetester__write').addClass(selectClasses).attr('data-id', selectWeight);

      // if no classes available, set write container to corresponding weight, without the styles
      if (selectClasses !== undefined ) {
        $(this).parents('.b-typetester').find('.b-typetester__write').addClass(selectClasses).attr('data-id', selectWeight);
      }
    }); // end change function
  }; // end typetester mobile function

  typetesterMobile();

}); // end document ready
