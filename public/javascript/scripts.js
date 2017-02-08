$(function () {
    'use strict';

    //////////////////////////////////////////////////////////
    // b-navigation
    //////////////////////////////////////////////////////////

    // Initializing Mobile Nav – responsive-nav.com
    var nav = responsiveNav('.b-navigation__list', {
        animate: false,
        label: translation['Menu'],//'Menu',
        open: function () {
            $('.nav-toggle').text(translation['Close']);
            $("#homePagetester").blur();
            window.getSelection().removeAllRanges();
        },//'Close'); },
        close: function () {
            $('.nav-toggle').html(translation['Menu']);
        }//'Menu')}; },
    });

    // Close Navigation when clicking outside of Header
    $(document).on('click', function (event) {
        if ($('.b-navigation__list').hasClass('opened')) {
            if ($(event.target).parents('.b-1-0-0-header').length === 0) {
                nav.close();
                return false;
            }
        }
    });
    // Toggle Search Form
    $('.b-meta--interaction .b-meta__search').on('click', function () {

        var searchIsClosed = $(this).hasClass('initial');

        //Check state of Search
        if (searchIsClosed) {
            openSearch();
        } else {
            closeSearch();
        }
        // Prevents direct linking to search page
        return false;
    });
    var isIe = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIe && !!window.StyleMedia;
    if (isIe) {
       $('.p-home-html').css({ "width": '99%' });
    }
    if (isEdge) {
        $('.p-home-html').css({ "width": '99.09%' });
    }
    var openSearch = function () {
        $('.b-meta--interaction .b-meta__search').removeClass('initial').find('.b-meta__search-text--active').show();//Shows «Close Search» string
        $('.b-meta--interaction .b-meta__search').find('.b-meta__search-text--inactive').hide();//Hides default search string

        $('.b-3-2-0-intro-search--interaction').addClass('b-3-2-0-intro-search--interaction-active').slideDown(function () {
            setTimeout(function () { $('.b-search-form__input').focus(); }, 300);
        });
    }

    var closeSearch = function () {
        $('.b-meta--interaction .b-meta__search').addClass('initial').find('.b-meta__search-text--active').hide();//Hides «Close Search» string
        $('.b-meta--interaction .b-meta__search').find('.b-meta__search-text--inactive').show();//Shows default search string

        $('.b-3-2-0-intro-search--interaction').removeClass('b-3-2-0-intro-search--interaction-active').slideUp(function () {
            setTimeout(function () { $('.b-search-form__input').blur(); }, 300);
        });
    }

    var enableSearchButton = function (searchTerm) {
        var $target = $('.b-search-form__input').parents('.b-search-form').find('.b-button__item');
        if (searchTerm.length > 0) {
            $target.attr('disabled', false);
        } else {
            $target.attr('disabled', true);
        }
        var isNotEmpty = $('.b-mobile-search__input').val().trim().length > 0;
        var $target = $('.b-mobile-search__input').parents('.b-mobile-search').find('.b-mobile-search__submit-wrapper');
        $target.toggleClass('b-mobile-search__submit-wrapper--visible', isNotEmpty);
    }


    // Enable Button after Typing more than one Character
    $('.b-search-form__input').keyup(function () {
        $(".b-mobile-search__input").val($(this).val());
        enableSearchButton($(this).val());
    });// end b-search

    //////////////////////////////////////////////////////////
    // b-type-to-show
    //////////////////////////////////////////////////////////

    // Show Button after Typing more than one Character
    $('.b-type-to-show__input').keyup(function () {

        var email = $(this).val();
        var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var emailValid = false;

        if (!emailReg.test(email)) {
            emailValid = false;
        } else {
            emailValid = true;
        }
        if ($(this).val() === '') {
            emailValid = false;
        }
        //var isNotEmpty = $(this).val().trim().length > 0;
        var $target = $(this).parents('.b-type-to-show-form').find('.b-button__item');

        if (emailValid) {
            $target.removeClass('btnMarketoNewsLetter');
            $target.addClass('btnMarketoNewsLetterShow');
        }
        else {
            $target.removeClass('btnMarketoNewsLetterShow');
            $target.addClass('btnMarketoNewsLetter');
        }
    }); // end b-3-1-0-intro-search

    //////////////////////////////////////////////////////////
    // b-mobile-search
    //////////////////////////////////////////////////////////

    // Show Button after Typing more than one Character
    $('.b-mobile-search__input').keyup(function () {
        var isNotEmpty = $(this).val().trim().length > 0;
        var $target = $(this).parents('.b-mobile-search').find('.b-mobile-search__submit-wrapper');
        $target.toggleClass('b-mobile-search__submit-wrapper--visible', isNotEmpty);
    }); // end b-3-1-0-intro-search

    //////////////////////////////////////////////////////////
    // b-hover-list tabs
    //////////////////////////////////////////////////////////

    // Show and Hide Tabs
    $('.b-hover-list__list--tabs .b-hover-list__item .b-hover-list__link').click(function () {
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
    $('.b-hover-list__list--filter .b-hover-list__item .b-hover-list__link').click(function () {

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
        if ($dataFilter === 0) {
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

    $(accordionTrigger).click(function () {

        // More Accordion Variables
        var accordionContent = '.g-accordion-content';
        var selectedAccordionTrigger = 'g-accordion-toggle--selected'; // up and down arrow
        var selectedAccordionContent = 'g-accordion-content--selected'; // showing and hiding accordion content

        // Slide up content, remove class and Set Aria State to false
        $(accordionContent).slideUp().removeClass(selectedAccordionContent).attr('aria-hidden', 'true');

        // If Clicked on a selected accordion trigger, just close the accordion
        if ($(this).hasClass(selectedAccordionTrigger)) {
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

    $checkboxes.click(function () {
        var $parentContainer = $(this).parents('.g-container');
        var isChecked = $('.b-item-checkbox-list__checkbox').is(':checked');

        if (isChecked) {
            $('.b-form .b-form__canvas', $parentContainer).slideDown();
        } else {
            $('.b-form .b-form__canvas', $parentContainer).slideUp();
        }

    });

    //////////////////////////////////////////////////////////
    // b-expertise download
    //////////////////////////////////////////////////////////

    $('body').on('click', '.b-button__item--expertise', function () {
        $(this).parents('.g-container').find('.b-form--expertise').addClass('b-form--expertise-open');
        $(this).parents('.g-container').find('.b-form--expertise .b-form__canvas').slideDown();
        $(this).attr('disabled', true).attr('value', 'Download');
        //$(this).off('click');
        ////return false;
    });

    //////////////////////////////////////////////////////////
    // g-floatlabel (b-form)
    //////////////////////////////////////////////////////////

    // Float Label Plugin see github.com/maman/JVFloat.js
    $('.g-floatlabel').jvFloat();

    var formToggleClass = 'jvFloat--active';

    // Add active class on Select when changing
    $('.b-form__select').change(function () {
        $(this).siblings('label').addClass('active');
        $(this).parent().addClass(formToggleClass);
    });

    // Add formToggleClass to non empty inputs
    $('.b-form__input').on('input', function () {
        var isNotEmpty = $(this).val().trim().length > 0;
        $(this).parent().toggleClass(formToggleClass, isNotEmpty);
    });

    //////////////////////////////////////////////////////////
    // b-form
    //////////////////////////////////////////////////////////

    //var contactFormInput = ".b-form__input, .b-form__select";
    var contactFormGermenInput = "#germenContactUsForm #first_name,#germenContactUsForm #last_name,#germenContactUsForm #company,#germenContactUsForm #00NE0000005eXQT,#germenContactUsForm .germenEmail,#germenContactUsForm #Country ,#germenContactUsForm #marketoQuery , #germenContactUsForm #Mailing_List_Opt_in__c";

    $('.p-overview, .p-article').on("change", contactFormGermenInput, function (e) {
        // Set Variables
        var emailvalid = false;
        var valid = true;

        var curruntObject = this;

        $("#germenContactUsForm #00NE0000005eXQT").siblings('.placeHolder').html('Branche');
        $("#germenContactUsForm #Country").siblings('.placeHolder').html('Land');
        // Check if Email is Valid or Not
        $(this).parents(".g-container").find('input[type=email]').filter(function () {
            var email = $(this).val();
            var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!emailReg.test(email)) {
                $("#germenContactUsForm .germenEmail").siblings('.placeHolder').html('<span style="color:red" class="email-error">E-Mail nicht bekannt</span');
                emailvalid = false;
            } else {
                $(this).siblings('.placeHolder').html('E-Mail-Adresse');
                emailvalid = true;
            }
            if ($(this).val() === '') {
                $(this).siblings('.placeHolder').html('E-Mail-Adresse');
            }
        });

        $(this).parents('.contactusForm').find(contactFormGermenInput).each(function () {

            if ($(this).val() != null && $(this).val().length > 0) {
            }
            else {
                valid = false;
            }
        });

        if (valid == true && emailvalid == true) {
            $("#btnMarketoSendMessageGermen").attr('disabled', false);
        } else {
            $("#btnMarketoSendMessageGermen").attr('disabled', true);
            return false;
        }
        e.stopPropagation();
    });


    $('#contactUsMarketo #contactUsMarketoGermen').on('keyup keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });

    var toValidate = "#contactUsMarketo #FirstName,#contactUsMarketo #LastName,#contactUsMarketo #Company,#contactUsMarketo #My_Company_Mainly_Works_On__c,#contactUsMarketo #Email,#contactUsMarketo #Country ,#contactUsMarketo #marketoQuery";

    $('.p-overview, .p-article').on("change", toValidate, function (e) {

            var valid = false;
            var emailValid = false;
            if ($("#contactUsMarketo #FirstName").val().length > 0 && $("#contactUsMarketo #LastName").val().length > 0 && $("#contactUsMarketo #Company").val().length > 0 && $("#contactUsMarketo #My_Company_Mainly_Works_On__c").val().length > 0
                && $("#contactUsMarketo #Email").val().length > 0 && $("#contactUsMarketo #Country").val().length > 0 && $("#contactUsMarketo #marketoQuery").val().length > 0) {
                valid = true;
            }
            $("#contactUsMarketo #My_Company_Mainly_Works_On__c").siblings('.placeHolder').html('Area of Business');
            $("#contactUsMarketo #Country").siblings('.placeHolder').html('Country');
            // Check if Email is Valid or Not
            if ($("#contactUsMarketo #Email").val().length > 0) {
                var email = $("#contactUsMarketo #Email").val();
                var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (!emailReg.test(email)) {
                    $("#contactUsMarketo #Email").siblings('.placeHolder').html('<span style="color:red" class="email-error">Email seems invalid</span');
                    emailValid = false;
                } else {
                    $("#contactUsMarketo #Email").siblings('.placeHolder').html('Email');
                    emailValid = true;
                }
                if ($("#contactUsMarketo #Email").val() === '') {
                    $("#contactUsMarketo #Email").siblings('.placeHolder').html('Email');
                }
            }

            if (valid === true && emailValid == true) {
                //$('input[type=submit]').prop('disabled', false);
                $("#btnMarketoSendMessage").attr('disabled', false);
            } else {
                //$('input[type=submit]').prop('disabled', true);
                $("#btnMarketoSendMessage").attr('disabled', true);
                return false;
            }
            e.stopPropagation();
    });

    //Asset Download form intrections
    var assetFormInput = "#assetDownloadMarketo #FirstName,#assetDownloadMarketo #LastName,#assetDownloadMarketo #Company,#assetDownloadMarketo #My_Company_Mainly_Works_On__c,#assetDownloadMarketo #Email,#assetDownloadMarketo #Country";

    $(document).on("change", assetFormInput, function () {
        // Set Variables
        var emailvalid = false;
        var empty = false;
        var isOnlyEmailFilled = false;
        // Check if Email is Valid or Not
        $(this).parents(".g-container").find('input[type=email]').filter(function () {
            var email = $(this).val();
            var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!emailReg.test(email)) {
                $(this).siblings('.placeHolder').html('<span class="email-error">Email seems invalid</span');
                emailvalid = false;
            } else {
                $(this).siblings('.placeHolder').html('Email');
                emailvalid = true;
            }
            if ($(this).val() === '') {
                $(this).siblings('.placeHolder').html('Email');
            }
        });

        // Check if fields are empty
        $(this).parents('.g-container').find('select,input[type=text]').each(function () {
            if ($(this).val() === '' || $(this).find(':selected').val() === '') {
                empty = true;
            }
            isOnlyEmailFilled = true;
        });

        // Toggle enable / disable Button
        if (!empty && emailvalid && isOnlyEmailFilled) {
            $(this).parents('.g-container').find('.b-button__item').attr('disabled', false);
        } else {
            $(this).parents('.g-container').find('.b-button__item').attr('disabled', true);
        }

    });

    // Fade In all other Input Fields when click on Contact Form Canvas
    var $contactFormCanvas = $('.marketo-contact-us-form');

    $contactFormCanvas.on('click', function () {
        $(this).find('.b-form__table-cell:last-child').slideDown(function () {
            $(this).css('display', 'table-cell');
            $(this).addClass('b-form__table-cell--visible');
        });
        $(this).parents('.g-container').find('.b-button').addClass('b-button--visible');
        $(this).find('.b-form__input--textarea').focus();
        $(this).removeClass('initial');
        $contactFormCanvas.off('click');
    });

    // Demo Interaction when sending Form
    $('.b-12-0-0-contact-form .b-button__item').on('click', function () {
        $(this).parents('.g-container').find('.b-title:nth-child(1)').hide();
        $(this).parents('.g-container').find('.b-title:nth-child(2)').show();
        $(this).parents('.g-container').find('.b-form-sent-image').fadeIn(2000, function () {
            $(this).css('visibility', 'hidden');
            return true;
        });
    });

    //////////////////////////////////////////////////////////
    // b-typetester
    //////////////////////////////////////////////////////////

    // Entering the Typetester and Set Selection
    var enterTypetester = function () {
        //var $cursor = $('.b-typetester__cursor', this);
        $(this).removeClass('initial');
        $(this).find('.b-typetester__cursor').hide();
    };

    // Cursor Variable
    var cursorHTML = '<span class="b-typetester__cursor">|</span>';

    var leaveTypetester = function () {
        // If the typetester is empty, display a placeholder
        if ($(this).text().trim().replace(/\|/g, '') === '') {
            $(this)
              .html($(this).attr('placeholder') + cursorHTML)
              .addClass('initial');
        }
    };

    // Strip HTML when pasting Text
    var stripHTML = function (e) {
        e.preventDefault();
        document.execCommand("insertHTML", false, e.originalEvent.clipboardData.getData("text/plain"));
    };

    $('.b-typetester')
      .on('click', '.b-typetester__write', enterTypetester)
      .on('blur', '.b-typetester__write', leaveTypetester)
      .on('paste', '.b-typetester__write', stripHTML);

    // Show Controls and Prevent from losing focus
    $('.b-typetester__canvas').on('click', function () {
        $(this).find('.b-typetester__meta-list').addClass('b-typetester__meta-list--visible');
    });

    // Adapt Weight List according to Select and apply default class to write container
    $('.b-typetester--home .b-typetester__meta-select').on('change', function () {
        var typetesterFontName = $(this).val();
    });

    // Make Links Clickable on Home
    $('.b-typetester--home .b-typetester__write').on('click', function (ev) {
        if (ev.target.tagName === 'A') {
            window.location.href = ev.target.getAttribute('href');
        }
    });

    //////////////////////////////////////////////////////////
    // b-typetester mobile
    //////////////////////////////////////////////////////////

    var typetesterMobile = function () {
        // this will be fired when select has changed
        $('.b-typetester__meta-select-mobile').change(function () {
            var selectClasses = $(this).find('option:selected').attr('class');
            var selectWeight = $(this).find('option:selected').attr('data-id');

            // remove classes from write container
            $(this).parents('.b-typetester').find('.b-typetester__write').attr('class', 'b-typetester__write initial').attr('data-id', '');

            // add selected classes to write container
            $(this).parents('.b-typetester').find('.b-typetester__write').addClass(selectClasses).attr('data-id', selectWeight);

            // if no classes available, set write container to corresponding weight, without the styles
            if (selectClasses !== undefined) {
                $(this).parents('.b-typetester').find('.b-typetester__write').addClass(selectClasses).attr('data-id', selectWeight);
            }
        }); // end change function
    }; // end typetester mobile function

    // this function generates the select dropdown menu
    typetesterMobile();


    //////////////////////////////////////////////////////////
    // Viewport Check
    //////////////////////////////////////////////////////////

    function checkSize() {

        if ($(".b-logo").css("background-repeat") === "repeat-x") {

            // Tablet Breakpoint Sniffed from CSS

            // Treat typetesters separately (if there are multiple instances on a site
            //$('.b-typetester__write').each(function() {

            //  // save selected font weight and data attributes
            //  var fontWeight = $(this).attr('data-id');
            //  var classesForSelect = '.weight-' + fontWeight;

            //  // transfers typetester write classes when viewport is changed from desktop to tablet
            //  if ( $(this).hasClass('italic') ) {
            //    classesForSelect = '.weight-' + fontWeight + '.italic';

            //    if ( $(this).hasClass('condensed') ) {
            //      classesForSelect = '.weight-' + fontWeight + '.italic.condensed';
            //    }
            //    if ( $(this).hasClass('wide') ) {
            //      classesForSelect = '.weight-' + fontWeight + '.italic.wide';
            //    }
            //  } else {
            //    if ( $(this).hasClass('condensed') ) {
            //      classesForSelect = '.weight-' + fontWeight + '.condensed';
            //    }
            //    if ( $(this).hasClass('wide') ) {
            //      classesForSelect = '.weight-' + fontWeight + '.wide';
            //    }
            //  }
            //  // removes selected state
            //  $(this).parents('.b-typetester').find('.b-typetester__meta-select-mobile option').removeClass('b-typetester__list-item--selected').removeAttr('selected');

            //  // find corresponding option and select it
            //  $(this).parents('.b-typetester')
            //    .find('.b-typetester__meta-select-mobile')
            //    .find(classesForSelect)
            //    .first()
            //    .prop('selected',true);
            //});

        }
        else if ($(".b-logo").css("background-repeat") === "repeat") {

            // Medium Breakpoint Sniffed from CSS

            // Pervent logo to reveal first level navigation
            if ($('.b-navigation__nav').hasClass('b-navigation__nav--breadcrumb')) {
                $('.b-logo').off('mouseover');
                $('.b-navigation').off('mouseleave');
            }
            // Hide Search Interaction Field on Mobile
            closeSearch();

        } else {

            // Desktop Breakpoint Sniffed from CSS

            // Transfers typetester write classes when viewport is changed from tablet to desktop
            //$('.b-typetester__write').each(function() {
            //  // save selected font weight and data attributes
            //  var fontWeight = $(this).attr('data-id');

            //  //remove all selected classes from weight list
            //  $(this).parents('.b-typetester').find('.b-typetester__meta-list--weight .b-typetester__list-item').removeClass('b-typetester__list-item--selected');

            //  // transfer selected option to weight list
            //  $(this).parents('.b-typetester').find('.b-typetester__meta-list--weight').find("[data-id='" + fontWeight + "']").parent().addClass('b-typetester__list-item--selected');

            //  // remove all selected classes from style lisgt
            //  $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .b-typetester__list-item').removeClass('b-typetester__list-item--selected');

            //  // add selected classes according to select dropdown choices
            //  if ( $(this).hasClass('italic') ) {
            //    $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .italic').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
            //  }
            //  if ( $(this).hasClass('condensed') ) {
            //    $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .condensed').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
            //  }
            //  if ( $(this).hasClass('wide') ) {
            //    $(this).parents('.b-typetester').find('.b-typetester__meta-list--style .wide').removeClass('b-typetester__list-item--inactive').addClass('b-typetester__list-item--selected');
            //  }
            //});

            // Make logo reveal first level navigation
            if ($('.b-navigation__nav').hasClass('b-navigation__nav--breadcrumb')) {
                $('.b-logo').on('mouseover', function () {
                    $('.b-navigation__list li').removeClass('b-navigation__item--selected');
                    $('.b-navigation__list').addClass('visible');
                    $('.b-navigation__breadcrumb').addClass('invisible');
                });
                $('.b-navigation').on('mouseleave', function () {
                    $('.b-navigation__list').removeClass('visible');
                    $('.b-navigation__breadcrumb').removeClass('invisible');
                });
            }

            //////////////////////////////////////////////////////////
            // Close Mobile Nav when going back to Desktop
            //////////////////////////////////////////////////////////
            nav.close();
        }
    }

    //////////////////////////////////////////////////////////
    // Check Size on Load
    //////////////////////////////////////////////////////////
    checkSize();

    //////////////////////////////////////////////////////////
    // Check Size on Window Resize
    //////////////////////////////////////////////////////////
    $(window).resize(checkSize);


    $(window).load(function () {

        setTimeout(function () {
            $('.mktoHasWidth').jvFloat();

            $("#My_Company_Mainly_Works_On__c").parent().find('label').html("Area of Business");
            $("#Country").parent().find('label').html("Country");

            var formToggleClass = 'jvFloat--active';
            $('#Country option:first, #My_Company_Mainly_Works_On__c option:first').attr({
                selected: "",
                disabled: "",
                class: "b-form__select-item--disabled"
            });

            $('#Country, #My_Company_Mainly_Works_On__c').change(function () {
                $(this).siblings('label').addClass('active');
                $(this).parent().addClass(formToggleClass);
            });

            // Add formToggleClass to non empty inputs
            $('.mktoTextField, .mktoEmailField').on('input', function () {
                var isNotEmpty = $(this).val().trim().length > 0;
                $(this).parent().toggleClass(formToggleClass, isNotEmpty);
            });
        }, 200);

    });

    $(document).ready(function () {
        $('.marketo-contact-us-form .b-form__input').on('focus', function () {
            $('.marketo-contact-us-form .marketoform').css('visibility', 'visible');
            var href = "http://app-ab02.marketo.com/js/forms2/css/forms2-theme-shadow.css";
            console.log("href", href);
            if (jQuery('link[rel=stylesheet][href="' + href + '"]').get(0) != undefined) {
                jQuery('link[rel=stylesheet][href="' + href + '"]').get(0).disabled = true;
            }
        });
    });

    //$('.b-typetester__canvas').on('click', function () {
    //    var bhomeHeight = $('.b-home').height();
    //    console.log(bhomeHeight);

    //    var typeHeight = 165;
    //    console.log(typeHeight);
    //    var totalh = bhomeHeight - typeHeight;

    //    console.log(totalh);

    //    $('.b-typetester.b-typetester--home .b-typetester__canvas').css('height', totalh + 'px');
    //    //console.log($('.b-typetester.b-typetester--home .b-typetester__canvas').css('height', bhomeHeight+'px' - '200px'))
    //});

}); // end document ready

//(function () {
//    $(window).load(function () {
//        $("#homePagetester").mCustomScrollbar({
//            theme: "dark-3"
//        });
//    });
//});
var Tabs = {

    init: function () {
        this.bindUIfunctions();
        this.pageLoadCorrectTab();
    },



    bindUIfunctions: function () {

        // Delegation
        $(document)
          .on("click", ".tabs__navigation a[href^='#']:not('.active')", function (event) {
              Tabs.changeTab(this.hash);
              event.preventDefault();
          })
          .on("click", ".tabs__navigation a.active", function (event) {
              Tabs.toggleMobileMenu(event, this);
              event.preventDefault();
          });

    },

    changeTab: function (hash) {

        var anchor = $("[href=" + hash + "]");
        var div = $(hash);

        // activate correct anchor (visually)
        anchor.addClass("active").parent().siblings().find("a").removeClass("active");

        // activate correct div (visually)
        div.addClass("active").siblings().removeClass("active");

        // update URL, no history addition
        // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
        // window.history.replaceState("", "", hash);

        // Close menu, in case mobile
        anchor.closest("ul").removeClass("open");

    },

    // If the page has a hash on load, go to that tab
    pageLoadCorrectTab: function () {
        if (document.location.hash.length > 0) {
            this.changeTab(document.location.hash);
        }
    },

    toggleMobileMenu: function (event, el) {
        $(el).closest("ul").toggleClass("open");
    }

}

Tabs.init();




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


// We bind a new event to our link
$('.share__tool--twitter a').click(function(e){

  //We tell our browser not to follow that link
  e.preventDefault();

  //We get the URL of the link
  var loc = $(this).attr('href');

  //We get the title of the link
  var title  = encodeURIComponent($(this).attr('title'));

  //We trigger a new window with the Twitter dialog, in the middle of the page
  window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

});

// We bind a new event to our link
$('.share__tool--facebook a').click(function(e){
  var appId = $('meta[property="fb:app_id"]').attr("content") || $('meta[property="fb:app_id"]').attr("value");
  var url2share = $('meta[property="og:url"]').attr("content") || $('meta[property="og:url"]').attr("value") || window.location.href;
  //We tell our browser not to follow that link
  e.preventDefault();

  //We get the URL of the link
  var loc = $(this).attr('href');

  //We get the title of the link
  var title  = encodeURIComponent($(this).attr('title'));

  //We trigger a new window with the Twitter dialog, in the middle of the page
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url2share + '&text=' + appId + '&', 'facebook-share-dialog', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

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
