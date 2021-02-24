// page init
$(document).ready(function() {

	"use strict";
	

	initAddClass();
	// Add Class  init
	function initAddClass() {
		"use strict";
		
		jQuery('.nav-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
	}

	initSlickSlider();
	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.main-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			fade: true,
			autoplaySpeed: 4000
		});
		jQuery('.testimonail-slider').slick({
			dots: true,
			speed: 800,
			infinite: true,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			fade: true,
			autoplaySpeed: 4000
		});
		jQuery('.testimonail-slider2').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 4000,
			vertical: true
		});
		jQuery('.blog-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: false,
			arrows: true,
			autoplaySpeed: 4000,
			responsive: [
			{
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
            ]
		});
	}

	initbackTop();
	// backtop init
	function initbackTop() {
		"use strict";

	    var jQuerybackToTop = jQuery("#back-top");
	    jQuery(window).on('scroll', function() {
	        if (jQuery(this).scrollTop() > 100) {
	            jQuerybackToTop.addClass('active');
	        } else {
	            jQuerybackToTop.removeClass('active');
	        }
	    });
	    jQuerybackToTop.on('click', function(e) {
	        jQuery("html, body").animate({scrollTop: 0}, 900);
	    });
	}

	initStyleChanger();
	// style changer
	function initStyleChanger() {
		"use strict";
		
		var element = jQuery('#style-changer');

		if(element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function(data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}

    initStickyHeader();
	// sticky header init
	function initStickyHeader() {

		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 0;
			var flag = true;


			jQuery(this).css('height' , jQuery(this).innerHeight());

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}
	
	initVegasSlider();
	// Vegas Slider init
	function initVegasSlider() {
	  jQuery("#bgvid").vegas({
	      slides: [
	        {   src: 'images/img22.jpg',
	            video: {
	                src: [
	                    'video/polina.webm',
	                    'video/polina.mp4'
	                ],
	                loop: true,
	                timer: false,
	                mute: true
	            }
	        }
	    ]
	  });
	}

	initMarquee();
	// running line init
	function initMarquee() {
		"use strict";

		jQuery('.line-box').marquee({
			line: '.line',
			animSpeed: 50
		});
	}

	initProgressBar();
	// Progress Bar init
	function initProgressBar() {
		if( jQuery(".progress-bar").length != '' ){
			var waypoint = new Waypoint({
				element: document.getElementById('progress-bar'),
				handler: function(direction) {
					console.log('Scrolled to waypoint!');
					jQuery('.progress-bar li').each(function() {
							var widthBar = jQuery(this).find('.over').attr('data-percent');
							jQuery(this).find('.over').animate({
								'width': widthBar
							});
					});
				},
				offset: '80%'
			});
		}
	}
	
	initLightbox();
	// modal popup init
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
		jQuery("#newsletter-hiddenlink").fancybox().trigger('click');
	}

	initAccordion();
	// accordion menu init
	function initAccordion() {
		"use strict";
		
		jQuery('ul.accordion').slideAccordion({
			addClassBeforeAnimation: true,
			opener: 'a.opener',
			slider: 'div.slide',
			animSpeed: 300
		});
	}

	initGoogleMap();
	// GoogleMap init
	function initGoogleMap() {	
		"use strict";

		jQuery('.map').googleMapAPI({
			marker: 'images/icon.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}
	
	initCounter();
	// Counter init
	function initCounter() {

		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}
	
});


jQuery(window).on('load', function() {

	"use strict";

	initPreLoader()
	// PreLoader init
	function initPreLoader() {
	    "use strict";

	    jQuery('#loader').delay(1000).fadeOut();
	}
});