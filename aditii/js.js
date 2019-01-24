$('.btn-menu').on('click', function() {
	$('.nav__ul').toggleClass('class-hdn-menu');
});

// // ----------------------------------------

// function deleteClassActive() {
//     $('.a-home').removeClass('active');
//     $('.a-about').removeClass('active');
//     $('.a-services').removeClass('active');
//     $('.a-portfolio').removeClass('active');
//     $('.a-team').removeClass('active');
//     $('.a-blog').removeClass('active');
//     $('.a-contact').removeClass('active');
//   }
// function addClassA() {
//   var hHome = parseInt($('#home').css('height'));
//   var hAbout = parseInt($('#about').css('height'));
//   var hServices = parseInt($('#services').css('height'));
//   var hPortfolio = parseInt($('#portfolio').css('height'));
//   var hTeam = parseInt($('#team').css('height'));
//   var hBlog = parseInt($('#blog').css('height'));
//   var hContact = parseInt($('#contact').css('height'));
//   var scrolled2 = $(document).scrollTop();
//   if (scrolled2 === 0 || scrolled2 < hHome) {
//     $('.btn-menu').css('background', 'transparent');
//     $('.flex-block').css('margin-top', '35px');
//     if(document.documentElement.clientWidth < 810) $('.flex-block').css('margin-top', '0');

//     $('.container-nav').removeClass('class-menu');
//     deleteClassActive();
//     $('.a-home').addClass('active');
//   }
//   if (scrolled2 >= hHome) {
//     $('.flex-block').css('margin-top', '0');
//     $('.container-nav').addClass('class-menu');
//     deleteClassActive();
//     $('.a-about').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout) ) {
//     deleteClassActive();
//     $('.a-services').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices) ) {
//     deleteClassActive();
//     $('.a-portfolio').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio) ) {
//     deleteClassActive();
//     $('.a-team').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam) ) {
//     deleteClassActive();
//     $('.a-blog').addClass('active');
//   }
//   if (scrolled2 >= (hHome + hAbout + hServices + hPortfolio + hTeam + hBlog) ) {
//     deleteClassActive();
//     $('.a-contact').addClass('active');
//   }
// }
// $(document).ready(addClassA);
// $(document).on("scroll", addClassA);
// $('.a-about').on('click', addClassA);

// // ----------------------------------------

// $(document).ready(function() {
//    $("a.topLink").click(function() {
//       $("html, body").animate({
//          scrollTop: $($(this).attr("href")).offset().top + "px"
//       }, {
//          duration: 999,
//          easing: "swing"
//       });
//       return false;
//    });
// });

// // ----------------------------------------

$('.single-item').slick({
  dots: true,
  arrows: false
  // autoplay: true
});




