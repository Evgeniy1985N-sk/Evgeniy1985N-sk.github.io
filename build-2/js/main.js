$(document).ready(function(){

	$('.works-carousel').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  centerMode: true,
	  variableWidth: true,
	  arrows: false
	});

	$('.works-graphic__carousel').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  arrows: false,
	   responsive: [
		    {
			breakpoint: 992,
			settings: {
				slidesToShow: 3
				}
		    },
		    {
			breakpoint: 768,
			settings: {
				slidesToShow: 1
				}
		    }
		]
	});

	$('.works-corporates__carousel').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  arrows: false,
	  responsive: [
		    {
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
				}
		    },
		    {
			breakpoint: 992,
			settings: {
				slidesToShow: 3
				}
		    },
		    {
			breakpoint: 768,
			settings: {
				slidesToShow: 1
				}
		    }
		]
	});

});