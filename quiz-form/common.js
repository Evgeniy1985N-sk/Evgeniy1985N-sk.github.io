
// navTabs();
// function navTabs() {

//   const tabNavs = document.querySelectorAll(".nav-tab");
//   const tabPanes = document.querySelectorAll(".tab-pane");

//   for (let i = 0; i < tabNavs.length; i++) {

//     tabNavs[i].addEventListener("click", function(e){
//       const activeTabAttr = e.target.getAttribute("data-tab");
//       for (let j = 0; j < tabNavs.length; j++) {
//         const contentAttr = tabPanes[j].getAttribute("data-tab-content");

//         if (activeTabAttr === contentAttr) {
//           tabNavs[j].classList.add("nav-tab_active");
//           tabPanes[j].classList.add("tab-pane_active"); 
//         } else {
//           tabNavs[j].classList.remove("nav-tab_active");
//           tabPanes[j].classList.remove("tab-pane_active");
//         }
//       };
//     });
//   }

// }


// const slider = new Swiper('.slider', {
//   slidePerView: 'auto',
//   loop: true,
//   speed: 400,
//   observer: true, //for tabs
//   observeParents: true, //for tabs
//   spaceBetween: 100,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     prevEl: '.slider__prev',
//     nextEl: '.slider__next',
//   },
//   pagination: {
//     el: ".slider__pagination",
//     clickable: true,
//   },
// });

// validationForm()
// function validationForm() {

// let form = document.querySelector('.js-form'),
//   formInputs = document.querySelectorAll('.js-input'),
//   inputPhone = document.querySelector('.js-input-phone'),
//   inputCheckbox = document.querySelector('.js-input-checkbox');

// function validatePhone(phone) {
//   let re = /^[0-9\s]*$/;
//   return re.test(String(phone));
// }

// form.onsubmit = function (e) {
//     let 
//         phoneVal = inputPhone.value,
//         emptyInputs = Array.from(formInputs).filter(input => input.value === '');

//     formInputs.forEach(function (input) {
//         if (input.value === '') {
//             input.classList.add('error');

//         } else {
//             input.classList.remove('error');
//         }
//     });

//     if (emptyInputs.length !== 0) {
//         alert('Заполните все поля');
//         return false;
//     }

//     if (!validatePhone(phoneVal)) {
//         alert('Некорректный номер телефона');
//         inputPhone.classList.add('error');
//         return false;
//     } else {
//         inputPhone.classList.remove('error');
//     }

//     if(!inputCheckbox.checked) {
//         inputCheckbox.classList.add('error');
//         return false;
//     } else {
//         inputCheckbox.classList.remove('error')
//     }
//     showModal();
//     e.preventDefault()

//   }
// }


// let modal = document.querySelector('.modal');
// let buttonOrder = document.querySelector('.section__button-order');

// function showModal() {
//   modal.classList.add('modal_visible');
//   setTimeout(function() {
//     modal.classList.remove('modal_visible');
//   }, 1500)
// }

formQuiz();
function formQuiz() {

  const form = document.querySelector('.form');
  const formPsycholog = form.querySelector('#psycholog-for');
  const formWorries = form.querySelector('#my-worries');
  const formAboutSelf = form.querySelector('#about-self');
  const popup = form.querySelector('#popup');

  const buttonSubmit = form.querySelector('.button-js-submit');
  const formCross = form.querySelector('.form__cross');
  const allInputs = form.querySelectorAll('input');

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
        counter2 = (100 - counter);

        const target = e.target;
        const el = e.target.classList;
        const type = e.target.type;

        if (el.contains('input-js')) {

          if (parent.id === "about-self") {

            if (type == 'email') {
              checkEmail();
            }

            if (type == 'checkbox') {
              if (target.checked) {
                console.log(counter)
                console.log(counter2)
                counter += counter2;
                runner.style.width = `${Math.round(counter)}%`;
                percent.innerHTML = `${Math.round(counter)}%`;
                buttonSubmit.classList.remove('button-primary_disabled');
              }
              else {
                counter -= counter2;
                runner.style.width = `${Math.round(counter)}%`;
                percent.innerHTML = `${Math.round(counter)}%`;
                buttonSubmit.classList.remove('button-primary_disabled');
              }
            }

            return;
            
          }

          if(parent.classList.contains('type-radio')) return;

          if (target.checked) {

            counter += Math.round( 100 / forms / inputs );

            runner.style.width = `${Math.round(counter)}%`;
            percent.innerHTML = `${Math.round(counter)}%`;

            buttonNext.classList.remove('button-primary_disabled');

            if(type == 'radio') parent.classList.add('type-radio')
          }

          if (!target.checked) {

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

  checkName();
  function checkName() {
    const inputName = document.querySelector('#name');
    function onInputText() {
      if (inputName.value) {
        inputName.parentElement.classList.remove('label_error');
        inputName.parentElement.classList.add('label_success');
      } else {
        inputName.parentElement.classList.add('label_error');
      }
    }
    inputName.addEventListener('blur', onInputText);
  }

  function checkEmail() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const inputEmail = document.querySelector('#email');
    
    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }

    function onInput() {
      if (isEmailValid(inputEmail.value)) {
        inputEmail.parentElement.classList.remove('label_error');
        inputEmail.parentElement.classList.add('label_success');
      } else {
        inputEmail.parentElement.classList.add('label_error');
      }
    }

    inputEmail.addEventListener('input', onInput);

  }

  checkPhone();
  function checkPhone() {
    const inputPhone = document.getElementById('phone');
    const maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    }
    const mask = new IMask(inputPhone, maskOptions);
    inputPhone.addEventListener("input", phoneInputHandler);

    function phoneInputHandler() {

      if (mask.masked.isComplete) {
        inputPhone.parentElement.classList.remove('label_error');
        inputPhone.parentElement.classList.add('label_success');
      }
      else {
        inputPhone.parentElement.classList.add('label_error');
      }
    }
  }

  const psyholog = new FormQuiz(formPsycholog);
  psyholog.formInteraction();

  const worries = new FormQuiz(formWorries);
  worries.formInteraction();

  const aboutSelf = new FormQuiz(formAboutSelf);
  aboutSelf.formInteraction();

  formCross.onclick = function() {
    popup.classList.add('form__body_hidden');
    formPsycholog.classList.remove('form__body_hidden');
  }

  buttonSubmit.onclick = function() {

    allInputs.forEach(function(item) {

      if (item.classList.contains('label_error')) return;
        console.log(item.classList)

      if(item.type = 'checkbox') {
        if (item.checked) {
          console.log(item.name, item.value);
        }
      }

      if(item.id == 'name') {
        console.log(item.name, item.value);
      }
     
      if(item.id == 'tel') {
        console.log(item.name, item.value);
      }

      if(item.id == 'email') {
        console.log(item.name, item.value);
      }

    })

    popup.classList.remove('form__body_hidden');
    formAboutSelf.classList.add('form__body_hidden');

  }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gbmF2VGFicygpO1xyXG4vLyBmdW5jdGlvbiBuYXZUYWJzKCkge1xyXG5cclxuLy8gICBjb25zdCB0YWJOYXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtdGFiXCIpO1xyXG4vLyAgIGNvbnN0IHRhYlBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItcGFuZVwiKTtcclxuXHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJOYXZzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4vLyAgICAgdGFiTmF2c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbi8vICAgICAgIGNvbnN0IGFjdGl2ZVRhYkF0dHIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiKTtcclxuLy8gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJOYXZzLmxlbmd0aDsgaisrKSB7XHJcbi8vICAgICAgICAgY29uc3QgY29udGVudEF0dHIgPSB0YWJQYW5lc1tqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYi1jb250ZW50XCIpO1xyXG5cclxuLy8gICAgICAgICBpZiAoYWN0aXZlVGFiQXR0ciA9PT0gY29udGVudEF0dHIpIHtcclxuLy8gICAgICAgICAgIHRhYk5hdnNbal0uY2xhc3NMaXN0LmFkZChcIm5hdi10YWJfYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgICAgdGFiUGFuZXNbal0uY2xhc3NMaXN0LmFkZChcInRhYi1wYW5lX2FjdGl2ZVwiKTsgXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgIHRhYk5hdnNbal0uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi10YWJfYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgICAgdGFiUGFuZXNbal0uY2xhc3NMaXN0LnJlbW92ZShcInRhYi1wYW5lX2FjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH07XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gY29uc3Qgc2xpZGVyID0gbmV3IFN3aXBlcignLnNsaWRlcicsIHtcclxuLy8gICBzbGlkZVBlclZpZXc6ICdhdXRvJyxcclxuLy8gICBsb29wOiB0cnVlLFxyXG4vLyAgIHNwZWVkOiA0MDAsXHJcbi8vICAgb2JzZXJ2ZXI6IHRydWUsIC8vZm9yIHRhYnNcclxuLy8gICBvYnNlcnZlUGFyZW50czogdHJ1ZSwgLy9mb3IgdGFic1xyXG4vLyAgIHNwYWNlQmV0d2VlbjogMTAwLFxyXG4vLyAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4vLyAgIGZhZGVFZmZlY3Q6IHtcclxuLy8gICAgIGNyb3NzRmFkZTogdHJ1ZVxyXG4vLyAgIH0sXHJcbi8vICAgbmF2aWdhdGlvbjoge1xyXG4vLyAgICAgcHJldkVsOiAnLnNsaWRlcl9fcHJldicsXHJcbi8vICAgICBuZXh0RWw6ICcuc2xpZGVyX19uZXh0JyxcclxuLy8gICB9LFxyXG4vLyAgIHBhZ2luYXRpb246IHtcclxuLy8gICAgIGVsOiBcIi5zbGlkZXJfX3BhZ2luYXRpb25cIixcclxuLy8gICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuLy8gICB9LFxyXG4vLyB9KTtcclxuXHJcbi8vIHZhbGlkYXRpb25Gb3JtKClcclxuLy8gZnVuY3Rpb24gdmFsaWRhdGlvbkZvcm0oKSB7XHJcblxyXG4vLyBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyksXHJcbi8vICAgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1pbnB1dCcpLFxyXG4vLyAgIGlucHV0UGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaW5wdXQtcGhvbmUnKSxcclxuLy8gICBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWlucHV0LWNoZWNrYm94Jyk7XHJcblxyXG4vLyBmdW5jdGlvbiB2YWxpZGF0ZVBob25lKHBob25lKSB7XHJcbi8vICAgbGV0IHJlID0gL15bMC05XFxzXSokLztcclxuLy8gICByZXR1cm4gcmUudGVzdChTdHJpbmcocGhvbmUpKTtcclxuLy8gfVxyXG5cclxuLy8gZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBsZXQgXHJcbi8vICAgICAgICAgcGhvbmVWYWwgPSBpbnB1dFBob25lLnZhbHVlLFxyXG4vLyAgICAgICAgIGVtcHR5SW5wdXRzID0gQXJyYXkuZnJvbShmb3JtSW5wdXRzKS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQudmFsdWUgPT09ICcnKTtcclxuXHJcbi8vICAgICBmb3JtSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbi8vICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG5cclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGlmIChlbXB0eUlucHV0cy5sZW5ndGggIT09IDApIHtcclxuLy8gICAgICAgICBhbGVydCgn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjycpO1xyXG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpZiAoIXZhbGlkYXRlUGhvbmUocGhvbmVWYWwpKSB7XHJcbi8vICAgICAgICAgYWxlcnQoJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnKTtcclxuLy8gICAgICAgICBpbnB1dFBob25lLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBpbnB1dFBob25lLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaWYoIWlucHV0Q2hlY2tib3guY2hlY2tlZCkge1xyXG4vLyAgICAgICAgIGlucHV0Q2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGlucHV0Q2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc2hvd01vZGFsKCk7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbi8vIGxldCBidXR0b25PcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19idXR0b24tb3JkZXInKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcclxuLy8gICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbF92aXNpYmxlJyk7XHJcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX3Zpc2libGUnKTtcclxuLy8gICB9LCAxNTAwKVxyXG4vLyB9XHJcblxyXG5mb3JtUXVpeigpO1xyXG5mdW5jdGlvbiBmb3JtUXVpeigpIHtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgY29uc3QgZm9ybVBzeWNob2xvZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3BzeWNob2xvZy1mb3InKTtcclxuICBjb25zdCBmb3JtV29ycmllcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI215LXdvcnJpZXMnKTtcclxuICBjb25zdCBmb3JtQWJvdXRTZWxmID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtc2VsZicpO1xyXG4gIGNvbnN0IHBvcHVwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcG9wdXAnKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWpzLXN1Ym1pdCcpO1xyXG4gIGNvbnN0IGZvcm1Dcm9zcyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX2Nyb3NzJyk7XHJcbiAgY29uc3QgYWxsSW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcbiAgbGV0IGNvdW50ZXIyID0gMDtcclxuXHJcbiAgY2xhc3MgRm9ybVF1aXoge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcclxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtSW50ZXJhY3Rpb24oKSB7XHJcblxyXG4gICAgICBjb25zdCBydW5uZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBidXR0b25OZXh0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tanMtbmV4dCcpO1xyXG5cclxuICAgICAgY29uc3QgcHJldkZvcm0gPSB0aGlzLmZvcm0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgY29uc3QgbmV4dEZvcm0gPSB0aGlzLmZvcm0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBjb25zdCBuZXh0UnVubmVyID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgIGNvbnN0IG5leHRQZXJjZW50ID0gbmV4dEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZm9fX3ZhbHVlJyk7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tanMnKS5sZW5ndGg7XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmZvcm07XHJcblxyXG4gICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY291bnRlcjIgPSAoMTAwIC0gY291bnRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC50eXBlO1xyXG5cclxuICAgICAgICBpZiAoZWwuY29udGFpbnMoJ2lucHV0LWpzJykpIHtcclxuXHJcbiAgICAgICAgICBpZiAocGFyZW50LmlkID09PSBcImFib3V0LXNlbGZcIikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICAgIGNoZWNrRW1haWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXIyKVxyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSBjb3VudGVyMjtcclxuICAgICAgICAgICAgICAgIHJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgICAgICBidXR0b25TdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyIC09IGNvdW50ZXIyO1xyXG4gICAgICAgICAgICAgICAgcnVubmVyLnN0eWxlLndpZHRoID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tcHJpbWFyeV9kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZihwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0eXBlLXJhZGlvJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gTWF0aC5yb3VuZCggMTAwIC8gZm9ybXMgLyBpbnB1dHMgKTtcclxuXHJcbiAgICAgICAgICAgIHJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXByaW1hcnlfZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3JhZGlvJykgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3R5cGUtcmFkaW8nKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgLT0gTWF0aC5yb3VuZCggMTAwIC8gZm9ybXMgLyBpbnB1dHMgKTtcclxuXHJcbiAgICAgICAgICAgIHJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChjb3VudGVyKX0lYDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWwuY29udGFpbnMoJ2J1dHRvbi1qcy1uZXh0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fYm9keV9oaWRkZW4nKTtcclxuICAgICAgICAgIG5leHRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgbmV4dFJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICBuZXh0UGVyY2VudC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLmNvbnRhaW5zKCdidXR0b24tanMtcHJldicpKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2UnVubmVyID0gcHJldkZvcm0ucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWluZGljYXRvcl9fcnVubmVyJyk7XHJcbiAgICAgICAgICBjb25zdCBwcmV2UGVyY2VudCA9IHByZXZGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pbmZvX192YWx1ZScpO1xyXG5cclxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fYm9keV9oaWRkZW4nKTtcclxuICAgICAgICAgIHByZXZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fX2JvZHlfaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgcHJldlJ1bm5lci5zdHlsZS53aWR0aCA9IGAke01hdGgucm91bmQoY291bnRlcil9JWA7XHJcbiAgICAgICAgICBwcmV2UGVyY2VudC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKGNvdW50ZXIpfSVgO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tOYW1lKCk7XHJcbiAgZnVuY3Rpb24gY2hlY2tOYW1lKCkge1xyXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGZ1bmN0aW9uIG9uSW5wdXRUZXh0KCkge1xyXG4gICAgICBpZiAoaW5wdXROYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgICBpbnB1dE5hbWUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbF9zdWNjZXNzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbklucHV0VGV4dCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0VtYWlsKCkge1xyXG4gICAgY29uc3QgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rXFwuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17Mix9KSQvaXU7XHJcbiAgICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGlzRW1haWxWYWxpZCh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uSW5wdXQoKSB7XHJcbiAgICAgIGlmIChpc0VtYWlsVmFsaWQoaW5wdXRFbWFpbC52YWx1ZSkpIHtcclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgICBpbnB1dEVtYWlsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfc3VjY2VzcycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0RW1haWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYWJlbF9lcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQpO1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrUGhvbmUoKTtcclxuICBmdW5jdGlvbiBjaGVja1Bob25lKCkge1xyXG4gICAgY29uc3QgaW5wdXRQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xyXG4gICAgY29uc3QgbWFza09wdGlvbnMgPSB7XHJcbiAgICAgICAgbWFzazogJys3KDAwMCkwMDAtMDAtMDAnLFxyXG4gICAgICAgIGxhenk6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXNrID0gbmV3IElNYXNrKGlucHV0UGhvbmUsIG1hc2tPcHRpb25zKTtcclxuICAgIGlucHV0UGhvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHBob25lSW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwaG9uZUlucHV0SGFuZGxlcigpIHtcclxuXHJcbiAgICAgIGlmIChtYXNrLm1hc2tlZC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgaW5wdXRQaG9uZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsX2Vycm9yJyk7XHJcbiAgICAgICAgaW5wdXRQaG9uZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhYmVsX3N1Y2Nlc3MnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFiZWxfZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHN5aG9sb2cgPSBuZXcgRm9ybVF1aXooZm9ybVBzeWNob2xvZyk7XHJcbiAgcHN5aG9sb2cuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGNvbnN0IHdvcnJpZXMgPSBuZXcgRm9ybVF1aXooZm9ybVdvcnJpZXMpO1xyXG4gIHdvcnJpZXMuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGFib3V0U2VsZiA9IG5ldyBGb3JtUXVpeihmb3JtQWJvdXRTZWxmKTtcclxuICBhYm91dFNlbGYuZm9ybUludGVyYWN0aW9uKCk7XHJcblxyXG4gIGZvcm1Dcm9zcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gICAgZm9ybVBzeWNob2xvZy5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uU3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBhbGxJbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblxyXG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2xhYmVsX2Vycm9yJykpIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmNsYXNzTGlzdClcclxuXHJcbiAgICAgIGlmKGl0ZW0udHlwZSA9ICdjaGVja2JveCcpIHtcclxuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoaXRlbS5pZCA9PSAnbmFtZScpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIGlmKGl0ZW0uaWQgPT0gJ3RlbCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihpdGVtLmlkID09ICdlbWFpbCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG4gICAgZm9ybUFib3V0U2VsZi5jbGFzc0xpc3QuYWRkKCdmb3JtX19ib2R5X2hpZGRlbicpO1xyXG5cclxuICB9XHJcblxyXG59Il19
