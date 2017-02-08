$('#js-nav-drawer').click(function(){
  $('html').toggleClass('has-active-menu');
  $('.mt-b-nav__items--drawer').toggleClass('is-active');
  $(this).toggleClass('active-button');
  if ($(this).text() == "Menu")
  $(this).text("Close Menu")
  else
  $(this).text("Menu");
});
$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    $('html').removeClass('has-active-menu');
    $('.mt-b-nav__items--drawer').removeClass('is-active');
    $('#js-nav-drawer').text("Menu");
  }
});
$('.mt-b-nav__item--search span').click(function(){
  if ($(this).text() == 'Search')
  $(this).text('Close Search')
  else
  $(this).text('Search');
  $('.mt-b-search').toggleClass('search-open');
  return false;
});
