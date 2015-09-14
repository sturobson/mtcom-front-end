
var carousel = {
	
	setup: function() {
		
		carousel.flexibleItems();
		
		// http://sorgalla.com/jcarousel/
		$('.b-masonry__bodycopy-gallery--slider').each(function(){
			
			var carouselWrapper = $(this);
			
			$('.b-carousel', carouselWrapper).jcarousel({
			    wrap: 'circular'
			});

			$('.jcarousel-prev', carouselWrapper)
				.on('jcarouselcontrol:active', function() {
		            $(this).removeClass('inactive');
		        })
				.on('jcarouselcontrol:inactive', function() {
		            $(this).addClass('inactive');
		        })
				.jcarouselControl({
		        	target: '-=1'
		    	});

		    $('.jcarousel-next', carouselWrapper)
				.on('jcarouselcontrol:active', function() {
					$(this).removeClass('inactive');
				})
				.on('jcarouselcontrol:inactive', function() {
		            $(this).addClass('inactive');
		        })
				.jcarouselControl({
		        	target: '+=1'
		    	});
			
			
		});
		
	},
	
	flexibleItems: function() {
		// Flexible list items inside a carousel list
		
		$('.b-carousel__list').each(function(){
			var items = $('.b-carousel__item', $(this)),
				item,
				itemsLength = items.length;
				
			$(this).width((itemsLength * 100) + '%');
			
			items.each(function(){
				$(this).width((100 / itemsLength) + '%');
			});
			
		});
		
		
		
	}
	
}


var hangingGallery = {
	
	setup: function() {
		
		$('.b-gallery__hang-left__list').each(function(){
			
			var ul = $(this);
			
			switch ($('.b-masonry__bodycopy-gallery--hang-left__item', ul).length) {
				case 1:
			    	ul.addClass('b-gallery__hang-left__list--single');
			    	break;
				case 2:
				case 4:
			    	ul.addClass('b-gallery__hang-left__list--double');
			    	break;
				default:
					ul.addClass('b-gallery__hang-left__list--triple');
			}
			
		});
	}

}

var init = function() {
	carousel.setup();
	hangingGallery.setup();
}

$(window).on('load', init);






