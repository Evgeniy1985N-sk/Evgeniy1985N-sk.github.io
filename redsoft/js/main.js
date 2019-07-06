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
	    smartSpeed: 1000
	});
	$(".owl-dots").wrapAll("<div class='owl-wrap'></div>");

});