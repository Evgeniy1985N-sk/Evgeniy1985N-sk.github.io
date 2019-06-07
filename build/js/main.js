$(document).ready(function(){
	

	$('.sertificate-carousel_js').owlCarousel({
	    loop: false,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true,
	    smartSpeed: 1000
	});

	
	/* sertificate-docs */

	var owl = $('.sertificate-carousel_js');
	owl.owlCarousel();
	owl.on('changed.owl.carousel', function(event) {
		var item = event.item.index;
		console.log(item);
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$('.sertificate-docs__item').eq(item).addClass('sertificate-docs__item_active');
	});

	$('.sertificate-docs').on('click', '.sertificate-docs__item', function() {
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$(this).addClass('sertificate-docs__item_active');
		console.log('sf')
		owl.trigger('to.owl.carousel', $(this).html(), 300);
	});

});