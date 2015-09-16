// Family list buttons
$(".lv-para").click(function() {
  $("#list-view a").removeClass("selected");
		$(this).addClass("selected");
  $(".families__list").addClass("paragraphs");
  return false;
});
$(".lv-list").click(function() {
  $(".families__list").removeClass("paragraphs");
  $("#list-view a").removeClass("selected");
  $(this).addClass("selected");
  return false;
});