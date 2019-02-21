
$('.btn-menu').on('click', function() {
	$('.nav__ul').toggleClass('class-hdn-menu');
});

// ----------------------------------------

$('.bascket_open').on('click', function() {
	$('.modal-window').css('opacity', '1');
	$('.modal-window').css('z-index', '10');
});

$('.modal-window').on('click', function() {
	$('.modal-window').css('opacity', '0');
	$('.modal-window').css('z-index', '0');
});

$('.bascket_close').on('click', function() {
	$('.modal-window').css('opacity', '0');
	$('.modal-window').css('z-index', '0');
});


// ----------------------------------------

var quantity = 0;
var quantity2 = 0;
var quantity3 = 0;
var quantity4 = 0;
var quantity5 = 0;
var quantity6 = 0;

var brand_sum = 0;
var brand_sum2 = 0;
var brand_sum3 = 0;
var brand_sum4 = 0;
var brand_sum5 = 0;
var brand_sum6 = 0;

var allSumm = 0;

$('.btn-buy1').on('click', function() {

		var price = 600;
		brand_sum += 600;
		quantity += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na').empty();
		$('.fl-col_na').append('<div>branded shoe</div>');

		$('.fl-col_pr').empty();
		$('.fl-col_pr').append(`${price}`);

		$('.fl-col_qu').empty();
		$('.fl-col_qu').append(`<div>${quantity}</div>`);

		$('.fl-col_su').empty();
		$('.fl-col_su').append(`<div>${brand_sum}</div>`);

});

$('.btn-buy2').on('click', function() {
		
		var price2 = 500;
		brand_sum2 += 500;
		quantity2 += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na2').empty();
		$('.fl-col_na2').append('<div>branded t-shirt</div>');

		$('.fl-col_pr2').empty();
		$('.fl-col_pr2').append(`${price2}`);

		$('.fl-col_qu2').empty();
		$('.fl-col_qu2').append(`<div>${quantity2}</div>`);

		$('.fl-col_su2').empty();
		$('.fl-col_su2').append(`<div>${brand_sum2}</div>`);

});

$('.btn-buy3').on('click', function() {
		
		var price3 = 350;
		brand_sum3 += 350;
		quantity3 += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na3').empty();
		$('.fl-col_na3').append('<div>branded t-shirt2</div>');

		$('.fl-col_pr3').empty();
		$('.fl-col_pr3').append(`${price3}`);

		$('.fl-col_qu3').empty();
		$('.fl-col_qu3').append(`<div>${quantity3}</div>`);

		$('.fl-col_su3').empty();
		$('.fl-col_su3').append(`<div>${brand_sum3}</div>`);

});

$('.btn-buy4').on('click', function() {
		
		var price4 = 200;
		brand_sum4 += 200;
		quantity4 += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na4').empty();
		$('.fl-col_na4').append('<div>branded purse</div>');

		$('.fl-col_pr4').empty();
		$('.fl-col_pr4').append(`${price4}`);

		$('.fl-col_qu4').empty();
		$('.fl-col_qu4').append(`<div>${quantity4}</div>`);

		$('.fl-col_su4').empty();
		$('.fl-col_su4').append(`<div>${brand_sum4}</div>`);

});

$('.btn-buy5').on('click', function() {
		
		var price5 = 100;
		brand_sum5 += 100;
		quantity5 += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na5').empty();
		$('.fl-col_na5').append('<div>branded purse2</div>');

		$('.fl-col_pr5').empty();
		$('.fl-col_pr5').append(`${price5}`);

		$('.fl-col_qu5').empty();
		$('.fl-col_qu5').append(`<div>${quantity5}</div>`);

		$('.fl-col_su5').empty();
		$('.fl-col_su5').append(`<div>${brand_sum5}</div>`);

});

$('.btn-buy6').on('click', function() {
		
		var price6 = 400;
		brand_sum6 += 400;
		quantity6 += 1;

		allSumm = brand_sum + brand_sum2 + brand_sum3 + brand_sum4 + brand_sum5 + brand_sum6;

		$('.bascket__price').html(allSumm + '$');
		$('.all-summ').html('all-summ: ' + allSumm + '$');

		$('.fl-col_na6').empty();
		$('.fl-col_na6').append('<div>branded purse2</div>');

		$('.fl-col_pr6').empty();
		$('.fl-col_pr6').append(`${price6}`);

		$('.fl-col_qu6').empty();
		$('.fl-col_qu6').append(`<div>${quantity6}</div>`);

		$('.fl-col_su6').empty();
		$('.fl-col_su6').append(`<div>${brand_sum6}</div>`);

});


// ----------------------------------------

// function deleteClassActive() {
//     $('.a-home').removeClass('active');
//     $('.a-about').removeClass('active');
//     $('.a-services').removeClass('active');
//     $('.a-portfolio').removeClass('active');
//     $('.a-team').removeClass('active');
//     $('.a-blog').removeClass('active');
//     $('.a-contact').removeClass('active');
//   }
// function addClassA() {
//   var hHome = parseInt($('#home').css('height'));
//   var hAbout = parseInt($('#about').css('height'));
//   var hServices = parseInt($('#services').css('height'));
//   var hPortfolio = parseInt($('#portfolio').css('height'));
//   var hTeam = parseInt($('#team').css('height'));
//   var hBlog = parseInt($('#blog').css('height'));
//   var hContact = parseInt($('#contact').css('height'));
//   var scrolled2 = $(document).scrollTop();
//   if (scrolled2 === 0 || scrolled2 < hHome) {
//     $('.btn-menu').css('background', 'transparent');
//     $('.flex-block').css('margin-top', '35px');
//     if(document.documentElement.clientWidth < 810) $('.flex-block').css('margin-top', '0');

//     $('.container-nav').removeClass('class-menu');
//     deleteClassActive();
//     $('.a-home').addClass('active');
//   }
//   if (scrolled2 >= hHome) {
//     $('.flex-block').css('margin-top', '0');
//     $('.container-nav').addClass('class-menu');
//     deleteClassActive();
//     $('.a-about').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout) ) {
//     deleteClassActive();
//     $('.a-services').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices) ) {
//     deleteClassActive();
//     $('.a-portfolio').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio) ) {
//     deleteClassActive();
//     $('.a-team').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam) ) {
//     deleteClassActive();
//     $('.a-blog').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam + hBlog) ) {
//     deleteClassActive();
//     $('.a-contact').addClass('active');
//   }
// }
// $(document).ready(addClassA);
// $(document).on("scroll", addClassA);
// $('.a-about').on('click', addClassA);

// // ----------------------------------------

// $(document).ready(function() {
//    $("a.topLink").click(function() {
//       $("html, body").animate({
//          scrollTop: $($(this).attr("href")).offset().top + "px"
//       }, {
//          duration: 999,
//          easing: "swing"
//       });
//       return false;
//    });
// });

// ----------------------------------------

$('.single-item').slick({
  dots: true,
  arrows: false,
  autoplay: true
});

// ----------------------------------------

$('.responsive').slick({
	 arrows: true,
	 prevArrow: $('.prev'),
	 nextArrow: $('.next'),
	 dots: false,
	 infinite: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 responsive: [
	    {
		    breakpoint: 1118,
		    settings: 
		    {
		        slidesToShow: 2,
		        slidesToScroll: 2
       		}
	    },
	    {
	      breakpoint: 798,
	      settings: 
	      {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
});

