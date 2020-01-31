$(document).ready(function() {
	
	// preview =======================================

	$('.demo .preview-button').on('click', function() {
		$('.demo .preview').addClass('disabled');
	});

	// carousel =======================================

	$('.demo .carousel').slick({
		dots: false,
		fade: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		lidessToShow: 1,
		arrows: true,
		responsive: [
	        {
			breakpoint: 769,
			settings: {
				arrows: false,
				}
			}
		]
	});

	// carousel change =======================================

	$('.demo .carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$('.demo .switch-item').removeClass('active');
		$('.demo .switch-item').eq(currentSlide).addClass('active');
	});

	// switch =======================================

	$('.demo .switch-item').on('click', function() {
		$('.demo .switch-item').removeClass('active');
		$(this).addClass('active');
		var index = $('.demo .switch-item').index(this);
		$('.carousel').slick('slickGoTo', index);
	});



});