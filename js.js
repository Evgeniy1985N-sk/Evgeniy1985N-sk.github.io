
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

 // _____________________

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

// var elemUl= document.getElementById('header-ul');
// var elemA = elemUl.getElementsByTagName('a');
// var header = document.getElementById('header');
// var portfolio = document.getElementById('portfolio');
// var contacts = document.getElementById('contacts');
// var scroll=0;
// var heightHeader, heightPortfolio, heightContacts;


// findHeight();

// function findHeight()  {
// 	heightHeader = $('#header').height();
// 	heightPortfolio = $('#portfolio').height();
// 	heightContacts = $('#contacts').height();
// 	heightPortfolio=heightPortfolio-5;
// 	heightHeader=heightHeader-5;
// 	}

// window.onscroll = function() {

//   	scroll = window.pageYOffset;

// 	findHeight();

// 	if (heightHeader>=scroll && scroll<heightHeader+heightPortfolio) {
// 	elemA[0].style.borderBottom='1px solid white';
// 	}
// 	if (heightHeader<scroll) {
// 	elemA[0].style.borderBottom='none';
// 	}
// 	if (heightPortfolio+heightHeader>=scroll&&scroll>heightHeader) {
// 	elemA[1].style.borderBottom='1px solid white';
// 	}
// 	if (heightPortfolio+heightHeader<scroll||scroll<heightHeader) {
// 	elemA[1].style.borderBottom='none';
// 	}
// 	if (heightPortfolio+heightHeader+heightContacts>=scroll&&scroll>heightHeader&&scroll>heightHeader+heightPortfolio) {
// 		elemA[2].style.borderBottom='1px solid white';
// 	}
// 	if(scroll<=heightPortfolio+heightHeader) {
// 		elemA[2].style.borderBottom='none';
// 	}
// }


