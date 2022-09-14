'use strict';

const largeSlider = ()=>{
	let cardsSlider = document.querySelectorAll('.cards-sl')
	let prevArrow = document.querySelectorAll('.swiper-button-prev');
	let nextArrow = document.querySelectorAll('.swiper-button-next');
	cardsSlider.forEach((slider, index)=>{
    // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const swiper = new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 18,
      loop: true,
			navigation: {
        // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
		});	
	})

}

window.addEventListener('load', largeSlider);


contactUs();
function contactUs() {

  let footerContact = document.querySelector(".footer-contact");
  let modal = document.querySelector(".modal");
  let form = document.querySelector(".form");
  let formClose = document.querySelector(".form-close");

  footerContact.onclick = function() {
    form.classList.add('_active');
    modal.classList.add('_active');
  }

  formClose.onclick = function() {
    form.classList.remove('_active');
    modal.classList.remove('_active');
  }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBsYXJnZVNsaWRlciA9ICgpPT57XHJcblx0bGV0IGNhcmRzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzLXNsJylcclxuXHRsZXQgcHJldkFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1idXR0b24tcHJldicpO1xyXG5cdGxldCBuZXh0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyk7XHJcblx0Y2FyZHNTbGlkZXIuZm9yRWFjaCgoc2xpZGVyLCBpbmRleCk9PntcclxuICAgIC8vIHRoaXMgYml0IGNoZWNrcyBpZiB0aGVyZSdzIG1vcmUgdGhhbiAxIHNsaWRlLCBpZiB0aGVyZSdzIG9ubHkgMSBpdCB3b24ndCBsb29wXHJcblx0XHRsZXQgc2xpZGVyTGVuZ3RoID0gc2xpZGVyLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aFxyXG5cdFx0bGV0IHJlc3VsdCA9IChzbGlkZXJMZW5ndGggPiAxKSA/IHRydWUgOiBmYWxzZVxyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihzbGlkZXIsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG4gICAgICAgIC8vIHRoZSAnaW5kZXgnIGJpdCBiZWxvdyBpcyBqdXN0IHRoZSBvcmRlciBvZiB0aGUgY2xhc3MgaW4gdGhlIHF1ZXJ5c2VsZWN0b3JBbGwgYXJyYXksIHNvIHRoZSBmaXJzdCBvbmUgd291bGQgYmUgTmV4dEFycm93WzBdIGV0Y1xyXG5cdFx0XHRcdG5leHRFbDogbmV4dEFycm93W2luZGV4XSxcclxuXHRcdFx0XHRwcmV2RWw6IHByZXZBcnJvd1tpbmRleF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHNwZWVkOiAxMDAwLFxyXG5cdFx0fSk7XHRcclxuXHR9KVxyXG5cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsYXJnZVNsaWRlcik7XHJcblxyXG5cclxuY29udGFjdFVzKCk7XHJcbmZ1bmN0aW9uIGNvbnRhY3RVcygpIHtcclxuXHJcbiAgbGV0IGZvb3RlckNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1jb250YWN0XCIpO1xyXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgbGV0IGZvcm1DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jbG9zZVwiKTtcclxuXHJcbiAgZm9vdGVyQ29udGFjdC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIGZvcm1DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcclxuICB9XHJcblxyXG59Il19
