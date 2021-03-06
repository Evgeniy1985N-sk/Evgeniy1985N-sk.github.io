let 
	inpHead = document.querySelector('.inp-head'),
	btnAdd = document.querySelector('.btn-add'),
	body = document.querySelector('.body'),
	arr = [];

if (localStorage.getItem( 'arr')) {
		arr = JSON.parse(localStorage.getItem('arr'));
		showContent();
	}

function createTodo() {
	let arrItem = {
		text: inpHead.value,
		checked: false,
	};
	arr.push(arrItem);
	localStorage.setItem('arr', JSON.stringify(arr));
}

function showContent() {
	let row = '';
	arr.forEach(function(item, i) {
		row += `
		<div class="row" id = '${i}'>
			<span class="check ${item.checked ? 'check-yes' : 'check-no'}"></span>
			<input type="text" class="inp inp-body ${item.checked ? 'completed' : ''}" value = '${item.text}' disabled />
			<div class="row btns">
				<button class="btn btn-delete">Удалить</button>
				<button class="btn btn-edit btn-edit_not-active">Изменить</button>
			</div>
		</div>
		`;
		body.innerHTML = row;
	});
	localStorage.setItem('arr', JSON.stringify(arr));
}

document.addEventListener('keydown', function(e) {
	if (event.code === 'Enter') {
		createTodo();
		showContent();
	}
});

btnAdd.addEventListener('click', function(e) {
	if (inpHead.value === '') return alert('Заполните поле');
	createTodo();
	showContent();
	inpHead.value = '';
});

body.addEventListener('click', function(e) {
	const target = event.target;

	if (target.classList.contains('btn-delete')) {
		let idRow = target.parentNode.parentNode.id;
		arr.splice(idRow, 1);
		target.parentNode.parentNode.remove();
		showContent();
	}

	if (target.classList.contains('check-no')) {
		target.classList.remove('check-no');
		target.classList.add('check-yes');
		target.parentNode.querySelector('.inp-body').classList.add('completed');
		let idRow = target.parentNode.id;
		arr[idRow].checked = true;

	}
	else if (target.classList.contains('check-yes')) {
		target.classList.remove('check-yes');
		target.classList.add('check-no');
		target.parentNode.querySelector('.inp-body').classList.remove('completed');
		let idRow = target.parentNode.id;
		arr[idRow].checked = false;
	}

	if (target.classList.contains('btn-edit_not-active')) {
		target.classList.remove('btn-edit_not-active');
		target.classList.add('btn-edit_active');
		target.innerHTML = 'Сохранить';

		target.parentNode.querySelector('.btn-delete').classList.add('hidden');

		let inpBody = target.parentNode.parentNode.querySelector('.inp-body');
		inpBody.removeAttribute('disabled', '');
		inpBody.focus();
		inpBody.setSelectionRange(inpBody.value.length,inpBody.value.length);
		inpBody.classList.add('active');

		target.parentNode.parentNode.querySelector('.check').classList.add('hidden');
	}
	else if (target.classList.contains('btn-edit_active')) {
		target.classList.remove('btn-edit_active');
		target.classList.add('btn-edit_not-active');
		target.innerHTML = 'Изменить';

		target.parentNode.querySelector('.btn-delete').classList.remove('hidden');

		target.parentNode.parentNode.querySelector('.inp-body').setAttribute('disabled', '');
		target.parentNode.parentNode.querySelector('.inp-body').classList.remove('active');

		target.parentNode.parentNode.querySelector('.check').classList.remove('hidden');
	}

	localStorage.setItem('arr', JSON.stringify(arr));
});

body.addEventListener('change', function(e) {
	event.target.setAttribute('value', event.target.value);
	let idRow = event.target.parentNode.id;
	arr[idRow].text = event.target.value;
	localStorage.setItem('arr', JSON.stringify(arr));
});


fetch('https://github.com/typicode/demo/edit/master/db.json')
  .then(response => response.json())
  .then(json => console.log(json))