
  $('.btn-demonstration').on('click', function() {
		setTimeout(func, 1500);
});

function func() {
	$('.demonstration-bg').css('opacity', '0');
	$('.demonstration-bg').css('z-index', '-4');
}

// _______________________________________________

if(document.documentElement.clientWidth < 992) {
	$('.single-item_xs').slick({

	arrows: false,
	infinite: false,
    dots: false

});
}

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

// _______________________________________________

if(document.documentElement.clientWidth >= 992 && document.documentElement.clientWidth < 1200) {

$('.single-item_md').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	infinite: false,
    dots: false

});

}


$('.button-1').on('click', function() {
  $('.single-item_md').slick('slickGoTo', 0);
});

$('.button-2').on('click', function() {
  $('.single-item_md').slick('slickGoTo', 1);
});

$('.button-3').on('click', function() {
  $('.single-item_md').slick('slickGoTo', 2);
});
 
$('.button-4').on('click', function() {
  $('.single-item_md').slick('slickGoTo', 3);
});

$('.single-item_md').on('afterChange', function(event, slick, currentSlide, nextSlide){

      if(currentSlide == 1 || currentSlide == 2 || currentSlide == 3) {
      	$('.prev').css('background', 'rgba(181,187,196,.4)');
      }

      else $('.prev').css('background', 'transparent');

});

$('.single-item_md').on('afterChange', function(event, slick, currentSlide, nextSlide){


	if(currentSlide == 3) {
      	$('.next').css('background', 'transparent');
      }

      else $('.next').css('background', 'rgba(181,187,196,.4)');

 });


$('.single-item_md').on('afterChange', function(event, slick, currentSlide, nextSlide){

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


// _______________________________________________

if(document.documentElement.clientWidth >= 1200) {

$('.single-item_lg').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
    dots: false

});

}

$('.btn-1').on('click', function() {
  $('.single-item_lg').slick('slickGoTo', 0);
});

$('.btn-2').on('click', function() {
  $('.single-item_lg').slick('slickGoTo', 1);
});

$('.btn-3').on('click', function() {
  $('.single-item_lg').slick('slickGoTo', 2);
});
 
$('.btn-4').on('click', function() {
  $('.single-item_lg').slick('slickGoTo', 3);
});

$('.single-item_lg').on('afterChange', function(event, slick, currentSlide, nextSlide){

	if(currentSlide == 0) {

		$('.btn-1').css('background', 'rgba(0,0,0,.5)');
	 	$('.btn-2').css('background', 'rgba(0,0,0,.2)');
 		$('.btn-3').css('background', 'rgba(0,0,0,.2)');
		$('.btn-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 1) {

		$('.btn-2').css('background', 'rgba(0,0,0,.5)');
	 	$('.btn-1').css('background', 'rgba(0,0,0,.2)');
 		$('.btn-3').css('background', 'rgba(0,0,0,.2)');
		$('.btn-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 2) {

		$('.btn-3').css('background', 'rgba(0,0,0,.5)');
	 	$('.btn-1').css('background', 'rgba(0,0,0,.2)');
 		$('.btn-2').css('background', 'rgba(0,0,0,.2)');
		$('.btn-4').css('background', 'rgba(0,0,0,.2)');

	}

	if(currentSlide == 3) {

		$('.btn-4').css('background', 'rgba(0,0,0,.5)');
	 	$('.btn-1').css('background', 'rgba(0,0,0,.2)');
 		$('.btn-2').css('background', 'rgba(0,0,0,.2)');
		$('.btn-3').css('background', 'rgba(0,0,0,.2)');

	}

});