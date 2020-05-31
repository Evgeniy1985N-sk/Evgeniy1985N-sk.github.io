

let 
	body = document.querySelector('body'),
	page = body.querySelector('.page'),
	btnOpen = page.querySelectorAll('.btn-open'),
	modalWindow = page.querySelector('.modal-window'),
	formTalk = page.querySelector('.form-talk'),
	formTalkInputName = page.querySelector('.form-talk__input._name'),
	formTalkInputEmail = page.querySelector('.form-talk__input._email'),
	formTalkInputTextarea = page.querySelector('.form-talk__input._textarea'),
	popup = page.querySelector('.popup'),
	formTalkData = {};

/* modal-window */

page.addEventListener('click', (e) => {
	let target = e.target;

	if ( target.classList.contains('btn-open') ) {
		body.classList.add('open-modal');
		target.nextElementSibling.classList.add('active');
		formTalkInputName.focus()
	}
	if ( target.classList.contains('modal-window') ) {
		body.classList.remove('open-modal');
		target.classList.remove('active');
	}
});

/* form-talk data */

formTalk.addEventListener('submit', (e) => {
	formTalkData.name = formTalkInputName.value;
	formTalkData.email = formTalkInputEmail.value;
	formTalkData.text = formTalkInputTextarea.value;

	sendRequest('POST', requestURL, formTalkData);

});

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, formTalkData = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url);

		xhr.onerror = () => {
			console.log('error');
		}

		xhr.send(JSON.stringify(formTalkData));

		body.classList.remove('open-modal');
		modalWindow.classList.remove('active');
		popup.classList.add('active');
	});
}