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
var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

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
