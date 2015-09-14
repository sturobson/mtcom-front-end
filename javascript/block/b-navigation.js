$(function() {
  'use strict';

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

}); // end document ready
