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
