$(document).ready(function(){

	/* carousel */
	$('.header-carousel__wrap').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		arrows: true
	});
	$('.header-carousel .slick-dots button:contains("1")').addClass('size_big');
	$('.header-carousel .slick-dots button:contains("2")').addClass('size_middle');

	/* menu */
	$('.btn-open').on('click', function() {
		$('.header-nav').toggleClass('active');
		$('.btn-open.mob-menu').toggleClass('active');
		if( $('.header-nav').hasClass('active') ) {
			$('.btn-open.mob-menu').addClass('active');
		}
	});
	$('.btn-close.menu').on('click', function() {
		$('.header-nav').removeClass('active');
	});

	/* popup */
	$('.btn-close.request-popup_big').on('click', function() {
        $.fancybox.close();
	});

	/* detect browser */
	if (navigator.userAgent.indexOf('Trident') > 0 ) {
		$('body').addClass('ie');
	}
	if (navigator.userAgent.indexOf('Edge') > 0 ) {
		$('body').addClass('edge');
	}
	if (navigator.userAgent.indexOf('SamsungBrowser') > 0 ) {
		alert("Привет, Надя!")
	}

});