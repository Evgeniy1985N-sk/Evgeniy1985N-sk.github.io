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