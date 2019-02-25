// ---------------preloader---------------

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.visibility = 'hidden';
  preloader.style.opasity = '0';
};


// --------------- slick -----------------

$('.sl').slick({
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

 // ---------------- scroll --------------

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


