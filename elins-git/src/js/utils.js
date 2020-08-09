
$(document).ready(function() {

	/* preload */

	let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
	$(".preload").css("transition-delay", loadTime + 1 + "ms");
	$(".preload").css("transform", "translateY(-100%)");
	$(".preload__progress").css("transition-duration", loadTime + 1 + "ms");
	$(".preload__progress").css("transform", "translateY(0%)");

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
		autoplaySpeed: 2000,
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

	/* header-nav */

	$(".header-nav__item").hover(
		function() {
			$(".header-nav__link").css("opacity", ".7");
			$(this).children(".header-nav__submenu").slideDown();
		},
		function() {
			$(".header-nav__link").css("opacity", "1");
			$(this).children(".header-nav__submenu").slideUp();
		}
	);

	/* header-nav-submenu */

	$(".header-nav__submenu-link").hover(
		function() {
			$(this).addClass("active");
			$(".header-nav__submenu-link").css("opacity", ".7");
		},
		function() {
			$(this).removeClass("active");
			$(".header-nav__submenu-link").css("opacity", "1");
		}
	);

	/* btn-menu */

	$(".header__btn-menu").on("click", function() {
		$(this).toggleClass("active");
		$(".header-nav").toggleClass("active");
	});

	/* scrollbar */

	 Scrollbar.init(document.querySelector(".page"));

	/* header-top-icon */

	$(".header-top__icon").hover(
		function() {
			$(".header-top__icon").css("opacity", ".7");
		},
		function() {
			$(".header-top__icon").css("opacity", "1");
		}
	);	

	/* skrollr */

	// const s = skrollr.init();

	$(document).bind("scroll", function(){
		alert()
      $(".media__img").each(function(){
        var position = $(this).offset().top;
        if (position < $(window).scrollTop() + $(window).height()) {
        	alert()
        }
        else {
        	alert()
        }
      });
    });

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

});