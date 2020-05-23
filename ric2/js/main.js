$(document).ready(function(){

	/* preloader */
	NProgress.start();
	NProgress.done();

	/* carousel */
	$('.main-carousel__wrap').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		arrows: true
	});
	$('.main-carousel .slick-dots button:contains("1")').addClass('size_big');
	$('.main-carousel .slick-dots button:contains("2")').addClass('size_middle');

	/* menu */
	$('.btn-open').on('click', function() {
		$('.aside').toggleClass('active');
		$(this).toggleClass('active');
		$('.btn-open__burger').toggleClass('active');
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
		$('body').addClass('samsung');
	}

});

window.onload = function () {
	$('.preloader').addClass('hidden');
};