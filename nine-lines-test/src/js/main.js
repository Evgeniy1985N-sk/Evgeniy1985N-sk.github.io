import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import home from './components/home';

import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();


const time = 1000;
const step = 1;
const skillLabel = document.querySelectorAll(".skill__label");
const levelArrow = document.querySelector(".level__arrow");

let allSkill = 0;
let sum = 0;
let sum2 = 0;

countSkill(100);
changeCounter();

function outNum(num) {
  let e = document.querySelector("#counter");
  let n = sum2;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
  	
  	if(num > n) {
	    n = n + step;
	    if (n === num) {
		    n = n + step;
	      clearInterval(interval);
	    }
	  }

	  if(num <= n) {
	    n = n - step;
	    if (n === num) {
	      clearInterval(interval);
	    }
	  }

    e.innerHTML = n;
    let transform = `rotate(${n/10}deg) translate(-50%,-50%)`;
    levelArrow.style.transform = transform;
  }, t);
}

function changeCounter() {
	for(let i = 0; i < skillLabel.length; i++) {
		let item = skillLabel[i];

		item.onclick = function() {
			item.classList.toggle("is-active");
			countSkill(100);
		}
	}
}

function countSkill(number) {
	const skillLabelActive = document.querySelectorAll(".skill__label.is-active");
	allSkill = skillLabelActive.length;
	sum2 = sum;
	sum = allSkill * number;
	outNum(sum, sum2);
}