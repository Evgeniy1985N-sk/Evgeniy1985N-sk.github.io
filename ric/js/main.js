$(document).ready(function() {
	if ($('main').is('.main'))  {
		$('.info-item.tablet').addClass('info-display');
		$('.info-item.rights').addClass('rights-display');
		$('.header').css('animation-name', 'opacity');
		$('.footer').css('animation-name', 'opacity');
	}
	else {
		$('.info-item.tablet').css('display', 'none');
		$('.header-item.phone').addClass('text-align');
		$('.info').css('justify-content', 'flex-start');
		$('.info-item.deal').css('margin-right', '60px');
	}
	if ($('section').is('.service')) {
		$('.header').addClass('header-width');
		$('.header-item').addClass('header-item_width');
	}

	/* animation */
	var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
	var time = loadTime + 555 + "ms";
	$('.preloader').css('animation-delay', time);
	$('.preloader__row').css('animation-duration', time);
	$('.preloader__img.after').css('animation-duration', time);
	$('.main-title__img').css('animation-delay', time);
	$('.main-dsc').css('animation-delay', time);
	$('.main-request').css('animation-delay', time);
	$('.main-carousel').css('animation-delay', time);
	$('.header').css('animation-delay', time);
	$('.footer').css('animation-delay', time);

	setTimeout(function() {
		$('.section').children().addClass('clip-show');
	},time);

	/* carousel */
	$('.main-slider').slick({
		dots: false,
		infinite: true,
		speed: 1300,
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.main-carousel__wrap'
	});

	$('.main-carousel__wrap').slick({
		dots: true,
		fade: true,
		infinite: true,
		speed: 1300,
		slidesToShow: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		asNavFor: '.main-slider'
	});
	$(".main-carousel__wrap").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.main-title__wrap').removeClass('wave-back');
		$('.main-title__wrap').removeClass('wave-forward');
		if (Math.abs(nextSlide - currentSlide) == 1) {
			if ( direction = (nextSlide - currentSlide > 0) ) {
				setTimeout(function() {
					$('.main-title__wrap').addClass('wave-forward');
				},);
			}
			else { 
				setTimeout(function() {
					$('.main-title__wrap').addClass('wave-back')
				
				},);
			}
		}
		else {
			if ( direction = (nextSlide - currentSlide > 0) ) {
			  setTimeout(function() {
					$('.main-title__wrap').addClass('wave-back')
				},);
			}
			else {
				setTimeout(function() {
					$('.main-title__wrap').addClass('wave-forward');
				},);
			}
		}
	});

	$('.company-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		customPaging: function(slick,index) {
            var targetImage = slick.$slides.eq(index).find('img').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        }
	});

	$('.team-carousel').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
	        {
			breakpoint: 1430,
			settings: {
				slidesToShow: 5
				}
			},
			{
			breakpoint: 1240,
			settings: {
				slidesToShow: 5,
				arrows: false
				}
			},
		    {
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				arrows: false
				}
			},
		    {
			breakpoint: 701,
			settings: {
				slidesToShow: 3,
				arrows: false
				}
			},
			{
			breakpoint: 430,
			settings: {
				slidesToShow: 2,
				arrows: false
				}
			}
		]
	});
	$('.team-switches.desctop').on('click', '.team-switch:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active');
		var indexSwitch = $('.team-switches.desctop .team-switch').index($(this));
		$('.team-carousel').removeClass('active');
		$('.team-carousel').eq(indexSwitch).addClass('active');
	});
	$('.team-switches.team-slider').on('click', '.team-switch:not(.active)', function() {
		$('.team-switch').removeClass('active');
		$(this).addClass('active');
		var indexSwitch = $('.team-switches.team-slider .team-switch').index(this);
		$('.team-carousel').removeClass('active');
		$('.team-carousel').eq(indexSwitch).addClass('active');
	});
	$('.team-carousel.top').on('click', '.team-item:not(.active)', function() {
		$('.team-item').removeClass('active');
		$(this).addClass('active');
		var indexItem = $('.team-carousel.top .team-item').index($(this));
		$('.team-carousel.top').slick( 'slickGoTo', indexItem );
	});
	$('.team-carousel.admin').on('click', '.team-item:not(.active)', function() {
		$('.team-item').removeClass('active');
		$(this).addClass('active');
		var indexItem = $('.team-carousel.admin .team-item').index($(this));
		$('.team-carousel.admin').slick( 'slickGoTo', indexItem );
	});
	$('.team-carousel.project').on('click', '.team-item:not(.active)', function() {
		$('.team-item').removeClass('active');
		$(this).addClass('active');
		var indexItem = $('.team-carousel.project .team-item').index($(this));
		$('.team-carousel.project').slick( 'slickGoTo', indexItem );
	});

	$('.team-slider').slick({
		dots: false,
		infinite: false,
		speed: 1300,
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
	});

	$('.worker-carousel').slick({
		vertical: true,
		verticalSwiping: true,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>"
	});
	$('.worker-carousel').on('click', '.team-item', function() {
		$('.team-item').removeClass('active-round');
		$(this).addClass('active-round');
		var media = $(this).find('.team-media').html();
		$('.worker-media').html(media);
		var title = $(this).find('.team-title').html();
		$('.company-title').html(title);
		var text = $(this).find('.worker-text').html();
		$('.worker-text.main').html(text);
	});
	var workerMedia = $('.worker-carousel .team-item').eq(0).find('.team-media').html();
	$('.worker-media').html(workerMedia);
	var workerTitle = $('.worker-carousel .team-item').eq(0).find('.team-title').html();
	$('.company-title').html(workerTitle);
	var workerText = $('.worker-carousel .team-item').eq(0).find('.worker-text').html();
	$('.worker-text.main').html(workerText);

	$('.service-carousel').slick({
		asNavFor: '.service-slider',
		verticalSwiping: true,
		vertical: true,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
	        {
			breakpoint: 711,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 1,
				variableWidth: true
				}
			}
		]
	});
	$('.service-carousel').on('click', '.service-carousel__item:not(.active)', function() {
		if (window.innerWidth > 710) {
			$('.service-carousel__item').removeClass('active');
			$(this).addClass('active');
			var title = $(this).find($('.worker-title')).text();
			$('.service-content .worker-title').text(title);
			var text = $(this).find($('.service-text')).html();
			$('.service-content .service-text').html(text);
		}
		var indexItem = $('.service-carousel__item').index($(this));
		$('.service-slider').slick( 'slickGoTo', indexItem );
	});
	$('.service-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$('.service-carousel__item').removeClass('active');
		$('.slick-active .service-carousel__item').eq(0).addClass('active');
		var title = $('.slick-active .service-carousel__item').eq(0).find($('.worker-title')).text();
		$('.service-content .worker-title').text(title);
		var text = $('.slick-active .service-carousel__item').eq(0).find($('.service-text')).html();
		$('.service-content .service-text').html(text);
	    localStorage.setItem('slide', currentSlide);
	});
	$('.slick-active .service-carousel__item').eq(0).addClass('active');
	var activeItemTitle = $('.slick-active .service-carousel__item').eq(0).find('.worker-title').text();
	$('.service-content .worker-title').text(activeItemTitle);
	var activeItemText = $('.slick-active .service-carousel__item').eq(0).find('.service-text').html();
	$('.service-content .service-text').html(activeItemText);

	$('.service-slider').slick({
		asNavFor: '.service-carousel',
		dots: false,
		infinite: false,
		speed: 300,
		arrows: false
	});

    var serviceSlide = localStorage.getItem('slide');
	if (serviceSlide !== null) {
		$('.service-carousel__item').removeClass('active');
		$('.slick-active .service-carousel__item').eq(serviceSlide).addClass('active');
		$('.service-slider').slick( 'slickGoTo', serviceSlide );
	}

	$('.partner-carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
	        {
			breakpoint: 1240,
			settings: {
				slidesToShow: 5
				}
			},
			{
			breakpoint: 769,
			settings: {
				rows: 2,
				slidesToShow: 4
				}
			},			
			{
			breakpoint: 651,
			settings: {
				rows: 1,
				variableWidth: true,
				slidesToShow: 3
				}
			}
		]
	});
	$('.partner-carousel__item').hover(
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass('active');
		}
	);

	$('.partner-card__carousel').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>"
	});

	$('.partner-slide').each(function() {
		var c = $(this).html();
		$('.partner-slider.mob').append('<div class="partner-slide">'+c+'</div>');
	});

	$('.partner-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
		    {
		      breakpoint: 1651,
		      settings: {
		        slidesToShow: 2
		      	}
			},
		   {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        variableWidth: true,
		        arrows: false
		      	}
			}
		]
	});
	$('.partner-slider').on('click', '.partner-slide:not(.active)', function() {
		$('.partner-slide').removeClass('active');
		$(this).addClass('active');
	});

	$('.press-center__carousel').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 7,
		swiping: true,
		rows: 1,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
			{
		      breakpoint: 1740,
		      settings: {
		        slidesToShow: 6
		      	}
			},
			{
		      breakpoint: 1540,
		      settings: {
		        slidesToShow: 5
		      	}
			},
			{
		      breakpoint: 986,
		      settings: {
		        slidesToShow: 4,
		        rows: 2
		      	}
			},
			{
		      breakpoint: 725,
		      settings: {
		        slidesToShow: 3,
		        rows: 2
		      	}
			},
			{
		      breakpoint: 480,
		      settings: {
		      	vertical: true,
		      	verticalSwiping: true,
		        slidesToShow: 4,
		        rows: 1,
		        arrows: false
		      	}
			}
		  ]
	});
	$('.press-center__carousel .media-item').hover(
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass('active');
		}
	);

	$('.article-carousel').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		dots: true,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>"
	});

	$('.articles-carousel').slick({
		rows: 2,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		arrows: true,
		dots: false,
		prevArrow:"<button type='button' class='slick-prev btn arrow-mob'></button>",
		nextArrow:"<button type='button' class='slick-next btn arrow-mob'></button>",
		responsive: [
			{
		      breakpoint: 1571,
		      settings: {
		        slidesToShow: 2
		      	}
			},
			{
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 2,
		        rows: 1
		      	}
			}
		]
	});

	$('.slick-dots button:contains("1")').addClass('size-big');
	$('.slick-dots button:contains("2")').addClass('size-middle');

	/* menu */
	$('.btn-open').on('click', function() {
		$(this).toggleClass('active');
		$('.aside').toggleClass('active');
		$('.btn-open__burger').toggleClass('active');
		$('.header .header-link.phone').toggleClass('active');
	});
         
	$('.main-menu').on('click', '.main-menu__link', function(event) {
		$('.section').children().removeClass('clip-show');
		$('.section').children().addClass('clip-hidden');

		var destination = $(this).attr('href');
		event.preventDefault();
		setTimeout(function() { 
			window.location.href = destination;
		}, 700);

		$('.main-menu__item').removeClass('active');
		$(this).parent().addClass('active');
		if ($('.sub-menu').css('display') == 'block') {
			$('.sub-menu').slideUp(200);
		}
		if ($('.sub-menu').css('display') == 'none') {
			$(this).siblings('.sub-menu').slideDown(200);
		}
		$('.sub-menu__item').removeClass('active');
		$('.sub-menu__item').eq(0).addClass('active');
	});
	$('.main-menu').on('click', '.sub-menu__item', function() {
		$('.sub-menu__item').removeClass('active');
		$(this).addClass('active');
	});

	/* popup */
	$('.btn.open-popup').on('click', function() {
        $('.main-request__popup').removeClass('clippath-min');
        $('.main-request__popup').addClass('clippath-max');
        $('.btn-close.request-popup_big').removeClass('active');
	});
	$('.btn-close.request-popup_big').on('click', function() {
        $(this).addClass('active');
        $('.main-request__popup').removeClass('clippath-max');
        $('.main-request__popup').addClass('clippath-min');
        setTimeout( function() {$.fancybox.close(); },300);
        if (navigator.userAgent.indexOf('Edge') > 0 || navigator.userAgent.indexOf('Trident') > 0) {
		}
	});

	/* scrollbar */
	 if ($("div").is(".articles-wrap.scrollbar-outer")) {
	 	$('.articles-wrap.scrollbar-outer').scrollbar();
	 }

	/* detect browser */
	if (navigator.userAgent.indexOf('Trident') > 0 ) {
		$('body').addClass('ie');
	}
	if (navigator.userAgent.indexOf('Edge') > 0 ) {
		$('body').addClass('edge');
	}

	/* career */
	$('.section').on('click', '.career-btn:not(.active)', function() {
		$('.career-btn').removeClass('active');
		$(this).addClass('active');
	});

	/* partner-text */
	$('.section').on('click', '.partner-text:not(.active)', function() {
		$('.partner-text').removeClass('active');
		$(this).addClass('active');
	});

	/* page-number */
	$('.section').on('click', '.page-number:not(.active)', function() {
		$('.page-number').removeClass('active');
		$(this).addClass('active');
	});

	/* media-item */
	$('.section').on('click', '.media-item:not(.active)', function() {
		$('.media-item').removeClass('active');
		$(this).addClass('active');
	});

	/* contact */
	 if ($("section").is(".contact")) {
	 	$('.contacts').addClass('contacts-display');
		ymaps.ready(function() {
		    var map = new ymaps.Map('map', {
	            center: [55.809302, 37.836636], 
	            zoom: 16,
	            controls: ['zoomControl'],
	            behaviors: ['drag']
		    });
		    var placemark = new ymaps.Placemark([55.809302, 37.836636], {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/pin.png'
		    });
		    map.geoObjects.add(placemark);
		});
	}

});

	// $('.company-about').removeClass('clip-show');
	// $('.company-media').removeClass('clip-show');
	// $('.company-about').addClass('clip-hidden');
	// $('.company-media').addClass('clip-hidden');