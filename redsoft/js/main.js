$(document).ready(function(){
	
	/* carousel */

	$('.header-carousel_js').owlCarousel({
	    loop: false,
	    margin: 0,
	    items: 1,
	    dots: true,
	    nav: false,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    animateOut: 'fadeOut',
	    smartSpeed: 1000
	});
	$(".owl-dots").wrapAll("<div class='owl-wrap'></div>");

	/* menu */

	$('.btn-menu').on('click', function() {
		$('.header-menu').toggleClass('active');
	});
	$(window).scroll(function(){
	   if ( $(window).scrollTop() > 40 ){
			$('.wrap-bg').addClass('active');
	   }
	   if ( $(window).scrollTop() < 40 ) {
			$('.wrap-bg').removeClass('active');
	   }
});

});