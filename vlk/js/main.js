
$(document).ready(function() {

	let hidden = 'Cкрыть';
	let show = 'Все категории';
	$('.btn-category').on('click', function() {
		$(this).toggleClass('active');

		$('.nav .nav-link').toggleClass('d-flex');

		if ( $(this).hasClass('active') ) {
			$('.btn-category .btn-show__text').html(hidden);
		} else {
			$('.btn-category .btn-show__text').html(show);
		}
	});

	$('.nav-link').on('click', function() {
		$('.nav-link').removeClass('active');
		$(this).addClass('active');
	});

	let showTags = 'Все теги';
	$('.btn-tags').on('click', function() {
		$('.btn-tags').toggleClass('active');

		$('.main-tag').toggleClass('active');

		$('.main-tag__link').toggleClass('d-inline-block');

		if ( $(this).hasClass('active') ) {
			$('.btn-tags__text').html(hidden);
		} else {
			$('.btn-tags__text').html(showTags);
		}
	});

	$('.main-tag__link').on('click', function() {
		$('.main-tag__link').removeClass('active');
		$(this).addClass('active');
	});	

	let btnPlayer1 = 'Все игры';
	let btnPlayer2 = 'Мультиплеер';
	$('.btn-player').on('click', function() {
		$('.btn-player').removeClass('active');
		$(this).addClass('active');
		if ( $('.btn-player_1').hasClass('active') ) {
			$('.main-group__info').html(btnPlayer1);
		} else {
			$('.main-group__info').html(btnPlayer2);
		}
	});

});