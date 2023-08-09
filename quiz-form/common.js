
formQuiz();
function formQuiz() {

  const form = document.querySelector('.form');
  const formContainer = document.querySelector('.form__container');
  const formPsycholog = form.querySelector('#psycholog-for');
  const formWorries = form.querySelector('#my-worries');
  const formAboutSelf = form.querySelector('#about-self');
  const popup = form.querySelector('#popup');

  const buttonSubmit = form.querySelector('.button-js-submit');
  const formCross = form.querySelector('.form__cross');
  const allInputs = form.querySelectorAll('input');

  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputPhone = document.querySelector('#phone');

  const runnerGlobal = formAboutSelf.querySelector('.progress-indicator__runner');
  const percentGlobal = formAboutSelf.querySelector('.progress-info__value');

  const runnerPs = formPsycholog.querySelector('.progress-indicator__runner');
  const percentPs = formPsycholog.querySelector('.progress-info__value');


  let counter = 0;
  let counter2 = 0;

  class FormQuiz {

    constructor(form) {
      this.form = form;
    }

    formInteraction() {

      const runner = this.form.querySelector('.progress-indicator__runner');
      const percent = this.form.querySelector('.progress-info__value');

      const buttonNext = this.form.querySelector('.button-js-next');

      const prevForm = this.form.previousElementSibling;
      const nextForm = this.form.nextElementSibling;
      const nextRunner = nextForm.querySelector('.progress-indicator__runner');
      const nextPercent = nextForm.querySelector('.progress-info__value');

      const inputs = this.form.querySelectorAll('input').length;
      const forms = document.querySelectorAll('.form-js').length;

      const parent = this.form;

      this.form.addEventListener('click', function(e) {

        const target = e.target;
        const el = e.target.classList;
        const type = e.target.type;

        if (el.contains('input-js')) {

          if (parent.id === "about-self") {

            if(counter2 === 0 ) {
              counter2 = (100 - counter) / inputs;
            }

            if (type == 'email') {
              checkEmail();
            }

            if (type == 'tel') {
              checkPhone();
            }

            if (type == 'checkbox') {
              if (target.checked) {

                counter += counter2;

                runner.style.width = `${Math.round(counter)}%`;
                percent.innerHTML = `${Math.round(counter)}%`;

                checkFill();
              }
              else {

                counter -= counter2;
                runner.style.width = `${Math.round(counter)}%`;
                percent.innerHTML = `${Math.round(counter)}%`;

                checkFill();
              }
            }

            return;
            
          }

          if(parent.classList.contains('type-radio')) return;

          if (target.checked) {

            if(counter2 !== 0 ) return;

            counter += Math.round( 100 / forms / inputs );

            runner.style.width = `${Math.round(counter)}%`;
            percent.innerHTML = `${Math.round(counter)}%`;

            buttonNext.classList.remove('button-primary_disabled');

            if(type == 'radio') parent.classList.add('type-radio')
          }

          if (!target.checked) {
            if(counter2 !== 0 ) return;

            counter -= Math.round( 100 / forms / inputs );

            runner.style.width = `${Math.round(counter)}%`;
            percent.innerHTML = `${Math.round(counter)}%`;
          }

        }

        if (el.contains('button-js-next')) {
          this.classList.add('form__body_hidden');
          nextForm.classList.remove('form__body_hidden');

          nextRunner.style.width = `${Math.round(counter)}%`;
          nextPercent.innerHTML = `${Math.round(counter)}%`;
        }

        if (el.contains('button-js-prev')) {
          const prevRunner = prevForm.querySelector('.progress-indicator__runner');
          const prevPercent = prevForm.querySelector('.progress-info__value');

          this.classList.add('form__body_hidden');
          prevForm.classList.remove('form__body_hidden');

          prevRunner.style.width = `${Math.round(counter)}%`;
          prevPercent.innerHTML = `${Math.round(counter)}%`;

        }

      });

    }

  }
  // end class

  let arr = [];
  let name;
  let value;

  // localStorage.getItem('test')

  form.addEventListener('submit', function(e) {

    e.preventDefault();

    allInputs.forEach(function(item) {
      name = item.name;
      value = item.value;

      if(item.id == 'name') {
        arr.push({name, value})
      }
     
      if(item.id == 'phone') {
        arr.push({name, value})
      }

      if(item.id == 'email') {
        arr.push({name, value})
      }

      if(item.type = 'checkbox') {
        if (item.checked) {
          arr.push({name, value})
        }
      }

    });

    localStorage.setItem('test', JSON.stringify(arr));

    formContainer.classList.add('popup-show');
    popup.classList.remove('form__body_hidden');
    formAboutSelf.classList.add('form__body_hidden');

    reset();
  });


  checkName()
  function checkName() {
    function onInputText() {
      let letters = /^[А-ЯЁ][а-яё]+$/;

      if (inputName.value.match(letters)) {

        inputName.parentElement.classList.remove('label_error');
        inputName.parentElement.classList.add('label_success');

        if(inputName.classList.contains('counter-increased')) return;

        counter += counter2;
        runnerGlobal.style.width = `${Math.round(counter)}%`;
        percentGlobal.innerHTML = `${Math.round(counter)}%`;

        inputName.classList.add('counter-increased');
        inputName.classList.remove('counter-reduced');

        checkFill();

      } 
      else {
        inputName.parentElement.classList.remove('label_success');
        inputName.parentElement.classList.add('label_error');

        if(inputName.classList.contains('counter-reduced')) return;

        if(inputName.classList.contains('counter-increased')) {

          counter -= counter2;
          runnerGlobal.style.width = `${Math.round(counter)}%`;
          percentGlobal.innerHTML = `${Math.round(counter)}%`;
        }

        inputName.classList.add('counter-reduced');
        inputName.classList.remove('counter-increased');

        checkFill();
      }
    }
    inputName.addEventListener('input', onInputText);
  }

  checkEmail()
  function checkEmail() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    
    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }

    function onInput() {
      if (isEmailValid(inputEmail.value)) {

        inputEmail.parentElement.classList.remove('label_error');
        inputEmail.parentElement.classList.add('label_success');

        if (inputEmail.classList.contains('counter-increased')) return;

        counter += counter2;
        runnerGlobal.style.width = `${Math.round(counter)}%`;
        percentGlobal.innerHTML = `${Math.round(counter)}%`;
  
        inputEmail.classList.add('counter-increased');
        inputEmail.classList.remove('counter-reduced');

        checkFill();

      } 
      else {

        inputEmail.parentElement.classList.remove('label_success');
        inputEmail.parentElement.classList.add('label_error');

        if (inputEmail.classList.contains('counter-reduced')) return;

        if (inputEmail.classList.contains('counter-increased')) {
          counter -= counter2;
          runnerGlobal.style.width = `${Math.round(counter)}%`;
          percentGlobal.innerHTML = `${Math.round(counter)}%`;
        }

        inputEmail.classList.add('counter-reduced');
        inputEmail.classList.remove('counter-increased');

        checkFill();
      }
    }
    inputEmail.addEventListener('input', onInput);

  }

  checkPhone();
  function checkPhone() {
    const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    }
    const mask = new IMask(inputPhone, maskOptions);

    function phoneInputHandler() {

      if (mask.masked.isComplete) {
        

        inputPhone.parentElement.classList.remove('label_error');
        inputPhone.parentElement.classList.add('label_success');

        
        if(inputPhone.classList.contains('counter-increased')) return;

        counter += counter2;
        runnerGlobal.style.width = `${Math.round(counter)}%`;
        percentGlobal.innerHTML = `${Math.round(counter)}%`;


        inputPhone.classList.add('counter-increased');
        inputPhone.classList.remove('counter-reduced');

        checkFill();
        
      }
      else {

        inputPhone.parentElement.classList.remove('label_success');
        inputPhone.parentElement.classList.add('label_error');

        if(inputPhone.classList.contains('counter-reduced')) return;

        if(inputPhone.classList.contains('counter-increased')) {

          counter -= counter2;
          runnerGlobal.style.width = `${Math.round(counter)}%`;
          percentGlobal.innerHTML = `${Math.round(counter)}%`;

        }

        inputPhone.classList.add('counter-reduced');
        inputPhone.classList.remove('counter-increased');

        checkFill();

      }
    }
    inputPhone.addEventListener("input", phoneInputHandler);
  }

  function checkFill() {
    if (counter === 100) {
      buttonSubmit.classList.remove('button-primary_disabled');
    }
    else {
      buttonSubmit.classList.add('button-primary_disabled');
    }
  }

  const psyholog = new FormQuiz(formPsycholog);
  psyholog.formInteraction();

  const worries = new FormQuiz(formWorries);
  worries.formInteraction();

  const aboutSelf = new FormQuiz(formAboutSelf);
  aboutSelf.formInteraction();

  formCross.onclick = function() {
    formContainer.classList.add('popup-show');
    popup.classList.add('form__body_hidden');
    formPsycholog.classList.remove('form__body_hidden');
  }

  function reset() {
    counter = 0;
    counter2 = 0;
    allInputs.forEach(function(item) {
      item.checked = false;
    })
    runnerPs.style.width = `0%`;
    percentPs.innerHTML = `0%`;
    formPsycholog.classList.remove('type-radio')
  }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mb3JtUXVpeigpO1xyXG5mdW5jdGlvbiBmb3JtUXVpeigpIHtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19jb250YWluZXInKTtcclxuICBjb25zdCBmb3JtUHN5Y2hvbG9nID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHN5Y2hvbG9nLWZvcicpO1xyXG4gIGNvbnN0IGZvcm1Xb3JyaWVzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjbXktd29ycmllcycpO1xyXG4gIGNvbnN0IGZvcm1BYm91dFNlbGYgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1zZWxmJyk7XHJcbiAgY29uc3QgcG9wdXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cCcpO1xyXG5cclxuICBjb25zdCBidXR0b25TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tanMtc3VibWl0Jyk7XHJcbiAgY29uc3QgZm9ybUNyb3NzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY3Jvc3MnKTtcclxuICBjb25zdCBhbGxJbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xyXG4gIGNvbnN0IGlucHV0UGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcclxuXHJcbiAgY29uc3QgcnVubmVyR2xvYmFsID0gZm9ybUFib3V0U2VsZi5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5kaWNhdG9yX19ydW5uZXInKTtcclxuICBjb25zdCBwZXJjZW50R2xvYmFsID0gZm9ybUFib3V0U2VsZi5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5mb19fdmFsdWUnKTtcclxuXHJcbiAgY29uc3QgcnVubmVyUHMgPSBmb3JtUHN5Y2hvbG9nLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pbmRpY2F0b3JfX3J1bm5lcicpO1xyXG4gIGNvbnN0IHBlcmNlbnRQcyA9IGZvcm1Qc3ljaG9sb2cucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcbiAgbGV0IGNvdW50ZXIyID0gMDtcclxuXHJcbiAgY2xhc3MgRm9ybVF1aXoge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcclxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtSW50ZXJhY3Rpb24oKSB7XHJcblxyXG4gICAgICBjb25zdCBydW5uZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBidXR0b25OZXh0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tanMtbmV4dCcpO1xyXG5cclxuICAgICAgY29uc3QgcHJldkZvcm0gPSB0aGlzLmZvcm0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgY29uc3QgbmV4dEZvcm0gPSB0aGlzLmZvcm0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBjb25zdCBuZXh0UnVubmVyID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IG5leHRQZXJjZW50ID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tanMnKS5sZW5ndGg7XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmZvcm07XHJcblxyXG4gICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC50eXBlO1xyXG5cclxuICAgICAgICBpZiAoZWwuY29udGFpbnMoJ2lucHV0LWpzJykpIHtcclxuXHJcbiAgICAgICAgICBpZiAocGFyZW50LmlkID09PSBcImFib3V0LXNlbGZcIikge1xyXG5cclxuICAgICAgICAgICAgaWYoY291bnRlcjIgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgY291bnRlcjIgPSAoMTAwIC0gY291bnRlcikgLyBpbnB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdlbWFpbCcpIHtcclxuICAgICAgICAgICAgICBjaGVja0VtYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tQaG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSBjb3VudGVyMjtcclxuXHJcbiAgICAgICAgICAgICAgICBydW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoZWNrRmlsbCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyIC09IGNvdW50ZXIyO1xyXG4gICAgICAgICAgICAgICAgcnVubmVyLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGVja0ZpbGwoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygndHlwZS1yYWRpbycpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgICAgICBpZihjb3VudGVyMiAhPT0gMCApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gTWF0aC5yb3VuZCggMTAwIC8gZm9ybXMgLyBpbnB1dHMgKTtcclxuXHJcbiAgICAgICAgICAgIHJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3JhZGlvJykgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3R5cGUtcmFkaW8nKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYoY291bnRlcjIgIT09IDAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyIC09IE1hdGgucm91bmQoIDEwMCAvIGZvcm1zIC8gaW5wdXRzICk7XHJcblxyXG4gICAgICAgICAgICBydW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgICBwZXJjZW50LmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLmNvbnRhaW5zKCdidXR0b24tanMtbmV4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgICAgICAgICBuZXh0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgIG5leHRSdW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgbmV4dFBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbC5jb250YWlucygnYnV0dG9uLWpzLXByZXYnKSkge1xyXG4gICAgICAgICAgY29uc3QgcHJldlJ1bm5lciA9IHByZXZGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pbmRpY2F0b3JfX3J1bm5lcicpO1xyXG4gICAgICAgICAgY29uc3QgcHJldlBlcmNlbnQgPSBwcmV2Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5mb19fdmFsdWUnKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgICAgICAgICBwcmV2Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgIHByZXZSdW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgcHJldlBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLy8gZW5kIGNsYXNzXHJcblxyXG4gIGxldCBhcnIgPSBbXTtcclxuICBsZXQgbmFtZTtcclxuICBsZXQgdmFsdWU7XHJcblxyXG4gIC8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGFsbElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgbmFtZSA9IGl0ZW0ubmFtZTtcclxuICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlO1xyXG5cclxuICAgICAgaWYoaXRlbS5pZCA9PSAnbmFtZScpIHtcclxuICAgICAgICBhcnIucHVzaCh7bmFtZSwgdmFsdWV9KVxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIGlmKGl0ZW0uaWQgPT0gJ3Bob25lJykge1xyXG4gICAgICAgIGFyci5wdXNoKHtuYW1lLCB2YWx1ZX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0uaWQgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgIGFyci5wdXNoKHtuYW1lLCB2YWx1ZX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0udHlwZSA9ICdjaGVja2JveCcpIHtcclxuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBhcnIucHVzaCh7bmFtZSwgdmFsdWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3B1cC1zaG93Jyk7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gICAgZm9ybUFib3V0U2VsZi5jbGFzc0xpc3QuYWRkKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICAgIHJlc2V0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBjaGVja05hbWUoKVxyXG4gIGZ1bmN0aW9uIGNoZWNrTmFtZSgpIHtcclxuICAgIGZ1bmN0aW9uIG9uSW5wdXRUZXh0KCkge1xyXG4gICAgICBpZiAoaW5wdXROYW1lLnZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlucHV0TmFtZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsX2Vycm9yJyk7XHJcbiAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfc3VjY2VzcycpO1xyXG5cclxuICAgICAgICBpZihpbnB1dE5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyLWluY3JlYXNlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvdW50ZXIgKz0gY291bnRlcjI7XHJcbiAgICAgICAgcnVubmVyR2xvYmFsLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICBwZXJjZW50R2xvYmFsLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcblxyXG4gICAgICAgIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLWluY3JlYXNlZCcpO1xyXG4gICAgICAgIGlucHV0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXJlZHVjZWQnKTtcclxuXHJcbiAgICAgICAgY2hlY2tGaWxsKCk7XHJcblxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpbnB1dE5hbWUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYWJlbF9zdWNjZXNzJyk7XHJcbiAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfZXJyb3InKTtcclxuXHJcbiAgICAgICAgaWYoaW5wdXROYW1lLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1yZWR1Y2VkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoaW5wdXROYW1lLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1pbmNyZWFzZWQnKSkge1xyXG5cclxuICAgICAgICAgIGNvdW50ZXIgLT0gY291bnRlcjI7XHJcbiAgICAgICAgICBydW5uZXJHbG9iYWwuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgcGVyY2VudEdsb2JhbC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXROYW1lLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItcmVkdWNlZCcpO1xyXG4gICAgICAgIGlucHV0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLWluY3JlYXNlZCcpO1xyXG5cclxuICAgICAgICBjaGVja0ZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dFRleHQpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tFbWFpbCgpXHJcbiAgZnVuY3Rpb24gY2hlY2tFbWFpbCgpIHtcclxuICAgIGNvbnN0IEVNQUlMX1JFR0VYUCA9IC9eKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF0uLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezIsfSkkL2l1O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpc0VtYWlsVmFsaWQodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbklucHV0KCkge1xyXG4gICAgICBpZiAoaXNFbWFpbFZhbGlkKGlucHV0RW1haWwudmFsdWUpKSB7XHJcblxyXG4gICAgICAgIGlucHV0RW1haWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYWJlbF9lcnJvcicpO1xyXG4gICAgICAgIGlucHV0RW1haWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbF9zdWNjZXNzJyk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEVtYWlsLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1pbmNyZWFzZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb3VudGVyICs9IGNvdW50ZXIyO1xyXG4gICAgICAgIHJ1bm5lckdsb2JhbC5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgcGVyY2VudEdsb2JhbC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gIFxyXG4gICAgICAgIGlucHV0RW1haWwuY2xhc3NMaXN0LmFkZCgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuICAgICAgICBpbnB1dEVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItcmVkdWNlZCcpO1xyXG5cclxuICAgICAgICBjaGVja0ZpbGwoKTtcclxuXHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfc3VjY2VzcycpO1xyXG4gICAgICAgIGlucHV0RW1haWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbF9lcnJvcicpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRFbWFpbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItcmVkdWNlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEVtYWlsLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1pbmNyZWFzZWQnKSkge1xyXG4gICAgICAgICAgY291bnRlciAtPSBjb3VudGVyMjtcclxuICAgICAgICAgIHJ1bm5lckdsb2JhbC5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICBwZXJjZW50R2xvYmFsLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItcmVkdWNlZCcpO1xyXG4gICAgICAgIGlucHV0RW1haWwuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuXHJcbiAgICAgICAgY2hlY2tGaWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0KTtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1Bob25lKCk7XHJcbiAgZnVuY3Rpb24gY2hlY2tQaG9uZSgpIHtcclxuICAgIGNvbnN0IG1hc2tPcHRpb25zID0ge1xyXG4gICAgICAgIG1hc2s6ICcrNygwMDApMDAwLTAwLTAwJyxcclxuICAgICAgICBsYXp5OiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWFzayA9IG5ldyBJTWFzayhpbnB1dFBob25lLCBtYXNrT3B0aW9ucyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGhvbmVJbnB1dEhhbmRsZXIoKSB7XHJcblxyXG4gICAgICBpZiAobWFzay5tYXNrZWQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfc3VjY2VzcycpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZihpbnB1dFBob25lLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1pbmNyZWFzZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb3VudGVyICs9IGNvdW50ZXIyO1xyXG4gICAgICAgIHJ1bm5lckdsb2JhbC5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgcGVyY2VudEdsb2JhbC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG5cclxuXHJcbiAgICAgICAgaW5wdXRQaG9uZS5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLWluY3JlYXNlZCcpO1xyXG4gICAgICAgIGlucHV0UGhvbmUuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci1yZWR1Y2VkJyk7XHJcblxyXG4gICAgICAgIGNoZWNrRmlsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfc3VjY2VzcycpO1xyXG4gICAgICAgIGlucHV0UGhvbmUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbF9lcnJvcicpO1xyXG5cclxuICAgICAgICBpZihpbnB1dFBob25lLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1yZWR1Y2VkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoaW5wdXRQaG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItaW5jcmVhc2VkJykpIHtcclxuXHJcbiAgICAgICAgICBjb3VudGVyIC09IGNvdW50ZXIyO1xyXG4gICAgICAgICAgcnVubmVyR2xvYmFsLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgIHBlcmNlbnRHbG9iYWwuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFBob25lLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItcmVkdWNlZCcpO1xyXG4gICAgICAgIGlucHV0UGhvbmUuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuXHJcbiAgICAgICAgY2hlY2tGaWxsKCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dFBob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBwaG9uZUlucHV0SGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbGwoKSB7XHJcbiAgICBpZiAoY291bnRlciA9PT0gMTAwKSB7XHJcbiAgICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tcHJpbWFyeV9kaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidXR0b24tcHJpbWFyeV9kaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHN5aG9sb2cgPSBuZXcgRm9ybVF1aXooZm9ybVBzeWNob2xvZyk7XHJcbiAgcHN5aG9sb2cuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGNvbnN0IHdvcnJpZXMgPSBuZXcgRm9ybVF1aXooZm9ybVdvcnJpZXMpO1xyXG4gIHdvcnJpZXMuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGFib3V0U2VsZiA9IG5ldyBGb3JtUXVpeihmb3JtQWJvdXRTZWxmKTtcclxuICBhYm91dFNlbGYuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGZvcm1Dcm9zcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLXNob3cnKTtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgICBmb3JtUHN5Y2hvbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldCgpIHtcclxuICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgY291bnRlcjIgPSAwO1xyXG4gICAgYWxsSW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pXHJcbiAgICBydW5uZXJQcy5zdHlsZS53aWR0aCA9IGAwJWA7XHJcbiAgICBwZXJjZW50UHMuaW5uZXJIVE1MID0gYDAlYDtcclxuICAgIGZvcm1Qc3ljaG9sb2cuY2xhc3NMaXN0LnJlbW92ZSgndHlwZS1yYWRpbycpXHJcbiAgfVxyXG5cclxufSJdfQ==
