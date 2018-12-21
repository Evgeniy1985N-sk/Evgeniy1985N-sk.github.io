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
  $( "div.block2-a" ).slideToggle("fast");
  if ( $( "div.block2-b" ).is( ":visible" ) ) {
    $( ".block2-b" ).slideUp();
     $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  }
   if ( $( "div.block2-c" ).is( ":visible" ) ) {
    $( ".block2-c" ).slideUp();
     $( ".ang-c" ).toggleClass( "service__angle-rotate" );
  }
});

$('.block-b').on('click', function(){
  $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  $( "div.block2-b" ).slideToggle("fast");
   if ( $( "div.block2-a" ).is( ":visible" ) ) {
    $( ".block2-a" ).slideUp();
     $( ".ang-a" ).toggleClass( "ang-a_add-class" );
  }
   if ( $( "div.block2-c" ).is( ":visible" ) ) {
    $( ".block2-c" ).slideUp();
     $( ".ang-c" ).toggleClass( "service__angle-rotate" );

  }
});
$('.block-c').on('click', function(){
  $( ".ang-c" ).toggleClass( "service__angle-rotate" );
  $( "div.block2-c" ).slideToggle("fast");
   if ( $( "div.block2-a" ).is( ":visible" ) ) {
    $( ".block2-a" ).slideUp();
     $( ".ang-a" ).toggleClass( "ang-a_add-class" );
  }
   if ( $( "div.block2-b" ).is( ":visible" ) ) {
    $( ".block2-b" ).slideUp();
    $( ".ang-b" ).toggleClass( "service__angle-rotate" );
  }
});