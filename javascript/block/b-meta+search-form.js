$(function() {
  'use strict';

  //////////////////////////////////////////////////////////
  // b-meta and b-search-form
  //////////////////////////////////////////////////////////

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

}); // end document ready
