
$(document).ready(function() {

	/* preload */

	let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
	$(".preload").css("transition-delay", loadTime + 1 + "ms");
	$(".preload").css("transform", "translateY(-100%)");
	$(".preload__progress").css("transition-duration", loadTime + 1 + "ms");
	$(".preload__progress").css("transform", "translateY(0%)");

	/* smooth-scroll */

	SmoothScroll({ 
		stepSize: 100,
		animationTime: 1800
	});

	/* animation */	

    $(document).bind("scroll", function(){
    	$(".we .block__info").each(function() {
        	let position = $(this).offset().top;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(this).css("width", "100%");
        		$(".we .block__info-text").css("opacity", "1");
        		$(".we .block__caption-line").css("width", "100%");
        		$(".we .block__caption-text").css("opacity", "1");
        	}
		});
    });	

    $(document).bind("scroll", function(){
    	$(".quote").each(function() {
        	let position = $(this).offset().top + 300;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(".project").css("background", "rgba(25, 44, 133, 1)");
        		$(".quote-row_first .quote-row__img").css("transform", "translate(0%, 0%)");
        	}
        	else {
        		$(".project").css("background", "rgba(25, 44, 133, 0)");
        	}
		});
    });	    

    $(document).bind("scroll", function(){
    	$(".quote-row_second").each(function() {
        	let position = $(this).offset().top;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(".quote-row_second .quote-row__img").css("transform", "translate(0%, 0%)");
        	}
		});
    });	    

    $(document).bind("scroll", function(){
    	$(".quote-row_third").each(function() {
        	let position = $(this).offset().top;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(".quote-row_third .quote-row__img").css("transform", "translate(0%, 0%)");
        	}
		});
    });

    $(document).bind("scroll", function(){
    	$(".create .block__info").each(function() {
        	let position = $(this).offset().top;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(this).css("width", "100%");
        		$(".create .block__info-text").css("opacity", "1");
        		$(".create .block__caption-line").css("width", "100%");
        		$(".create .block__caption-text").css("opacity", "1");
        	}
		});
    });

    $(document).bind("scroll", function(){
    	$(".team .block__info").each(function() {
        	let position = $(this).offset().top;
        	if (position < $(window).scrollTop() + $(window).height()) {
        		$(this).css("width", "100%");
        		$(".team .block__info-text").css("opacity", "1");
        		$(".team .block__caption-line").css("width", "100%");
        		$(".team .block__caption-text").css("opacity", "1");
        	}
		});
    });	

	/* carousel */

	$('.header-carousel').slick({
	 	cssEase: 'linear',
	 	fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false
	});
	$(".header-carousel").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		$(".header .header-numbers__current-slide").html(nextSlide + 1);
	});
	const headerCarouselAllSlides = $(".header-carousel img").length;
	$(".header .header-numbers__all-slides").html(headerCarouselAllSlides);

	$('.project-carousel').slick({
	 	cssEase: 'linear',
	 	fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		arrows: true
	});

	$('.product-carousel').slick({
	 	cssEase: 'linear',
	 	fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true
	});
	$(".product-carousel").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		$(".product .header-numbers__current-slide").html(nextSlide + 1);
	});
	const productCarouselAllSlides = $(".product-carousel__slide").length;
	$(".product .header-numbers__all-slides").html(productCarouselAllSlides);

	/* header-nav-item */

	$(".header-nav__item").hover(
		function() {
			$(".header-nav__link").not($(this).children($(".header-nav__link"))).css("opacity", ".7");
			$(".form-search__btn").css("opacity", "0");
		},
		function() {
			$(".header-nav__link").not($(this).children($(".header-nav__link"))).css("opacity", "1");
			$(".form-search__btn").css("opacity", "1");
		}
	);

	/* header-submenu */

	$(".header-nav__submenu-link").hover(
		function() {
			$(".header-nav__submenu-link").not(this).css("opacity", ".7");
		},
		function() {
			$(".header-nav__submenu-link").not(this).css("opacity", "1");
		}
	);

	/* header-menu */

	const headerNav = $(".header-nav").clone(true);
	$(".header__wrapper-nav").html(headerNav);

	$(".header__btn-menu").on("click", function() {
		$(this).css("opacity", "1");
		$(".header-top__icon").not($(this)).css("opacity", ".7");
		$(this).toggleClass("active");
		$(".header-nav").toggleClass("active");
	});

		$(".header__wrapper-nav .header-nav__item.has-submenu").hover(
			function() {
				let heightHeaderTop = $(".header-top").innerHeight();
				let heightNavItem = $(this).innerHeight();
				let positionSubmenu = $(this).offset().top + heightNavItem - heightHeaderTop;
				$(".header__wrapper-nav .header-nav__submenu").css("top", positionSubmenu);
			},
			function() {

			}
		);


	/* header-top-icon */

	$(".header-top__icon").hover(
		function() {
			if ( $(".header__btn-menu").hasClass("active") ) return;
			$(".header-top__icon").css("opacity", ".7");
		},
		function() {
			if ( $(".header__btn-menu").hasClass("active") ) return;
			$(".header-top__icon").css("opacity", "1");
		}
	);

	/* footer */

	const footerProductOriginal = $(".footer-product_original").html();
	$(".footer-product_double").html(footerProductOriginal);	
	const footerCareerOriginal = $(".footer-career_original").html();
	$(".footer-career_double").html(footerCareerOriginal);
	const footerPresscenterOriginal = $(".footer-presscenter_original").html();
	$(".footer-presscenter_double").html(footerPresscenterOriginal);	
	const footerContactOriginal = $(".footer-contact_original").html();
	$(".footer-contact_double").html(footerContactOriginal);	
	const footerServiceOriginal = $(".footer-service_original").html();
	$(".footer-service_double").html(footerServiceOriginal);

	$(".footer-show").on("click", function() {
		$(this).toggleClass("active");
		if ( $(this).hasClass("active") ) {
			$(this).html("скрыть");
			$(".footer-link_hidden").addClass("footer-link_visibility");
			$(".footer-link_visibility").removeClass("footer-link_hidden");
		}
		else {
			$(this).html("показать все");
			$(".footer-link_visibility").addClass("footer-link_hidden");
			$(".footer-link_hidden").removeClass("footer-link_visibility");
		}
	});

	$(".footer-title").on("click", function() {
		$(this).siblings(".footer-links").toggleClass("active");
		$(this).siblings(".footer-show").toggleClass("visibility");
		$(this).siblings(".footer-contacts").toggleClass("active");
	});

	/* scroll to anchor */

	$('.footer-top').on('click', function() {
	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 500,
	        easing: "linear" 
	    });

	    return false;
	});

});