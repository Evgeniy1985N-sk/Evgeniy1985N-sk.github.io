$(".gallery2__pic1").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gallery2__bg1").css('opacity', '.9');
  $('.gal__img1').css('opacity', '.9');
});

$(".gallery2__bg1").mouseout(function () {
  $(".gallery2__pic1").css('top','0').css('left','0');
  $(this).css('opacity','0');
  $('.gal__img1').css('opacity','0');
});

$(".gallery2__pic2").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gallery2__bg2").css('opacity', '.9');
  $('.gal__img2').css('opacity', '.9');
});
$(".gallery2__bg2").mouseout(function () {
  $(".gallery2__pic2").css('top','0').css('left','0');
  $(this).css('opacity','0');
   $('gal__img2').css('opacity','0');
});

$(".gallery2__pic3").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gallery2__bg3").css('opacity', '.9');
  $('.gal__img3').css('opacity', '.9');
});
$(".gallery2__bg3").mouseout(function () {
  $(".gallery2__pic3").css('top','0').css('left','0');
  $(this).css('opacity','0');
  $('.gal__img3').css('opacity','0');
});

// ----------------------------------------
function classMenu() {
   var h = $('#home').css('height');
    var scrolled = $(document).scrollTop();
    if(scrolled>=parseInt(h)){
      $('.sticky-header').addClass('menu-bg');
  }
    if(scrolled<parseInt(h)||scrolled==0) {
      $('.sticky-header').removeClass('menu-bg');
    }
}
$(document).ready(classMenu);
$(document).on("scroll", classMenu);

// ----------------------------------------

function deleteClassActive() {
    $('.a-home').removeClass('active');
    $('.a-about').removeClass('active');
    $('.a-service').removeClass('active');
    $('.a-work').removeClass('active');
    $('.a-blog').removeClass('active');
    $('.a-contact').removeClass('active');
  }

function addClassA() {
  var hHome = parseInt($('#home').css('height'));
  var hAbout = parseInt($('#about').css('height'));
  var hService = parseInt($('#service').css('height'));
  var hWork = parseInt($('#work').css('height'));
  var hBlog = parseInt($('#blog').css('height'));
  var hContact = parseInt($('#contact').css('height'));
  var scrolled2 = $(document).scrollTop();
  if (scrolled2 === 0 || scrolled2 < hHome) {
    deleteClassActive();
    $('.a-home').addClass('active');
  }
  if (scrolled2 >= hHome) {
    deleteClassActive();
    $('.a-about').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout) ) {
    deleteClassActive();
    $('.a-service').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hService) ) {
    deleteClassActive();
    $('.a-work').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hService + hWork) ) {
    deleteClassActive();
    $('.a-blog').addClass('active');
  }
  if (scrolled2 >= (hHome + hAbout + hService + hWork + hBlog) ) {
    deleteClassActive();
    $('.a-contact').addClass('active');
  }
}
$(document).ready(addClassA);
$(document).on("scroll", addClassA);
// ----------------------------------------
  $('.find').on("click", function() {
    $('.search').css('display', 'block');
  });
  $('.close').on("click", function() {
    $('.search').css('display', 'none');
  });

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

$('.sl').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500
});

// ----------------------------------------

jQuery(document).ready(function(){
    jQuery('.scrollbar-rail').scrollbar();
});

// ----------------------------------------

$('.block-a').on('click', function(){
  $( ".ang-a" ).toggleClass( "ang-a_add-class" );
  $( "div.block2-a" ).slideToggle("slow");
  if ( $( "div.block2-b" ).is( ":visible" ) ) {
    $( ".block2-b" ).slideUp('fast');
     $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  }
   if ( $( "div.block2-c" ).is( ":visible" ) ) {
    $( ".block2-c" ).slideUp('fast');
     $( ".ang-c" ).toggleClass( "service__angle-rotate" );
  }
});

$('.block-b').on('click', function(){
  $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  $( "div.block2-b" ).slideToggle("slow");
   if ( $( "div.block2-a" ).is( ":visible" ) ) {
    $( ".block2-a" ).slideUp('fast');
     $( ".ang-a" ).toggleClass( "ang-a_add-class" );
  }
   if ( $( "div.block2-c" ).is( ":visible" ) ) {
    $( ".block2-c" ).slideUp('fast');
     $( ".ang-c" ).toggleClass( "service__angle-rotate" );
  }
});

$('.block-c').on('click', function(){
  $( ".ang-c" ).toggleClass( "service__angle-rotate" );
  $( "div.block2-c" ).slideToggle("slow");
   if ( $( "div.block2-a" ).is( ":visible" ) ) {
    $( ".block2-a" ).slideUp('fast');
     $( ".ang-a" ).toggleClass( "ang-a_add-class" );
  }
   if ( $( "div.block2-b" ).is( ":visible" ) ) {
    $( ".block2-b" ).slideUp('fast');
    $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  }
});

// ----------------------------------------

$('.single-item').slick({
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

// ---------------1-block-------------------------

$(".gal2__pic1").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gal2__bg1").css('opacity', '.9');
  $('.gal__img').css('opacity', '.9');
});

$(".gal2__bg1").mouseout(function () {
  $(".gal2__pic1").css('top','0').css('left','0');
  $(this).css('opacity','0');
  $('.gal__img').css('opacity','0');
});

$(".fk").mouseover(function () {
  $(this).css('background','#f38181');
  $(".fa-facebook-f").css('color','#fff');
});

$(".fk").mouseout(function () {
  $(this).css('background','#fce38a');
  $(".fa-facebook-f").css('color','#f38181');
});

$(".twi").mouseover(function () {
  $(this).css('background','#f38181');
  $(".fa-twitter").css('color','#fff');
});

$(".twi").mouseout(function () {
  $(this).css('background','#fce38a');
  $(".fa-twitter").css('color','#f38181');
});

$(".pin").mouseover(function () {
  $(this).css('background','#f38181');
  $(".fa-pinterest-p").css('color','#fff');
});

$(".pin").mouseout(function () {
  $(this).css('background','#fce38a');
  $(".fa-pinterest-p").css('color','#f38181');
});

$(".ins").mouseover(function () {
  $(this).css('background','#f38181');
  $(".fa-instagram").css('color','#fff');
});

$(".ins").mouseout(function () {
  $(this).css('background','#fce38a');
  $(".fa-instagram").css('color','#f38181');
});

// ---------------2-block-------------------------
$(".gal2__pic2").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gal2__bg2").css('opacity', '.9');
  $('.gal__img').css('opacity', '.9');
});

$(".gal2__bg2").mouseout(function () {
  $(".gal2__pic2").css('top','0').css('left','0');
  $(this).css('opacity','0');
  $('.gal__img').css('opacity','0');
});
// ---------------3-block-------------------------
$(".gal2__pic3").mouseover(function () {
  $(this).css('top','-9px').css('left','-9px');
  $(".gal2__bg3").css('opacity', '.9');
  $('.gal__img').css('opacity', '.9');
});

$(".gal2__bg3").mouseout(function () {
  $(".gal2__pic3").css('top','0').css('left','0');
  $(this).css('opacity','0');
  $('.gal__img').css('opacity','0');
});

// ----------------------------------------

$(".col1__img1").mouseover(function () {
  $(".fa-chess-king").css('opacity', '.9');
  $('.col1-txt1').css('opacity', '.9');
  $('.col1-txt2').css('opacity', '.9');
});

$(".col1__img1").mouseout(function () {
  $(".fa-chess-king").css('opacity', '0');
  $('.col1-txt1').css('opacity', '0');
  $('.col1-txt2').css('opacity', '0');
});

$(".col1__img2").mouseover(function () {
  $(".fa-gamepad").css('opacity', '.9');
  $('.col1-txt1a').css('opacity', '.9');
  $('.col1-txt2b').css('opacity', '.9');
});

$(".col1__img2").mouseout(function () {
  $(".fa-gamepad").css('opacity', '0');
  $('.col1-txt1a').css('opacity', '0');
  $('.col1-txt2b').css('opacity', '0');
});
// ---------------col2-------------------------
$(".col2__img1").mouseover(function () {
  $(".fa-cube").css('opacity', '.9');
  $('.col2-txt1').css('opacity', '.9');
  $('.col2-txt2').css('opacity', '.9');
});

$(".col2__img1").mouseout(function () {
  $(".fa-cube").css('opacity', '0');
  $('.col2-txt1').css('opacity', '0');
  $('.col2-txt2').css('opacity', '0');
});

$(".col2__img2").mouseover(function () {
  $(".fa-shoe-prints").css('opacity', '.9');
  $('.col2-txt1a').css('opacity', '.9');
  $('.col2-txt2b').css('opacity', '.9');
});

$(".col2__img2").mouseout(function () {
  $(".fa-shoe-prints").css('opacity', '0');
  $('.col2-txt1a').css('opacity', '0');
  $('.col2-txt2b').css('opacity', '0');
});
// ---------------col3-------------------------
$(".col3__img").mouseover(function () {
  $(".fa-desktop").css('opacity', '.9');
  $('.col3-txt1').css('opacity', '.9');
  $('.col3-txt2').css('opacity', '.9');
});

$(".col3__img").mouseout(function () {
  $(".fa-desktop").css('opacity', '0');
  $('.col3-txt1').css('opacity', '0');
  $('.col3-txt2').css('opacity', '0');
});
// ---------------col4-------------------------
$(".col4__img1").mouseover(function () {
  $(".fa-pagelines").css('opacity', '.9');
  $('.col4-txt1').css('opacity', '.9');
  $('.col4-txt2').css('opacity', '.9');
});

$(".col4__img1").mouseout(function () {
  $(".fa-pagelines").css('opacity', '0');
  $('.col4-txt1').css('opacity', '0');
  $('.col4-txt2').css('opacity', '0');
});

$(".col4__img2").mouseover(function () {
  $(".fa-guitar").css('opacity', '.9');
  $('.col4-txt1a').css('opacity', '.9');
  $('.col4-txt2b').css('opacity', '.9');
});

$(".col4__img2").mouseout(function () {
  $(".fa-guitar").css('opacity', '0');
  $('.col4-txt1a').css('opacity', '0');
  $('.col4-txt2b').css('opacity', '0');
});

$('.single-item2').slick({
  prevArrow: $('.prev2'),
  nextArrow: $('.next2')
});

// ---------------map-------------------------

ymaps.ready(init);


function init() {

  var map = new ymaps.Map('map', {
  center: [51.50733,-0.197798,12],
  zoom: 11,
  controls: ['zoomControl'],
  behaviors: ['drag']

});

var placemark = new ymaps.Placemark([51.50733,-0.197798,12], {

}, {

  iconLayout: 'default#image',
  iconImageHref: 'img/pin.png'

  });

    map.geoObjects.add(placemark);

}

$('.open-close-map').on('click', function() {
  $('.wrapper__map').toggleClass('open-map');
  if($('.wrapper__map').is(':visible')) {
    $('.contacts__text').html('close map');
  }
  else $('.contacts__text').html('open map');
});
