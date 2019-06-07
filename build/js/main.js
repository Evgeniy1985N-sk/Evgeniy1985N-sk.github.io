$(document).ready(function(){
	
	/* carousel */

	$('.main-carousel_js').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000
	});

	$('.about-carousel_js').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav gray',
	    dots: true,
	    nav: true,
	    smartSpeed: 1000
	});

	$('.case-carousel_js').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true,
	    smartSpeed: 1000
	});

	$('.case-carousel_js-2').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true,
	    smartSpeed: 1000
	});

	$('.otrasly_owl-carousel').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true,
	    smartSpeed: 1000
	});

	$('.relation__owl-carousel').owlCarousel({
	    loop: true,
	    margin: 0,
	    items: 2,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: false,
	    smartSpeed: 1000,
	    responsiveClass:true,
	     responsive:{
	    	0:{
	    		items:1,
	            nav:true,
	            dots:true,
	    	},
	        1200:{
	            items:2
	        }
	    }
	});

	$('.team_owl-carousel').owlCarousel({
	    loop: false,
	    margin: 0,
	    items: 4,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true,
	    smartSpeed: 1000
	});

	$('.sertificate-carousel_js').owlCarousel({
	    loop: false,
	    margin: 0,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true,
	    smartSpeed: 1000
	});

	/* city select */

	$('.header-city').on('click', function() {
		$('.header-city__ul').toggleClass('header-city_active');
	});

	$('.header-city').mouseover( function() {
		$('.header-city__ul').addClass('header-city_active');
	});

	$('.header-city').mouseout( function() {
		$('.header-city__ul').removeClass('header-city_active');
	});

	$('.header-city__a').on('click', function() {
		var text = $(this).text();
		$('.header-city__span').text(text);
	});

	/* search */
	
	 if (document.documentElement.clientWidth > 991) {
		$('.header-search').mouseover( function() {
			$('.header-search_form').css('visibility', 'visible');
		});	
		$('.header-search').mouseout( function() {
			$('.header-search_form').css('visibility', 'hidden');
		});
	}

	if (document.documentElement.clientWidth < 768) {
		$('.header-search_button').on('click', function() {
			$('.header-search_form').toggleClass('header-search_active');
		});
	}

	/* sub-menu */

	$('.header-menu__link-otr').on('click', function() {
		if (document.documentElement.clientWidth > 991) $('.sub-menu_otr').toggleClass('sub-menu_active');
		if (document.documentElement.clientWidth < 992) {
			$('.sub-menu_otr').slideToggle();
			$('.header-menu__link-otr').toggleClass('link-active');
			$('.header-menu__item-otr').toggleClass('item-otr_before-active');
		}
	});

	$('.header-menu__link-prod').on('click', function() {
		if (document.documentElement.clientWidth > 991) $('.sub-menu_prod').toggleClass('sub-menu_active');
		if (document.documentElement.clientWidth < 992) {
			$('.sub-menu_prod').slideToggle();
			$('.header-menu__link-prod').toggleClass('link-active');
			$('.header-menu__item-prod').toggleClass('item-prod_before-active');
		}
	});

	/* mob-menu */

	$('.btn-menu').on('click', function() {
		$('.btn-menu__span-1').toggleClass('act_span-1');
		$('.btn-menu__span-2').toggleClass('act_span-2');
		$('.header-menu').slideToggle();
		$('.header-enum nav').slideToggle();
	});

	/* tabs */

	$('.team_owl-carousel').on('click', '.team-item:not(.team-item_before_active)', function() {

		$('.team-item').removeClass('team-item_before_active');
		$(this).addClass('team-item_before_active');

		$('.team-item__img').removeClass('team-item__img_active');
		$(this).children('.team-item__img').addClass('team-item__img_active');

		var numb = $('.team-item').index(this);
		$('.team-voice').removeClass('team-voice_active');
		$('.team-voice').eq(numb).addClass('team-voice_active');

	});

	/* sertificate-docs */

	var owl = $('.sertificate-carousel_js');
	owl.owlCarousel();
	owl.on('changed.owl.carousel', function(event) {
		var item = event.item.index;
		console.log(item);
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$('.sertificate-docs__item').eq(item).addClass('sertificate-docs__item_active');
	});

	$('.sertificate-docs').on('click', '.sertificate-docs__item', function() {
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$(this).addClass('sertificate-docs__item_active');
		console.log('sf')
		owl.trigger('to.owl.carousel', $(this).html(), 300);
	});

});