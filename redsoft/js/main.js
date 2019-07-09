$(document).ready(function(){
	
	/* carousel */
	$('.header-carousel').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	/* menu */
	$('.btn-menu').on('click', function() {
		$('.header .main-menu').toggleClass('active');
	});
	$(window).scroll(function(){
	   if ( $(window).scrollTop() > 40 ){
			$('.wrap-bg').addClass('active');
	   }
	   if ( $(window).scrollTop() < 40 ) {
			$('.wrap-bg').removeClass('active');
	   }
	});

});