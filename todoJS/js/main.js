
let 
	inpHead = document.querySelector('.inp-head'),
	btnAdd = document.querySelector('.btn-add'),
	body = document.querySelector('.body'),
	showTodoItem = '';

if (localStorage.getItem( 'todoList')) {
		body.innerHTML = localStorage.getItem('todoList');
	}

function createTodo() {
	if (inpHead.value === '') {
		alert('Заполните поле');
		return;
	}
	showTodoItem = `
		<div class="row">
			<span class="check"></span>
			<input type="text" class="inp inp-body" value = '${inpHead.value}' disabled />
			<div class="row btns">
				<button class="btn btn-delete">Удалить</button>
				<button class="btn btn-double">Изменить</button>
			</div>
		</div>
	`;
	body.innerHTML += showTodoItem;
	localStorage.setItem('todoList', body.innerHTML);
	inpHead.value = '';
}

document.addEventListener('keydown', function() {
	if (event.code === 'Enter') createTodo();
});

btnAdd.addEventListener('click', function() {
	createTodo();
});

body.addEventListener('click', function(e) {
	if (event.target.className === 'btn btn-delete') {
		event.target.parentNode.parentNode.remove();
	}

	if (event.target.className === 'check' || event.target.className === 'check active') {
		event.target.classList.toggle('active');

		/* input */
		event.target.nextElementSibling.classList.toggle('completed');
	}
	
	if (event.target.className === 'btn btn-double') {

		event.target.classList.add('active');
		event.target.innerHTML = 'Сохранить';

		/* btn-delete */
		event.target.previousElementSibling.classList.add('hidden');

		/* input */
		event.target.parentNode.parentNode.childNodes[3].removeAttribute('disabled', '');
		event.target.parentNode.parentNode.childNodes[3].focus();
		event.target.parentNode.parentNode.childNodes[3].classList.add('active');

		/* check */
		event.target.parentNode.parentNode.childNodes[1].classList.add('hidden');
	}

	else if (event.target.className === 'btn btn-double active') {
		event.target.classList.remove('active');
		event.target.innerHTML = 'Изменить';

		/* btn-delete */
		event.target.previousElementSibling.classList.remove('hidden');

		/* input */
		event.target.parentNode.parentNode.childNodes[3].setAttribute('disabled', '');
		event.target.parentNode.parentNode.childNodes[3].classList.remove('active');

		/* check */
		event.target.parentNode.parentNode.childNodes[1].classList.remove('hidden');
	}

	localStorage.setItem('todoList', body.innerHTML);
});

body.addEventListener('change', function(e) {
	event.target.setAttribute('value', event.target.value);
	localStorage.setItem('todoList', body.innerHTML);
});