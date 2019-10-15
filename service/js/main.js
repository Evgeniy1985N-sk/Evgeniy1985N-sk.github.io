$(document).ready(function() {

	/* carousel */
	$('.main-carousel').slick({
		slidesToShow: 1,
		infinite: false,
		speed: 300,
		arrows: false,
		dots: false
	});
	$('.header-menu').on('click','.aside-menu_item:not(.active)', function() {
		$('.header-menu .aside-menu_item').removeClass('active');
		$(this).addClass('active');
		var i = $('.header-menu .aside-menu_item').index(this);
		$('.main-carousel').slick('slickGoTo', i);
	});
	$('.main-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
	    $('.header-menu .aside-menu_item').removeClass('active');
	    $('.header-menu .aside-menu_item').eq(currentSlide).addClass('active');
	});

	$('.news-item').each(function(){
		var c = $(this).html();
		$('.news-carousel').append('<div class="news-item">'+c+'</div>');
	});
	$('.news-carousel').slick({
		slidesToShow: 3,
		infinite: true,
		speed: 300,
		arrows: true,
		dots: false,
		responsive: [
	        {
			breakpoint: 711,
			settings: {
				slidesToShow: 1
				}
			}
		]
	});

	/* menu */
	$('.aside-menu').on('click','.aside-menu_item:not(.active)', function() {
		$('.aside-menu .aside-menu_item').removeClass('active');
		$(this).addClass('active');
	});

	$('.aside_wrap-btn').on('click', function() {
		$('.aside-nav').toggleClass('active');
		$(this).toggleClass('active');
		$('.btn-menu').toggleClass('active');
		if ( $(this).hasClass('active') ) {
			$('.btn-menu').removeClass('active2');
		}
		else {
			$('.btn-menu').addClass('active2');
		}
	});

	/* search */
	$('.header .form-search_input').focus(function() {
		$('.header-item.search').addClass('active');
	});
	$(function($){
		$(document).mouseup(function (e) {
		    var input = $(".form-search_input");
		    if ( !input.is(e.target) ) {
				$('.header-item.search').removeClass('active');
		    }
		});
	});

	/* placing */
	$('.placing-tabs').on('click', '.placing-tabs_tab:not(.active)', function() {
		$('.placing-tabs_tab').removeClass('active');
		$(this).addClass('active');
		var index = $('.placing-tabs_tab').index($(this));
		$('.placing-map').removeClass('active');
		$('.placing-map').eq(index).addClass('active');
	});

	ymaps.ready(function() {

	    var map1 = new ymaps.Map('map1', {
	        center: [55.418686, 37.842178], 
	        zoom: 11,
	        controls: ['zoomControl'],
	        behaviors: ['drag']
	    });

	    var map1Placemark = new ymaps.Placemark([55.418686, 37.842178], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    },
	    );
	    var map1Placemark2 = new ymaps.Placemark([55.429974, 37.778663], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    }
	    );
		var map1Placemark3 = new ymaps.Placemark([55.444614, 37.811622], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    }
	    );
		var map1Placemark4 = new ymaps.Placemark([55.453590, 37.905006], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    }
	    );

	    map1.geoObjects.add(map1Placemark);
	    map1.geoObjects.add(map1Placemark2);
	    map1.geoObjects.add(map1Placemark3);
	    map1.geoObjects.add(map1Placemark4);

	    var map2 = new ymaps.Map('map2', {
	        center: [55.605058, 37.286292], 
	        zoom: 11,
	        controls: ['zoomControl'],
	        behaviors: ['drag']
	    });

	    var map2placemark = new ymaps.Placemark([55.609272, 37.267078], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    },
	    );
	    var map2placemark2 = new ymaps.Placemark([55.613110, 37.308191], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    }
	    );
		
	    map2.geoObjects.add(map2placemark);
	    map2.geoObjects.add(map2placemark2);

	    var map3 = new ymaps.Map('map3', {
	        center: [55.561670, 38.117727], 
	        zoom: 11,
	        controls: ['zoomControl'],
	        behaviors: ['drag']
	    });

	    var map3placemark = new ymaps.Placemark([55.571384, 38.110748], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    },
	    );
	    var map3placemark2 = new ymaps.Placemark([55.584269, 38.168598], {
		 }, {
		      iconLayout: 'default#image',
		      iconImageHref: 'images/marker_1.png'
		    }
	    );
		
	    map3.geoObjects.add(map3placemark);
	    map3.geoObjects.add(map3placemark2);

	});

	$('.map1').on('click', '.btn-ghost:not(.active)', function() {
		$('.map1 .btn-ghost').removeClass('active');
		$(this).addClass('active');
	});	
	$('.map2').on('click', '.btn-ghost:not(.active)', function() {
		$('.map2 .btn-ghost').removeClass('active');
		$(this).addClass('active');
	});
	$('.map3').on('click', '.btn-ghost:not(.active)', function() {
		$('.map3 .btn-ghost').removeClass('active');
		$(this).addClass('active');
	});

});