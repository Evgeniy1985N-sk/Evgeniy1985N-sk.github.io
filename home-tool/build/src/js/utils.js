
/* modal-window */

let body = document.querySelector('body');
let page = body.querySelector('.page');
let btnOpen = page.querySelectorAll('.btn-open');
let modaWindow = page.querySelectorAll('.modal-window');

page.addEventListener('click', function(e) {
	let target = e.target;

	if( target.classList.contains('btn-open') ) {
		body.classList.add('open-modal');
		target.nextElementSibling.classList.add('active')
	}
	if( target.classList.contains('modal-window') ) {
		body.classList.remove('open-modal');
		target.classList.remove('active');
	}
});


// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// let xhr = new XMLHttpRequest();

// xhr.open('GET', requestURL);

// xhr.onload = () => {
// 	console.log(xhr.response)
// }

// xhr.send();

