$(function() {
  'use strict';

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

}); // end document ready
