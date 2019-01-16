$('.single-item_xs').slick({

	arrows: false,
	infinite: false,
    dots: false

});

// -------- toggle slick

window.addEventListener("resize", function() {
  if (window.innerWidth <= 992) {
    $('.single-item_xs').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('.single-item_xs').slick();
      sliderIsLive = true;
    }
  }
});

$('.tab-xs1').on('click', function() {
  $('.single-item_xs').slick('slickGoTo', 0);
});

$('.tab-xs2').on('click', function() {
  $('.single-item_xs').slick('slickGoTo', 1);
});

$('.tab-xs3').on('click', function() {
  $('.single-item_xs').slick('slickGoTo', 2);
});

$('.single-item_xs').on('afterChange', function(event, slick, currentSlide, nextSlide){

	if(currentSlide == 0) {

		$('.tab-xs1').css('background', 'black');
	 	$('.tab-xs2').css('background', 'transparent');
 		$('.tab-xs3').css('background', 'transparent');

	}

	if(currentSlide == 1) {

		$('.tab-xs2').css('background', 'black');
	 	$('.tab-xs1').css('background', 'transparent');
 		$('.tab-xs3').css('background', 'transparent');

	}

	if(currentSlide == 2) {

		$('.tab-xs3').css('background', 'black');
	 	$('.tab-xs1').css('background', 'transparent');
 		$('.tab-xs2').css('background', 'transparent');

	}

});

// ______________________________

$('.single-item').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	infinite: false,
    dots: false

});

$('.button-1').on('click', function() {
  $('.single-item').slick('slickGoTo', 0);
});

$('.button-2').on('click', function() {
  $('.single-item').slick('slickGoTo', 1);
});

$('.button-3').on('click', function() {
  $('.single-item').slick('slickGoTo', 2);
});
 
$('.button-4').on('click', function() {
  $('.single-item').slick('slickGoTo', 3);
});

$('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide){

      if(currentSlide == 1 || currentSlide == 2 || currentSlide == 3) {
      	$('.prev').css('background', '#b5bbc4');
      }

      else $('.prev').css('background', 'transparent');

});

$('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide){


	if(currentSlide == 3) {
      	$('.next').css('background', 'transparent');
      }

      else $('.next').css('background', '#b5bbc4');

 });


$('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide){

	if(currentSlide == 0) {

		$('.button-1').css('background', 'rgba(0,0,0,.5)');
	 	$('.button-2').css('background', 'rgba(0,0,0,.2)');
 		$('.button-3').css('background', 'rgba(0,0,0,.2)');
		$('.button-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 1) {

		$('.button-2').css('background', 'rgba(0,0,0,.5)');
	 	$('.button-1').css('background', 'rgba(0,0,0,.2)');
 		$('.button-3').css('background', 'rgba(0,0,0,.2)');
		$('.button-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 2) {

		$('.button-3').css('background', 'rgba(0,0,0,.5)');
	 	$('.button-1').css('background', 'rgba(0,0,0,.2)');
 		$('.button-2').css('background', 'rgba(0,0,0,.2)');
		$('.button-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 3) {

		$('.button-4').css('background', 'rgba(0,0,0,.5)');
	 	$('.button-1').css('background', 'rgba(0,0,0,.2)');
 		$('.button-2').css('background', 'rgba(0,0,0,.2)');
		$('.button-3').css('background', 'rgba(0,0,0,.2)');

	}

});
