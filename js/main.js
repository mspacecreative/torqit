(function($) {
	
	// STICKY SERVICES ANCHOR MENU
	function sticktothetop() {
	    if ( $('#stick-here').length ) {
	    	var window_top = $(window).scrollTop(),
	    	    headerHeight = $('header').outerHeight(),
	    		topPoint = $('#stick-here').offset().top - headerHeight;
	    	if (window_top > topPoint) {
	    	    $('.anchor-menu-container').addClass('stick').css('top', headerHeight);
	    	    $('#stick-here').height($('.anchor-menu-container').outerHeight());
	    	} else {
	    	    $('.anchor-menu-container').removeClass('stick').css('top', 'auto');
	    	    $('#stick-here').height(0);
	    	}
	    }
	}
	
	$('.menu-toggle').click(function() {
		var mobileMenu = $('.anchor-menu');
		mobileMenu.toggleClass('reveal');
		
		if ( mobileMenu.hasClass('reveal') ) {
			mobileMenu.slideDown();
			mobileMenu.prev().html('CLOSE');
		} else {
			mobileMenu.slideUp();
			mobileMenu.prev().html('SERVICES NAVIGATION');
		}
	});
	
	if (window.matchMedia("(max-width: 980px)").matches) {
		$('.anchor-menu a').click(function() {
			$(this).parent().parent().slideToggle().removeClass('reveal');
			$(this).parent().parent().prev().html('SERVICES NAVIGATION');
		});
	}
	
	// CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
	function changeGradientHeight() {
		var imgHeight = $('.pimcore-box img');
		$('.pimcore-box > div').height(imgHeight.height()); 
	}
	// END CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
	
	// ANIMATE SCROLL DOWN BUTTON
	var tl = gsap.timeline({
		repeat: -1
	});
	tl.from(".fa-angle-down", { y: '-100%', duration: 0.1 });
	tl.to(".fa-angle-down", { y: '50%', duration: 0.1, delay: 2 });
	tl.to(".fa-angle-down", { y: '100%', duration: 0.1 });
	// END ANIMATE SCROLL DOWN BUTTON
	
	// HEADER NAVIGATION ANIMATION
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 100) {
			$('header').addClass('scroll');
			$('.hamburger').addClass('scroll');
		} else {
			$('header').removeClass('scroll');
			$('.hamburger').removeClass('scroll');
		}
		
		sticktothetop();
		
		if ( $('.anchor-menu-container').hasClass('stick') ) {
			$('body').addClass('hide');
		} else {
			$('body').removeClass('hide');
		}
	});
	// END HEADER NAVIGATION ANIMATION
	
	// CAREERS CONTENT IN LIGHTBOX
	$('.careers-link').click(function() {
		$('body').addClass('reveal');
		
		if ( $('body').hasClass('reveal') ) {
			$('.lightbox.careers').fadeIn();
		} else {
			$('.lightbox.careers').fadeOut();
		}
	});
	
	$('.lightbox.careers .hamburger').click(function() {
		$('body').removeClass('reveal');
	});
	// END CAREERS CONTENT IN LIGHTBOX
	
	// SPLASH / LANDING AREA HEIGHT CALCULATION
	function splashHeight() {
		
		var splashHeightCalc = $('.splash, .case-study-splash');
		if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {
			splashHeightCalc.css('height', '100%');
		}
		else if (window.matchMedia("(min-width: 768px)").matches) {
			splashHeightCalc.height($(window).height());
		
		} else {
			splashHeightCalc.css('height', '100%');
		}
	}
	// END SPLASH / LANDING AREA HEIGHT CALCULATION
	
	// SPLASH / LANDING AREA HEIGHT CALCULATION
	function oneThirdSplashHeight() {
		var oneThirdSplashHeightCalc = $('.services');
		if (window.matchMedia("(max-width: 850px) and (orientation: landscape)").matches) {
			oneThirdsplashHeightCalc.css('height', '100%');
		}
		else if (window.matchMedia("(min-width: 768px)").matches) {
			oneThirdSplashHeightCalc.height($(window).height() / 3);
		
		} else {
			oneThirdsplashHeightCalc.css('height', '100%');
		}
	}
	// END SPLASH / LANDING AREA HEIGHT CALCULATION
	
	// LIGHTBOX ON CASE STUDY PAGE
	$('.open-lightbox').click(function() {
		$('.lightbox.solution-popup').fadeIn();
	});
	
	$('.lightbox .hamburger').click(function() {
		$(this).parent().fadeOut();
	});
	// END LIGHTBOX ON CASE STUDY PAGE
	
	// DOCUMENT READY FUNCTIONS
	$(document).ready(function() {
		
		// CAROUSEL RENDERING
		$('.carousel').slick({
		    dots: true,
			arrows: true,
			adaptiveHeight: true,
		});
		// END CAROUSEL RENDERING
		
		// SPLASH / LANDING AREA HEIGHT RENDERING
		splashHeight();
		oneThirdSplashHeight();
		// END SPLASH / LANDING AREA HEIGHT RENDERING
		
	});
	// END DOCUMENT READY FUNCTIONS
	
	// WINDOW LOAD FUNCTIONS
	$(window).load(function() {
		// CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
		changeGradientHeight();
		// CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
	});
	// END WINDOW LOAD FUNCTIONS
	
	// WINDOW RESIZE FUNCTIONS
	$(window).resize(function() {
		splashHeight();
		oneThirdSplashHeight();
		
		// CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
		changeGradientHeight();
		// CHANGE HEIGHT OF BADGE GRADIENT BACKGROUND
	});
	// END WINDOW RESIZE FUNCTIONS
	
	// SMOOTH SCROLL TO ANCHORS
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
	        return false;
			}
	    }
	});
	// END SMOOTH SCROLL TO ANCHORS
	
	// HAMBURGER TOGGLE
	$('.mobile-nav-button .hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.mobile-nav').slideToggle();
	});
	
	$('.mobile-nav a').click(function() {
		$(this).parent().parent().slideToggle();
		$(this).parent().parent().prev().children('.hamburger').toggleClass('is-active');
	});
	
	var paddingTop = $('header').outerHeight();
	$('.mobile-nav').css('padding-top', paddingTop + 15);
	// END HAMBURGER TOGGLE
	
})(jQuery);
