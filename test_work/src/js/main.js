import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

eventCard();
function eventCard() {
	let homeCard = document.querySelectorAll(".home__card");
	let homeLike = document.querySelectorAll(".home__like");
	let homeBtn = document.querySelectorAll(".home__btn");
	let homeQuantity = document.querySelectorAll(".home__quantity");
	let homePlus = document.querySelectorAll(".home__plus");
	let homeMinus = document.querySelectorAll(".home__minus");
	let homeThing = document.querySelectorAll(".home__thing");
	let cardsArr = [];

	for (let i = 0; i < homeCard.length; i++) {

		cardsArr[i] = 0;

		homeLike[i].onclick = function() {
			this.classList.toggle("home__like_active");
		}

		homeBtn[i].onclick = function() {
			homeBtn[i].classList.add("d-none");
			homeQuantity[i].classList.add("d-flex");

			cardsArr[i] += 1;
			homeThing[i].innerHTML = `${cardsArr[i]} шт.`;

		}

		homeMinus[i].onclick = function() {
			if (cardsArr[i] == 1) {
				homeBtn[i].classList.remove("d-none");
				homeQuantity[i].classList.remove("d-flex");

				return cardsArr[i] = 0;
			}

			cardsArr[i] -= 1;
			homeThing[i].innerHTML = `${cardsArr[i]} шт.`;

		}

		homePlus[i].onclick = function() {
			
			cardsArr[i] += 1;
			homeThing[i].innerHTML = `${cardsArr[i]} шт.`;
		}

	}

}