let inputName = document.querySelectorAll('.input-name-js');

inputName.forEach(function(el) {

  el.addEventListener('input', function(event) {

    inputText(el);

  });

});

function inputText(el) {

  const letters = el.value.match(/[а-яёa-z]/gi);
  const label = el.parentElement;
  const labelText = document.createElement('span');
  const messageError = label.querySelector('.label__text');
  const length = el.value.length;

  labelText.classList.add('label__text', 'label__text_error');

  if (el.value.trim() === '') { // empty

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Поле не заполнено';
    el.value = el.value.replace(el.value, '');
    return;

  }

  if (!letters) {

    el.value = el.value.replace(el.value, '');
    return;

  }

  if (length === 1) {

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Введите хотя бы 2 буквы';

  }

  if (el.value === letters.join('') && length !== 1) { // success

    if (messageError) messageError.remove();

  }

  el.value = el.value.replace(el.value, letters.join(''));

}