var iAMasonry = {

  gridSetupTotal: 0,
  device: 'mobile',
  breakpointTablet: 748,
  breakpointDesktop: 1023, // 1031 / 1056
  wall: null,

  gridSetup: function(forceRebuild) {

    forceRebuild = forceRebuild || false;

    if ($(window).width() >= iAMasonry.breakpointTablet && $(window).width() < iAMasonry.breakpointDesktop) {

      var deviceNew = 'tablet';

      if (deviceNew != iAMasonry.device || forceRebuild) {
        iAMasonry.destroyGrid();
        iAMasonry.wall = new freewall('.b-masonry__list');
        iAMasonry.wall.reset({
          selector: '.b-masonry__item--visible',
          animate: false,
          cellW: 228,
          cellH: 330,
          fixSize: 0,
          gutterX: 24,
          gutterY: 0,
          cache: 0
        });

        iAMasonry.wall.fitWidth();
        iAMasonry.device = deviceNew;
      }

    } else if ($(window).width() >= iAMasonry.breakpointDesktop) {

      var deviceNew = 'desktop';

      if (deviceNew != iAMasonry.device || forceRebuild) {
        iAMasonry.destroyGrid();
        iAMasonry.wall = new freewall('.b-masonry__list');
        iAMasonry.wall.reset({
          selector: '.b-masonry__item--visible',
          animate: false,
          cellW: 312,
          cellH: 458,
          fixSize: 0,
          gutterX: 23,
          gutterY: 0,
          cache: 0
        });

        iAMasonry.wall.fitWidth();
        iAMasonry.device = deviceNew;

      }

    } else {

      var deviceNew = 'mobile';

      if (deviceNew != iAMasonry.device) {
        iAMasonry.destroyGrid(true);
        iAMasonry.device = deviceNew;
      };

      return false;

    }

  },

  destroyGrid: function(completeDestroy) {

    completeDestroy = completeDestroy || false;

    if (completeDestroy == true && typeof iAMasonry.wall != 'undefined') {
      iAMasonry.wall.destroy();
    };

    $('.b-masonry__list').each(function(){
      var list = $(this);
      list.removeAttr('style');
      list.removeAttr('id');
      list.removeAttr('data-min-width');
      list.removeAttr('data-total-row');
      list.removeAttr('data-total-col');
      list.removeAttr('data-wall-width');
      list.removeAttr('data-wall-height');
    });
    $('.b-masonry__item').each(function(){
      var item = $(this);
      item.removeAttr('style');
      item.removeAttr('id');
      item.removeAttr('data-state');
      item.removeAttr('data-height');
      item.removeAttr('data-width');
      item.removeAttr('data-delay');
    });

  }

}


var iAMasonryFillers = {

  fillerBoxes:  $('.b-masonry__type-common'),
  fillerOne:    $('.b-masonry__type-common').eq(0),
  fillerTwo:    $('.b-masonry__type-common').eq(1),
  fillerThree:  $('.b-masonry__type-common').eq(2),

  hideFillerBoxes: function() {
    var items         = $('.b-masonry__item--visible'),
      totalCells      = 0;

    items.each(function(){
      totalCells += parseInt($(this).attr('data-cells'));
    });

    if (totalCells % 3 == 1) {
      iAMasonryFillers.fillerOne.removeClass('b-masonry__item--visible');

    } else if (totalCells % 3 == 2) {
      iAMasonryFillers.fillerOne.removeClass('b-masonry__item--visible');
      iAMasonryFillers.fillerTwo.removeClass('b-masonry__item--visible');

    }
  },

  showFillerBoxes: function() {
    var fillerBox;
    iAMasonryFillers.fillerBoxes.each(function(){
      fillerBox = $(this);
      if (!fillerBox.hasClass('b-masonry__item--visible')) {
        fillerBox.addClass('b-masonry__item--visible');
      }
    });
  },

  showOneBox: function(which) {
    // which can be 1, 2 or 3
    which = (which < 4 ? which : 1) || 1;
    var visibleFiller = $('.b-masonry__type-common').eq(which-1);
    iAMasonryFillers.fillerBoxes.each(function(){
      $(this).removeClass('b-masonry__item--visible')
    });
    visibleFiller.addClass('b-masonry__item--visible');
  }

}

var iAMasonryLoadMore = {

  setup: function() {
    $('#b-button__expertise').on('click', function(){
      $.get('/expertise/more', function(data) {
        $('.b-masonry__item:last').after(data);
      }).done(function() {
        iAMasonry.gridSetup(true);
      });
      return false;
    });
  }

}


var iAMasonryNewsletter = {

  formInputs: $('.b-masonry__inner-form--newsletter .input-text'),
  submitButton: $('.b-masonry__inner-form--newsletter .b-button__primary'),

  setupForm: function() {
    iAMasonryNewsletter.newsletterFields();
    iAMasonryNewsletter.formInputs.on('keyup', function(){
      iAMasonryNewsletter.newsletterFields();
    });
  },

  newsletterFields: function() {
    var formNotFull = false;
      iAMasonryNewsletter.formInputs.each(function() {
        if ($(this).val() == '') {
          formNotFull = true;
        }
      });
      if ($('.b-masonry__inner-fieldset').find('.email-error').length > 0) {
          formNotFull = true
      }
      if (formNotFull) {
        iAMasonryNewsletter.submitButton.attr('disabled', 'disabled').addClass('b-button--inactive');
      } else {
        iAMasonryNewsletter.submitButton.removeAttr('disabled').removeClass('b-button--inactive');
      }
  }

}

var iAMasonryFilters = {

  setupFilters: function() {

    $('.b-hover-list__link').on('click', function(){
      var list = $(this).closest('.b-hover-list__list');
      var parent = $(this).closest('.b-hover-list__item')
      $('.b-hover-list__item', list).removeClass('b-hover-list__item--selected');
      parent.addClass('b-hover-list__item--selected');
      iAMasonryFilters.updateToggler();
      iAMasonryFilters.closeDropdown();
    });

    $('.b-filters__item--filter-1 .b-filters__link').on('click', function(){
      $('.b-masonry__item').addClass('b-masonry__item--visible');
      iAMasonryFillers.hideFillerBoxes();
      iAMasonry.gridSetup(true);
      return false;
    });

    $('.b-filters__item--filter-2 .b-filters__link').on('click', function(){
      $('.b-masonry__item').removeClass('b-masonry__item--visible');
      $('.b-masonry__item-cat-2, .b-masonry__type-common').addClass('b-masonry__item--visible');
      iAMasonryFillers.showOneBox(1);
      iAMasonry.gridSetup(true);
      return false;
    });

    $('.b-filters__item--filter-3 .b-filters__link').on('click', function(){
      $('.b-masonry__item').removeClass('b-masonry__item--visible');
      $('.b-masonry__item-cat-3, .b-masonry__type-common').addClass('b-masonry__item--visible');
      iAMasonryFillers.showOneBox(2);
      iAMasonry.gridSetup(true);
      return false;
    });

    $('.b-filters__item--filter-4 .b-filters__link').on('click', function(){
      $('.b-masonry__item').removeClass('b-masonry__item--visible');
      $('.b-masonry__item-cat-4, .b-masonry__type-common').addClass('b-masonry__item--visible');
      iAMasonryFillers.showOneBox(3);
      iAMasonry.gridSetup(true);
      return false;
    });

    $('.b-filters__item--filter-5 .b-filters__link').on('click', function(){
      $('.b-masonry__item').removeClass('b-masonry__item--visible');
      $('.b-masonry__item-cat-5, .b-masonry__type-common').addClass('b-masonry__item--visible');
      iAMasonryFillers.showOneBox(1);
      iAMasonry.gridSetup(true);
      return false;
    });

  },

  updateToggler: function() {
    $('.b-filters__link--toggler').text($('.b-hover-list__item--selected .b-filters__link').text());
  },

  closeDropdown: function() {
    iAMasonryFilters.filterList.removeClass('b-filters-list__list--open');
  },

  mobileTogglerLink: $('.b-filters__link--toggler'),
  filterList: $('.b-filters-masonry .b-filters-list__list'),
  itemsNotToggler: $('.b-filters-masonry .b-filters-list__list .b-filter-list__item').not('.b-filters__item--toggler'),

  mobileFilters: function() {
    if ($(window).width() < iAMasonry.breakpointTablet) {
      var selectedItemText = $('.b-hover-list__item--selected .b-filters__link').text();
      if ($('.b-filters__item--toggler', iAMasonryFilters.filterList).length < 1) {
        iAMasonryFilters.filterList.prepend('<li class="b-hover-list__item b-filters__item b-filters__item--toggler"><a class="b-filters__link b-hover-list__link b-filters__link--toggler" href="#">' + selectedItemText + '</a></li>');
        $('.b-filters__link--toggler').on('click', function(){
          iAMasonryFilters.filterList.toggleClass('b-filters-list__list--open');
        });
      }
    } else {
      $('.b-filters__item--toggler', iAMasonryFilters.filterList).remove();
    }
  }

}

function iAExpertiseInit() {
  iAMasonryFillers.hideFillerBoxes();
  iAMasonryFilters.setupFilters();
  iAMasonryFilters.mobileFilters();
  iAMasonryLoadMore.setup();
  iAMasonryNewsletter.setupForm();
  iAMasonry.gridSetup();
}

var iAResizeTimeoutId;
var iAResizeTimeoutDelay = 0;

function iAResizeTimeoutDone(){
  iAMasonry.gridSetup();
  iAMasonryFilters.mobileFilters();
}

$(window).on('load', iAExpertiseInit());

$(window).on('resize', function() {
  clearTimeout(iAResizeTimeoutDone);
  iADoneResizing();
});

function iADoneResizing(){
 // console.log('\n\n = = = = = = = = = \n\n Resizing', resizeDelay);
 iAMasonry.gridSetup();
 iAMasonryFilters.mobileFilters();
}
