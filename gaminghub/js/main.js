
$(document).ready(function() {

	$('.main-header__category').on('click', function() {
		$(this).toggleClass('active');
		if ( $(this).hasClass('active') ) {
			$(this).html('Cкрыть');
		} else {
			$(this).html('Все категории');
		}

		$('.main-header__menu').toggleClass('active');
		$('.main-header__menu-col').toggleClass('active');
		$('.main-header__menu-item').toggleClass('active');
	});

	$( ".main-header__search-input" ).focus(function() {
		$('.main-header__search').addClass('active');
	});	

	$( ".main-header__search-input" ).focusout(function() {
		$('.main-header__search').removeClass('active');
	});

});