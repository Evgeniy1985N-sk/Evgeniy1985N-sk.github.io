$(document).ready(function() {
	
	// preview =======================================

	$('.demo .preview-button').on('click', function() {
		$('.demo .preview').addClass('disabled');
	});

	// carousel =======================================

	let slider = $('.demo .carousel').slick({
		dots: false,
		fade: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		lidessToShow: 1,
		arrows: true,
		horizontalSwiping: true,
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

	slider.on('wheel', (function(e) {
	  e.preventDefault();
	  if (e.originalEvent.deltaY < 0) {
	    $(this).slick('slickNext');
	  } else {
	    $(this).slick('slickPrev');
	  }
	}));

	$('.demo .carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		$('.demo .switch-item').removeClass('active');
		$('.demo .switch-item').eq(nextSlide).addClass('active');
	});

	// switch =======================================

	$('.demo .switch-item').on('click', function() {
		$('.demo .switch-item').removeClass('active');
		$(this).addClass('active');
		var index = $('.demo .switch-item').index(this);
		$('.carousel').slick('slickGoTo', index);
	});



});