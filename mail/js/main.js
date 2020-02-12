$(document).ready(function() {

	$('.test-card__header-dots').on('click', function() {
		$(this).toggleClass('active');
		$(this).siblings().toggleClass('active');
	});

	$('.test-card__btn_ghost').on('click', function() {

		var parent1 = $(this).parent().parent();
		$(parent1).children('.test-card__header-title').toggleClass('test-card__header-title_gray');
		$(parent1).children('.test-card__header-text').toggleClass('test-none');

		var parent2 = $(this).parent().parent().parent();
		$(parent2).children('.test-card__items').toggleClass('test-none');

		var parent2 = $(this).parent().parent().parent();
		$(parent1).siblings('.test-card__footer').children('.test-card__footer-text').toggleClass('test-none');

		$(this).toggleClass('click');
		if ( $(this).hasClass('click') ) {
			$(this).html('Включить');
		}
		else {
			$(this).html('Выключить');
		}

	});

	$('.test-card__item').on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

});