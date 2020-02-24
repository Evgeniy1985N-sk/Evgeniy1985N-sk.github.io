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
	    smartSpeed: 1000,
		responsiveClass:true,
			responsive:{
			0:{
				items:2,
			    nav:true,
			    dots:true
			},
			446:{
			    items:3
			},
			768:{
			    items:4
			}
	    }
	});

	$('.team_owl-carousel').on('click', '.team-item:not(.team-item_before_active)', function() {
		$('.team-item').removeClass('team-item_before_active');
		$(this).addClass('team-item_before_active');
		$('.team-item__img').removeClass('team-item__img_active');
		$(this).children('.team-item__img').addClass('team-item__img_active');
		var numb = $('.team-item').index(this);
		$('.team-voice').removeClass('team-voice_active');
		$('.team-voice').eq(numb).addClass('team-voice_active');
	});

	$('.news-item').each(function(){
		var c = $(this).html();
		$('.news-carousel_mobile_main').append('<div class="row"><div class="col-12"><div class="news-item">'+c+'</div></div>');
	});

	$('.news-carousel_mobile_main').owlCarousel({
	    loop: false,
	    margin: 30,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true
	});

	$('.news-item').each(function(){
		var c = $(this).html();
		$('.news-carousel_mobile').append('<div class="row"><div class="col-12"><div class="news-item">'+c+'</div></div>');
	});

	$('.news-carousel_mobile').owlCarousel({
	    loop: false,
	    margin: 30,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true
	});

	var owl = $('.sertificate-carousel_js').owlCarousel({
		loop: false,
		margin: 0,
		items: 1,
		navContainerClass: 'container center-nav',
		dots: false,
		nav: true,
		smartSpeed: 1000
	});

	owl.on('changed.owl.carousel', function(event) {
		var item = event.item.index;
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$('.sertificate-docs__item').eq(item).addClass('sertificate-docs__item_active');
	});

	$('.sertificate-docs').on('click', '.sertificate-docs__item', function() {
		$('.sertificate-docs__item').removeClass('sertificate-docs__item_active');
		$(this).addClass('sertificate-docs__item_active');
		var numb = $('.sertificate-docs__item').index(this);
		owl.trigger('to.owl.carousel', numb, 1100);
	});

	var owlMedia = $('.media-carousel_js').owlCarousel({
	    loop: false,
	    margin: 35,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: false,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000
	});

	$('.shop-carousel_js').owlCarousel({
	    loop: false,
	    margin: 30,
	    items: 4,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000,
	    responsiveClass:true,
		responsive:{
			320:{
				items:2
			},
			425:{
			    items:3
			},
			768:{
			    items:4
			}
		}
	});

	$('.shop-carousel_js').on('click', '.icon', function() {
		$('.shop-carousel_js .icon').removeClass('active');
		$(this).addClass('active');
		var numb = $('.shop-carousel_js .icon').index(this);
		owlMedia.trigger('to.owl.carousel', numb, 1100);
	});

	var owlGal = $('.gallery-carousel_js').owlCarousel({
	    loop: false,
	    margin: 35,
	    items: 3,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true,
	    autoplay: false,
	    autoplayTimeout: 5000,
	    smartSpeed: 1000,
	    responsiveClass:true,
		responsive:{
			320: {
				items:1,
				margin: 0
			},
			768:{
				center: true,
				autoWidth: true
			},
			1200:{
			    items:3
			}
		}
	});

	$('.news.prod .gallery-item').each(function(){
		var c = $(this).html();
		$('.prod-carousel_mob').append('<div class="row"><div class="col"><div class="news-item">'+c+'</div></div>');
	});

	$('.prod-carousel_mob').owlCarousel({
	    loop: false,
	    margin: 30,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: true,
	    nav: true
	});

	$('.sol .news-item').each(function(){
		var c = $(this).html();
		$('.sol-carousel_mob').append('<div class="row"><div class="col mb-4"><div class="news-item">'+c+'</div></div>');
	});

	$('.sol-carousel_mob').owlCarousel({
	    loop: false,
	    margin: 30,
	    items: 1,
	    navContainerClass: 'container center-nav',
	    dots: false,
	    nav: true
	});

	/* city select */

	$('.header-city').on('click', function() {
		$('.header-city__list').toggleClass('header-city_active');
	});

	$('.header-city').mouseover( function() {
		$('.header-city__list').addClass('header-city_active');
	});

	$('.header-city').mouseout( function() {
		$('.header-city__list').removeClass('header-city_active');
	});

	$('.header-city__link').on('click', function() {
		var text = $(this).text();
		$('.header-city__text').text(text);
	});

	/* search */

	$('.header-search').hover(
		function() {
			$('.header-search__form').css('visibility', 'visible');
			},
		function() {
			$('.header-search__form').css('visibility', 'hidden');
			}
		);

	$('.header-search__button').on('click', function() {
		$('.header-search__form').toggleClass('header-search_active');
	});

	/* sub-menu */

	$(document).mouseup(function (e) {
		var item = $(".header-menu__item");
		if (!item.is(e.target)
		    && item.has(e.target).length === 0) {
			$('.header-menu__sub').removeClass('active');
		}
	});

	$('.header-menu__link').on('click', function() {
		$('.header-menu__link').removeClass('active');
		$(this).toggleClass('active');
		if (window.innerWidth < 992) {
			$(this).siblings('.header-menu__sub').slideToggle();
		}
	});

	$('.header-menu__item').hover(
		function() {
			$(this).children('.header-menu__sub').addClass('active');
		},
		function() {
			$(this).children('.header-menu__sub').removeClass('active');
		}
	);

	/* mob-menu */

	$('.btn-menu').on('click', function() {
		$('.btn-menu .item-1').toggleClass('active');
		$('.btn-menu .item-2').toggleClass('active');
		$('.header-menu').slideToggle();
	});

	/* pagination */

	$('.pagination').on('click', 'li', function() {
		$('.pagination li').removeClass('active');
		$(this).addClass('active');
	});

	/* prod-gallery */

	$('.news.prod .gallery-item').hover(
		function() {
			$(this).children('.gallery-item__list').addClass('active');
		},
		function() {
			$(this).children('.gallery-item__list').removeClass('active');
		}
	);

});