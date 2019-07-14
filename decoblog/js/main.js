$(document).ready(function(){
	
	/* carousel */
	$('.header-carousel_js').slick({
		dots: true,
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	/* menu */
	$(".btn-menu__button").click(function () {
		$('.menu').toggleClass('active');
		$('.btn-menu__item').toggleClass('active');
		$('.btn-menu__button').toggleClass('before_active');
		$('.btn-menu__button').toggleClass('after_active');
    });

});