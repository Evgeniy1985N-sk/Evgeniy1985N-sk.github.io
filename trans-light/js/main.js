$(document).ready(function() {

	/* carousel */
	$('.project-carousel').slick({
		slidesToShow: 2,
		variableWidth: true,
		infinite: true,
		arrows: true
	});

	$('.rent-carousel').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: true
	});

	/* tabs */
	$('.catalog-tabs').on('click', '.catalog-tabs_item:not(.active)', function() {
		$('.catalog-tabs_item').removeClass('active');
		$(this).addClass('active');
		var index = $('.catalog-tabs_item').index($(this));
		$('.catalog-items').removeClass('active');
		$('.catalog-items').eq(index).addClass('active');
	});

});