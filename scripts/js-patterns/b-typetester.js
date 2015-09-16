$(function() {
  'use strict';
  
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
    // If the typetester is empty, display a <img src="./images/placeholder.png" alt="a placeholder image" />
    if($(this).text().trim().replace(/\|/g, '') === ''){
      $(this)
        .html( $(this).attr('<img src="./images/placeholder.png" alt="a placeholder image" />') + cursorHTML)
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
