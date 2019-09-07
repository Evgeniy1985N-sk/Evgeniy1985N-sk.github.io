$(document).ready(function(){
	
	/* carousel */
	$('.banner-carousel').owlCarousel({
	    loop: false,
	    margin: 0,
	    items: 1,
	    dots: true,
	    navContainerClass: 'container center-nav',
	    nav: true,
	    navText: false,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000,
	    responsive: {
			511:{
				loop: true
			}
		}
	});
	$('.banner-carousel .owl-dots').addClass('container');

	/* banner-tabs */
	$('.banner-carousel_item.item-1').on('click', '.banner-program_item:not(.active)', function() {
		$('.banner-carousel_item.item-1 .banner-program_item').removeClass('active');
		$(this).addClass('active');
	});
	$('.banner-carousel_item.item-2').on('click', '.banner-program_item:not(.active)', function() {
		$('.banner-carousel_item.item-2 .banner-program_item').removeClass('active');
		$(this).addClass('active');
	});

});