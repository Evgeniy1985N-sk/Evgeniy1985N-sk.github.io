let inputName = document.querySelectorAll('.input-name-js');

inputName.forEach(function(el) {

  el.addEventListener('input', function(event) {

    inputText(el);

  });

});

function inputText(el) {

  const letters = el.value.match(/[а-яё a-z]/gi);
  const label = el.parentElement;
  const labelText = document.createElement('span');
  const messageError = label.querySelector('.label__text');

  labelText.classList.add('label__text', 'label__text_error');

  if (el.value.trim() === '') { // if empty

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Поле не заполнено';

    return;

  }

  if (letters === null && el.value.trim() !== '') {

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Только буквы';

    return;

  }

  if (el.value !== letters.join('')) { // if not letters

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Только буквы';

  }

  if (el.value.trim().length === 1) {

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Введите хотя бы 2 буквы';

    return;

  }

  if (el.value.length > 18) {

    if (!messageError) label.append(labelText);

    label.querySelector('.label__text').innerHTML = 'Слишком много букв';

    return;

  }

  
  if (el.value === letters.join('')) { // if success

    if (messageError) messageError.remove();

  }


}