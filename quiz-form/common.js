
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
  });


  checkName()
  function checkName() {
    function onInputText() {
      if (inputName.value) {

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

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybVF1aXooKTtcclxuZnVuY3Rpb24gZm9ybVF1aXooKSB7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZm9ybVBzeWNob2xvZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3BzeWNob2xvZy1mb3InKTtcclxuICBjb25zdCBmb3JtV29ycmllcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI215LXdvcnJpZXMnKTtcclxuICBjb25zdCBmb3JtQWJvdXRTZWxmID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtc2VsZicpO1xyXG4gIGNvbnN0IHBvcHVwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcG9wdXAnKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWpzLXN1Ym1pdCcpO1xyXG4gIGNvbnN0IGZvcm1Dcm9zcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX2Nyb3NzJyk7XHJcbiAgY29uc3QgYWxsSW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gIGNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcclxuICBjb25zdCBpbnB1dFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XHJcblxyXG4gIGNvbnN0IHJ1bm5lckdsb2JhbCA9IGZvcm1BYm91dFNlbGYucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgY29uc3QgcGVyY2VudEdsb2JhbCA9IGZvcm1BYm91dFNlbGYucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcbiAgbGV0IGNvdW50ZXIyID0gMDtcclxuXHJcbiAgY2xhc3MgRm9ybVF1aXoge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcclxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtSW50ZXJhY3Rpb24oKSB7XHJcblxyXG4gICAgICBjb25zdCBydW5uZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBidXR0b25OZXh0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tanMtbmV4dCcpO1xyXG5cclxuICAgICAgY29uc3QgcHJldkZvcm0gPSB0aGlzLmZvcm0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgY29uc3QgbmV4dEZvcm0gPSB0aGlzLmZvcm0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBjb25zdCBuZXh0UnVubmVyID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IG5leHRQZXJjZW50ID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tanMnKS5sZW5ndGg7XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmZvcm07XHJcblxyXG4gICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC50eXBlO1xyXG5cclxuICAgICAgICBpZiAoZWwuY29udGFpbnMoJ2lucHV0LWpzJykpIHtcclxuXHJcbiAgICAgICAgICBpZiAocGFyZW50LmlkID09PSBcImFib3V0LXNlbGZcIikge1xyXG5cclxuICAgICAgICAgICAgaWYoY291bnRlcjIgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgY291bnRlcjIgPSAoMTAwIC0gY291bnRlcikgLyBpbnB1dHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdlbWFpbCcpIHtcclxuICAgICAgICAgICAgICBjaGVja0VtYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tQaG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSBjb3VudGVyMjtcclxuXHJcbiAgICAgICAgICAgICAgICBydW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoZWNrRmlsbCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyIC09IGNvdW50ZXIyO1xyXG4gICAgICAgICAgICAgICAgcnVubmVyLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGVja0ZpbGwoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygndHlwZS1yYWRpbycpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgaWYgKHRhcmdldC5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgICAgICBpZihjb3VudGVyMiAhPT0gMCApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gTWF0aC5yb3VuZCggMTAwIC8gZm9ybXMgLyBpbnB1dHMgKTtcclxuXHJcbiAgICAgICAgICAgIHJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3JhZGlvJykgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3R5cGUtcmFkaW8nKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYoY291bnRlcjIgIT09IDAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyIC09IE1hdGgucm91bmQoIDEwMCAvIGZvcm1zIC8gaW5wdXRzICk7XHJcblxyXG4gICAgICAgICAgICBydW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgICBwZXJjZW50LmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLmNvbnRhaW5zKCdidXR0b24tanMtbmV4dCcpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgICAgICAgICBuZXh0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgIG5leHRSdW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgbmV4dFBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbC5jb250YWlucygnYnV0dG9uLWpzLXByZXYnKSkge1xyXG4gICAgICAgICAgY29uc3QgcHJldlJ1bm5lciA9IHByZXZGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pbmRpY2F0b3JfX3J1bm5lcicpO1xyXG4gICAgICAgICAgY29uc3QgcHJldlBlcmNlbnQgPSBwcmV2Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5mb19fdmFsdWUnKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcbiAgICAgICAgICBwcmV2Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgIHByZXZSdW5uZXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgcHJldlBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLy8gZW5kIGNsYXNzXHJcblxyXG4gIGxldCBhcnIgPSBbXTtcclxuICBsZXQgbmFtZTtcclxuICBsZXQgdmFsdWU7XHJcblxyXG4gIC8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGFsbElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgbmFtZSA9IGl0ZW0ubmFtZTtcclxuICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlO1xyXG5cclxuICAgICAgaWYoaXRlbS5pZCA9PSAnbmFtZScpIHtcclxuICAgICAgICBhcnIucHVzaCh7bmFtZSwgdmFsdWV9KVxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIGlmKGl0ZW0uaWQgPT0gJ3Bob25lJykge1xyXG4gICAgICAgIGFyci5wdXNoKHtuYW1lLCB2YWx1ZX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0uaWQgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgIGFyci5wdXNoKHtuYW1lLCB2YWx1ZX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0udHlwZSA9ICdjaGVja2JveCcpIHtcclxuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBhcnIucHVzaCh7bmFtZSwgdmFsdWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3B1cC1zaG93Jyk7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gICAgZm9ybUFib3V0U2VsZi5jbGFzc0xpc3QuYWRkKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgY2hlY2tOYW1lKClcclxuICBmdW5jdGlvbiBjaGVja05hbWUoKSB7XHJcbiAgICBmdW5jdGlvbiBvbklucHV0VGV4dCgpIHtcclxuICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSkge1xyXG5cclxuICAgICAgICBpbnB1dE5hbWUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsYWJlbF9lcnJvcicpO1xyXG4gICAgICAgIGlucHV0TmFtZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhYmVsX3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgaWYoaW5wdXROYW1lLmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1pbmNyZWFzZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb3VudGVyICs9IGNvdW50ZXIyO1xyXG4gICAgICAgIHJ1bm5lckdsb2JhbC5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgcGVyY2VudEdsb2JhbC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG5cclxuICAgICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LmFkZCgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuICAgICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci1yZWR1Y2VkJyk7XHJcblxyXG4gICAgICAgIGNoZWNrRmlsbCgpO1xyXG5cclxuICAgICAgfSBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfc3VjY2VzcycpO1xyXG4gICAgICAgIGlucHV0TmFtZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhYmVsX2Vycm9yJyk7XHJcblxyXG4gICAgICAgIGlmKGlucHV0TmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItcmVkdWNlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKGlucHV0TmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItaW5jcmVhc2VkJykpIHtcclxuXHJcbiAgICAgICAgICBjb3VudGVyIC09IGNvdW50ZXIyO1xyXG4gICAgICAgICAgcnVubmVyR2xvYmFsLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgIHBlcmNlbnRHbG9iYWwuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0TmFtZS5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLXJlZHVjZWQnKTtcclxuICAgICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuXHJcbiAgICAgICAgY2hlY2tGaWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXRUZXh0KTtcclxuICB9XHJcblxyXG4gIGNoZWNrRW1haWwoKVxyXG4gIGZ1bmN0aW9uIGNoZWNrRW1haWwoKSB7XHJcbiAgICBjb25zdCBFTUFJTF9SRUdFWFAgPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsyLH0pJC9pdTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbFZhbGlkKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25JbnB1dCgpIHtcclxuICAgICAgaWYgKGlzRW1haWxWYWxpZChpbnB1dEVtYWlsLnZhbHVlKSkge1xyXG5cclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfc3VjY2VzcycpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRFbWFpbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItaW5jcmVhc2VkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgY291bnRlciArPSBjb3VudGVyMjtcclxuICAgICAgICBydW5uZXJHbG9iYWwuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgIHBlcmNlbnRHbG9iYWwuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICBcclxuICAgICAgICBpbnB1dEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItaW5jcmVhc2VkJyk7XHJcbiAgICAgICAgaW5wdXRFbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXJlZHVjZWQnKTtcclxuXHJcbiAgICAgICAgY2hlY2tGaWxsKCk7XHJcblxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgaW5wdXRFbWFpbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsX3N1Y2Nlc3MnKTtcclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfZXJyb3InKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RW1haWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyLXJlZHVjZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRFbWFpbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItaW5jcmVhc2VkJykpIHtcclxuICAgICAgICAgIGNvdW50ZXIgLT0gY291bnRlcjI7XHJcbiAgICAgICAgICBydW5uZXJHbG9iYWwuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgICAgcGVyY2VudEdsb2JhbC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRFbWFpbC5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLXJlZHVjZWQnKTtcclxuICAgICAgICBpbnB1dEVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItaW5jcmVhc2VkJyk7XHJcblxyXG4gICAgICAgIGNoZWNrRmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25JbnB1dCk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tQaG9uZSgpO1xyXG4gIGZ1bmN0aW9uIGNoZWNrUGhvbmUoKSB7XHJcbiAgICBjb25zdCBtYXNrT3B0aW9ucyA9IHtcclxuICAgICAgICBtYXNrOiAnKzcoMDAwKTAwMC0wMC0wMCcsXHJcbiAgICAgICAgbGF6eTogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IG1hc2sgPSBuZXcgSU1hc2soaW5wdXRQaG9uZSwgbWFza09wdGlvbnMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBob25lSW5wdXRIYW5kbGVyKCkge1xyXG5cclxuICAgICAgaWYgKG1hc2subWFza2VkLmlzQ29tcGxldGUpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaW5wdXRQaG9uZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsX2Vycm9yJyk7XHJcbiAgICAgICAgaW5wdXRQaG9uZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhYmVsX3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaW5wdXRQaG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItaW5jcmVhc2VkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgY291bnRlciArPSBjb3VudGVyMjtcclxuICAgICAgICBydW5uZXJHbG9iYWwuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgIHBlcmNlbnRHbG9iYWwuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcblxyXG4gICAgICAgIGlucHV0UGhvbmUuY2xhc3NMaXN0LmFkZCgnY291bnRlci1pbmNyZWFzZWQnKTtcclxuICAgICAgICBpbnB1dFBob25lLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItcmVkdWNlZCcpO1xyXG5cclxuICAgICAgICBjaGVja0ZpbGwoKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgaW5wdXRQaG9uZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsX3N1Y2Nlc3MnKTtcclxuICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfZXJyb3InKTtcclxuXHJcbiAgICAgICAgaWYoaW5wdXRQaG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItcmVkdWNlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKGlucHV0UGhvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyLWluY3JlYXNlZCcpKSB7XHJcblxyXG4gICAgICAgICAgY291bnRlciAtPSBjb3VudGVyMjtcclxuICAgICAgICAgIHJ1bm5lckdsb2JhbC5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICBwZXJjZW50R2xvYmFsLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRQaG9uZS5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLXJlZHVjZWQnKTtcclxuICAgICAgICBpbnB1dFBob25lLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItaW5jcmVhc2VkJyk7XHJcblxyXG4gICAgICAgIGNoZWNrRmlsbCgpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXRQaG9uZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgcGhvbmVJbnB1dEhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tGaWxsKCkge1xyXG4gICAgaWYgKGNvdW50ZXIgPT09IDEwMCkge1xyXG4gICAgICBidXR0b25TdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBidXR0b25TdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBzeWhvbG9nID0gbmV3IEZvcm1RdWl6KGZvcm1Qc3ljaG9sb2cpO1xyXG4gIHBzeWhvbG9nLmZvcm1JbnRlcmFjdGlvbigpO1xyXG5cclxuICBjb25zdCB3b3JyaWVzID0gbmV3IEZvcm1RdWl6KGZvcm1Xb3JyaWVzKTtcclxuICB3b3JyaWVzLmZvcm1JbnRlcmFjdGlvbigpO1xyXG5cclxuICBjb25zdCBhYm91dFNlbGYgPSBuZXcgRm9ybVF1aXooZm9ybUFib3V0U2VsZik7XHJcbiAgYWJvdXRTZWxmLmZvcm1JbnRlcmFjdGlvbigpO1xyXG5cclxuICBmb3JtQ3Jvc3Mub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3B1cC1zaG93Jyk7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gICAgZm9ybVBzeWNob2xvZy5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbn0iXX0=
