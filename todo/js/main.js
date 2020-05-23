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

document.addEventListener('keydown', function() {
	if (event.code === 'Enter') {
		createTodo();
		showContent();
	}
});

btnAdd.addEventListener('click', function() {
	if (inpHead.value === '') return alert('Заполните поле');
	createTodo();
	showContent();
	inpHead.value = '';
});

body.addEventListener('click', function(e) {
	const target = event.target;
	const parent = target.parentNode.parentNode;

	if (target.classList.contains('btn-delete')) {
		let idRow = parent.id;
		arr.splice(idRow, 1);
		parent.remove();
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

		let inpBody = parent.querySelector('.inp-body');
		inpBody.removeAttribute('disabled', '');
		inpBody.focus();
		inpBody.setSelectionRange(inpBody.value.length,inpBody.value.length);
		inpBody.classList.add('active');

		parent.querySelector('.check').classList.add('hidden');
	}
	else if (target.classList.contains('btn-edit_active')) {
		target.classList.remove('btn-edit_active');
		target.classList.add('btn-edit_not-active');
		target.innerHTML = 'Изменить';

		target.parentNode.querySelector('.btn-delete').classList.remove('hidden');

		parent.querySelector('.inp-body').setAttribute('disabled', '');
		parent.querySelector('.inp-body').classList.remove('active');

		parent.querySelector('.check').classList.remove('hidden');
	}

	localStorage.setItem('arr', JSON.stringify(arr));
});

body.addEventListener('change', function(e) {
	event.target.setAttribute('value', event.target.value);
	let idRow = event.target.parentNode.id;
	arr[idRow].text = event.target.value;
	localStorage.setItem('arr', JSON.stringify(arr));
});