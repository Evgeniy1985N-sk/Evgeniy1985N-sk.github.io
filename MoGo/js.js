
$(".gallery2__pic1").mouseover(function () {
  $(".gallery2__pic1").css('position','relative').css('top','-9px').css('left','-9px').css('cursor','pointer');
  $(".gallery2__bg1").css('display', 'block');
});
$(".gallery2__bg1").mouseout(function () {
  $(".gallery2__pic1").css('top','0').css('left','0');
  $(".gallery2__bg1").css('display','none');
});
$(".gallery2__pic1").mouseout(function () {
  $(".gallery2__pic1").css('top','0').css('left','0');
  $(".gallery2__bg1").css('display','none');
});

$(".gallery2__pic2").mouseover(function () {
  $(".gallery2__pic2").css('position','relative').css('top','-9px').css('left','-9px').css('cursor','pointer');
  $(".gallery2__bg2").css('display', 'block');
});
$(".gallery2__bg2").mouseout(function () {
  $(".gallery2__pic2").css('top','0').css('left','0');
  $(".gallery2__bg2").css('display','none');
});
$(".gallery2__pic2").mouseout(function () {
  $(".gallery2__pic2").css('top','0').css('left','0');
  $(".gallery2__bg2").css('display','none');
});

$(".gallery2__pic3").mouseover(function () {
  $(".gallery2__pic3").css('position','relative').css('top','-9px').css('left','-9px').css('cursor','pointer');
  $(".gallery2__bg3").css('display', 'block');
});
$(".gallery2__bg3").mouseout(function () {
  $(".gallery2__pic3").css('top','0').css('left','0');
  $(".gallery2__bg3").css('display','none');
});
$(".gallery2__pic3").mouseout(function () {
  $(".gallery2__pic3").css('top','0').css('left','0');
  $(".gallery2__bg3").css('display','none');
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
$('.a-home').on("click", function() {addClassA();});
$('.a-about').on("click", function() {addClassA();});
$('.a-service').on("click", function() {addClassA();});
$('.a-work').on("click", function() {addClassA();});
$('.a-blog').on("click", function() {addClassA();});
$('.a-contact').on("click", function() {addClassA();});


// ----------------------------------------

var search = document.getElementsByClassName('find')[0];
var searchWindow = document.getElementsByClassName('search')[0];
var searchClose = document.getElementsByClassName('close')[0];
search.onclick = function() {
    searchWindow.style.display = "block";
}
searchClose.onclick = function() {
  searchWindow.style.display = "none";
}
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