$('.btn-menu').on('click', function() {
	$('.hidden-menu').toggleClass('class-hdn-menu');
});

// ----------------------------------------

function deleteClassActive() {
    $('.a-home').removeClass('active');
    $('.a-about').removeClass('active');
    $('.a-services').removeClass('active');
    $('.a-portfolio').removeClass('active');
    $('.a-team').removeClass('active');
    $('.a-blog').removeClass('active');
    $('.a-contact').removeClass('active');
  }
function addClassA() {
  var hHome = parseInt($('#home').css('height'));
  var hAbout = parseInt($('#about').css('height'));
  var hServices = parseInt($('#services').css('height'));
  var hPortfolio = parseInt($('#portfolio').css('height'));
  var hTeam = parseInt($('#team').css('height'));
  var hBlog = parseInt($('#blog').css('height'));
  var hContact = parseInt($('#contact').css('height'));
  var scrolled2 = $(document).scrollTop();
  if (scrolled2 === 0 || scrolled2 < hHome) {
    $('.btn-menu').css('background', 'transparent');
    $('.flex-block').css('margin-top', '35px');
    if(document.documentElement.clientWidth < 810) $('.flex-block').css('margin-top', '0');

    $('.container-nav').removeClass('class-menu');
    deleteClassActive();
    $('.a-home').addClass('active');
  }
  if (scrolled2 >= hHome) {
    $('.flex-block').css('margin-top', '0');
    $('.container-nav').addClass('class-menu');
    deleteClassActive();
    $('.a-about').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout) ) {
    deleteClassActive();
    $('.a-services').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hServices) ) {
    deleteClassActive();
    $('.a-portfolio').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio) ) {
    deleteClassActive();
    $('.a-team').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam) ) {
    deleteClassActive();
    $('.a-blog').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam + hBlog) ) {
    deleteClassActive();
    $('.a-contact').addClass('active');
  }
}
$(document).ready(addClassA);
$(document).on("scroll", addClassA);
$('.a-about').on('click', addClassA);

// ----------------------------------------

$(document).ready(function() {
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 999,
         easing: "swing"
      });
      return false;
   });
});

// ----------------------------------------

$('.a-fancy2').mouseover(function() {
    if(document.documentElement.clientWidth < 515) return false;
  $(this).toggleClass('works-width');
    $('.a-fancy1').css('width', '100%');
    $('.bg-rgba1').css('opacity', '1');
    $('.bg-rgba2').addClass('works-opacity');
});
$('.a-fancy2').mouseout(function() {
    if(document.documentElement.clientWidth < 515) return false;
  $(this).toggleClass('works-width');
    $('.a-fancy1').css('width', '220%');
    $('.bg-rgba1').css('opacity', '0');
    $('.bg-rgba2').removeClass('works-opacity');
});

$('.a-fancy3').mouseover(function() {
    if(document.documentElement.clientWidth < 515) return false;
  $(this).toggleClass('works-width');
    $('.a-fancy1').css('width', '100%');
    $('.bg-rgba1').css('opacity', '1');
    $('.bg-rgba3').addClass('works-opacity');
});
$('.a-fancy3').mouseout(function() {
    if(document.documentElement.clientWidth < 515) return false;
  $(this).toggleClass('works-width');
    $('.a-fancy1').css('width', '220%');
    $('.bg-rgba1').css('opacity', '0');
    $('.bg-rgba3').removeClass('works-opacity');
});

// ----------------------------------------

jQuery(document).ready(function(){
    jQuery('.scrollbar-rail').scrollbar();
});


// ----------------------------------------

$('.single-item').slick({
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

// ----------------------------------------

$('.single-item2').slick({
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

// ----------------------------------------

$('.single-item3').slick({
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

// ----------------------------------------

$('.pr-b1').mouseover(function() {
  $('.block-prem1').css('top', '236px');
  $('.block-prem_span1').css('opacity', '0');
  $('.prem-hover1').css('opacity', '1');
  $('.text-hover1').css('opacity', '1');
  $('.block-hover1').css('opacity', '0').css('transition', '0s');
});
$('.pr-b1').mouseout(function() {
  $('.block-prem1').css('top', '0');
  $('.block-prem_span1').css('opacity', '1');
  $('.prem-hover1').css('opacity', '0');
  $('.text-hover1').css('opacity', '0');
  $('.block-hover1').css('opacity', '1').css('transition', '2s');
});

$('.pr-b2').mouseover(function() {
  $('.block-prem2').css('top', '236px');
  $('.block-prem_span2').css('opacity', '0');
  $('.prem-hover2').css('opacity', '1');
  $('.text-hover2').css('opacity', '1');
  $('.block-hover2').css('opacity', '0').css('transition', '0s');;
});
$('.pr-b2').mouseout(function() {
  $('.block-prem2').css('top', '0');
  $('.block-prem_span2').css('opacity', '1');
  $('.prem-hover2').css('opacity', '0');
  $('.text-hover2').css('opacity', '0');
  $('.block-hover2').css('opacity', '1').css('transition', '2s');;
});

$('.pr-b3').mouseover(function() {
  $('.block-prem3').css('top', '236px');
  $('.block-prem_span3').css('opacity', '0');
  $('.prem-hover3').css('opacity', '1');
  $('.text-hover3').css('opacity', '1');
  $('.block-hover3').css('opacity', '0').css('transition', '0s');;
});
$('.pr-b3').mouseout(function() {
  $('.block-prem3').css('top', '0');
  $('.block-prem_span3').css('opacity', '1');
  $('.prem-hover3').css('opacity', '0');
  $('.text-hover3').css('opacity', '0');
  $('.block-hover3').css('opacity', '1').css('transition', '2s');;
});

// ----------------------------------------

$('.map-round').click(function() {
  $('.map').css('display', 'none');


ymaps.ready(function() {

    var map = new ymaps.Map('map', {
            center: [51.50733,-0.197798,12], 
            zoom: 11,
            controls: ['zoomControl'],
            behaviors: ['drag'],
    });

    var placemark = new ymaps.Placemark([51.50733,-0.197798,12], {

    }, {

      iconLayout: 'default#image',
      iconImageHref: 'img/pin.png'

    });

    map.geoObjects.add(placemark);
});

});
