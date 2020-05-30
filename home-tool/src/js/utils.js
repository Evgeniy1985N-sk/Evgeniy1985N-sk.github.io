
$(document).ready(function() {

	/* menu */
	$('.header .btn-menu').on('click', function() {
		$(this).toggleClass('active');
		$('.header .nav').slideToggle();
	});

	/* carousel */
	$('.main-carousel').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    dots: false,
	    nav: true,
	    navText:false,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000,
	});	

	/* faq */

	$('.faq .btn-link').on('click', function() {
		$('.faq .btn-link').not(this).removeClass('active');
		$(this).toggleClass('active');
	});

});
