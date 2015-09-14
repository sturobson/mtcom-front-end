$(function() {
  'use strict';
  
  //////////////////////////////////////////////////////////
  // b-ui-library
  //////////////////////////////////////////////////////////
  
  // Close UI Library Function
  var closeUiLibraryNav = function($toggle) {
    $($toggle).parents('.b-ui-library__nav').find('.b-ui-library__list').hide();
    $($toggle).parents('.b-ui-library__nav').removeClass('open');
    $($toggle).removeClass('open');
    return false;
  }
  // Open UI Library Function  
  var openUiLibraryNav = function($toggle) {
    $($toggle).parents('.b-ui-library__nav').find('.b-ui-library__list').show();
    $($toggle).parents('.b-ui-library__nav').addClass('open');
    $($toggle).addClass('open');
    return false;
  }  
    
  // Main Navigation
  $('.b-ui-library__nav-title').on('click', function(){
    if( $(this).parents('.b-ui-library__nav').hasClass('open') === true ) {
      return closeUiLibraryNav(this);
    } else {
      return openUiLibraryNav(this);
    }
  });
  
  //Leave Navigation Open when an element is selected
  $('.b-ui-library__item-level2--selected').parents('.b-ui-library__item').find('.b-ui-library__item-link').addClass('open');
  $('.b-ui-library__item-level2--selected').parents('.b-ui-library__item').find('.b-ui-library__list-level2').addClass('open');    
    
  // List Sub Folder
  $('.b-ui-library__item-link.expandable').on('click', function(){
    if( $(this).hasClass('open') === true ) {
      $(this).removeClass('open');
      $(this).parents('.b-ui-library__item').find('.b-ui-library__list-level2').removeClass('open');
      return false;
    } else {
      $(this).addClass('open');
      $(this).parents('.b-ui-library__item').find('.b-ui-library__list-level2').addClass('open');
      return false;
    }
  });
  
  //Code Highlighting
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  
}); // end document ready
