
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
var h = $('#home').css('height');
var bgMenu = document.getElementsByClassName('bg-menu')[0];
window.onload = function() {
   var scrolled = window.pageYOffset;
  if(scrolled>=parseInt(h)) {
    bgMenu.style.display = "block";
    bgMenu.style.background = "#ea6361";
    bgMenu.style.opacity = "0.9";
    }
  if(scrolled<parseInt(h)) {
    bgMenu.style.background = "none";
    }
  if (scrolled>0&&scrolled<parseInt(h)) {
    bgMenu.style.display = "none";
  }
  if(scrolled==0) bgMenu.style.display = "block";
}
window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if(scrolled>=parseInt(h)) {
    bgMenu.style.display = "block";
    bgMenu.style.background = "#ea6361";
    bgMenu.style.opacity = "0.9";
    }
  if(scrolled<parseInt(h)) {
    bgMenu.style.background = "none";
    }
  if (scrolled>0&&scrolled<parseInt(h)) {
    bgMenu.style.display = "none";
  }
  if(scrolled==0) bgMenu.style.display = "block";
}

var search = document.getElementsByClassName('find')[0];
var searchWindow = document.getElementsByClassName('search')[0];
var searchClose = document.getElementsByClassName('close')[0];
search.onclick = function() {
    searchWindow.style.display = "block";
}
searchClose.onclick = function() {
  searchWindow.style.display = "none";
}
var bgMenu = document.getElementsByClassName('bg-menu')[0];
// ----------------------------------------

var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
  var scroll_top = $(document).scrollTop();
  $(menu_selector + " a").each(function(){
    var hash = $(this).attr("href");
    var target = $(hash);
    if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href*=\\#]:not([href=\\#])').click(function(e){
    e.preventDefault();
    $(document).off("scroll");
    $(menu_selector + " a.active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500, function(){
      window.location.hash = hash;
      $(document).on("scroll", onScroll);
    });
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
    // dotsClass: 'lines__red'
});
// $('.sl').slick({
// prevArrow: '<div class="prev"></div>',
// nextArrow: '<div class="next"></div>',
//   arrows: true,
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });