var h = $('#header').css('height');
// var bgMenu = document.getElementById("header");
// var scrolled = window.pageYOffset;
// window.onscroll = function() {
//   if(scrolled>h){
//     bgMenu.style.background = "#ea6361";
//     }
  // if(scrolled<h){
  //   bgMenu.style.background = "none";
  //   }
// }

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