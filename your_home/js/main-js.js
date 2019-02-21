

// --------------- menu -----------------

$('.btn-menu_search-personal').on('click', function() {
	$('.ornament').css('display', 'none');
	$('.block-gallery').css('display', 'none');
	$('.personal__h2').css('display', 'none');
	$('.personal__content .text').css('padding-bottom', '116px');
	$('.personal-found').css('display', 'block');
});
$('.btn-menu_main').on('click', function() {
	$('.ornament').css('display', 'flex');
	$('.block-gallery').css('display', 'flex');
	$('.personal__h2').css('display', 'flex');
	$('.personal__content .text').css('padding-bottom', '89px');
	$('.personal-found').css('display', 'none');

});

// --------------- -----------------


$('.request').on('click', function() {
	$(this).css('color', 'white');
	$('.request-img1').css('opacity', '0');
	$('.request-img2').css('opacity', '1');
	$('.request-img2').css('top', '2px');
	$('.req-modal').css('display', 'block');
});
$('.resume').on('click', function() {
	$(this).css('color', 'white');
	$('.resume-img1').css('opacity', '0');
	$('.resume-img2').css('opacity', '1');
	$('.resume-img2').css('top', '2px');
	$('.res-modal').css('display', 'block');
});


// --------------- -----------------


$('.li2').mouseover(function() {
	$('.li2-ul').css('display', 'block');
});
$('.li2').mouseout(function() {
	$('.li2-ul').css('display', 'none');
});

// --------------- li-hover -----------------

$('.hover1').mouseover(function() {
	$('.hover1_a').css('color', '#45250a');
});
$('.hover1').mouseout(function() {
	$('.hover1_a').css('color', '#fff');
});

$('.hover2').mouseover(function() {
	$('.hover2_a').css('color', '#45250a');
});
$('.hover2').mouseout(function() {
	$('.hover2_a').css('color', '#fff');
});

$('.hover3').mouseover(function() {
	$('.hover3_a').css('color', '#45250a');
});
$('.hover3').mouseout(function() {
	$('.hover3_a').css('color', '#fff');
});

$('.hover4').mouseover(function() {
	$('.hover4_a').css('color', '#45250a');
});
$('.hover4').mouseout(function() {
	$('.hover4_a').css('color', '#fff');
});

$('.hover5').mouseover(function() {
	$('.hover5_a').css('color', '#45250a');
});
$('.hover5').mouseout(function() {
	$('.hover5_a').css('color', '#fff');
});


// --------------- plugin -----------------

(function($) {
	$(function() {
	  $('.styler').styler();
	});
})(jQuery);


// --------------- slick -----------------

$('.single-item').slick({
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});

function changeStyle() {
	$('.btn1 .btn-img').css('display', 'block');
	$('.btn1 .btn-img').css('margin-top', '9px');
	$('.btn1 .btn-img-active').css('display', 'none');
	$('.btn2 .btn-img').css('display', 'block');
	$('.btn2 .btn-img').css('margin-top', '9px');
	$('.btn2 .btn-img-active').css('display', 'none');
	$('.btn3 .btn-img').css('display', 'block');
	$('.btn3 .btn-img').css('margin-top', '9px');
	$('.btn3 .btn-img-active').css('display', 'none');
	$('.btn4 .btn-img').css('display', 'block');
	$('.btn4 .btn-img').css('margin-top', '9px');
	$('.btn4 .btn-img-active').css('display', 'none');
	$('.btn5 .btn-img').css('display', 'block');
	$('.btn5 .btn-img').css('margin-top', '9px');
	$('.btn5 .btn-img-active').css('display', 'none');
	$('.btn6 .btn-img').css('display', 'block');
	$('.btn6 .btn-img').css('margin-top', '9px');
	$('.btn6 .btn-img-active').css('display', 'none');
}

$('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide) {

	if (currentSlide == 0) {
		changeStyle();
		$('.btn1 .btn-img').css('display', 'none');
		$('.btn1 .btn-img-active').css('display', 'block');
    }
    if (currentSlide == 1) {
    	changeStyle();
    	$('.btn2 .btn-img').css('display', 'none');
		$('.btn2 .btn-img-active').css('display', 'block');
      }
	if (currentSlide == 2) {
		changeStyle();
		$('.btn3 .btn-img').css('display', 'none');
		$('.btn3 .btn-img-active').css('display', 'block');
	}
	if (currentSlide == 3) {
		changeStyle();
		$('.btn4 .btn-img').css('display', 'none');
		$('.btn4 .btn-img-active').css('display', 'block');
	}
	if (currentSlide == 4) {
		changeStyle();
		$('.btn5 .btn-img').css('display', 'none');
		$('.btn5 .btn-img-active').css('display', 'block');
	}
	if (currentSlide == 5) {
		changeStyle();
		$('.btn6 .btn-img').css('display', 'none');
		$('.btn6 .btn-img-active').css('display', 'block');
	}
});

$('.btn1').on('click', function() {
  $('.single-item').slick('slickGoTo', 0);
});

$('.btn2').on('click', function() {
  $('.single-item').slick('slickGoTo', 1);
});

$('.btn3').on('click', function() {
  $('.single-item').slick('slickGoTo', 2);
});
 
$('.btn4').on('click', function() {
  $('.single-item').slick('slickGoTo', 3);
});

$('.btn5').on('click', function() {
  $('.single-item').slick('slickGoTo', 4);
});

$('.btn6').on('click', function() {
  $('.single-item').slick('slickGoTo', 5);
});


// --------------- personal -----------------

$('.block1__btn-more').on('click', function() {
	$(this).css('background-image', 'url(img/btn-more-active.png)');
	$(this).css('color', 'white');
});

$('.block2__btn-more').on('click', function() {
	$(this).css('background-image', 'url(img/btn-more-active.png)');
	$(this).css('color', 'white');
});
