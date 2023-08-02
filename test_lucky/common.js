
navTabs();
function navTabs() {

  const tabNavs = document.querySelectorAll(".nav-tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  for (let i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e){
      const activeTabAttr = e.target.getAttribute("data-tab");
      for (let j = 0; j < tabNavs.length; j++) {
        const contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("nav-tab_active");
          tabPanes[j].classList.add("tab-pane_active"); 
        } else {
          tabNavs[j].classList.remove("nav-tab_active");
          tabPanes[j].classList.remove("tab-pane_active");
        }
      };
    });
  }

}


const slider = new Swiper('.slider', {
  slidePerView: 'auto',
  loop: true,
  speed: 400,
  observer: true, //for tabs
  observeParents: true, //for tabs
  spaceBetween: 100,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    prevEl: '.slider__prev',
    nextEl: '.slider__next',
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
});

validationForm()
function validationForm() {

let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputPhone = document.querySelector('.js-input-phone'),
  inputCheckbox = document.querySelector('.js-input-checkbox');

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function (e) {
    let 
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        alert('Заполните все поля');
        return false;
    }

    if (!validatePhone(phoneVal)) {
        alert('Некорректный номер телефона');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    if(!inputCheckbox.checked) {
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error')
    }
    showModal();
    e.preventDefault()

  }
}


let modal = document.querySelector('.modal');
let buttonOrder = document.querySelector('.section__button-order');

function showModal() {
  modal.classList.add('modal_visible');
  setTimeout(function() {
    modal.classList.remove('modal_visible');
  }, 1500)
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXZUYWJzKCk7XHJcbmZ1bmN0aW9uIG5hdlRhYnMoKSB7XHJcblxyXG4gIGNvbnN0IHRhYk5hdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi10YWJcIik7XHJcbiAgY29uc3QgdGFiUGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYi1wYW5lXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYk5hdnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB0YWJOYXZzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc3QgYWN0aXZlVGFiQXR0ciA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhYk5hdnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBjb250ZW50QXR0ciA9IHRhYlBhbmVzW2pdLmdldEF0dHJpYnV0ZShcImRhdGEtdGFiLWNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVUYWJBdHRyID09PSBjb250ZW50QXR0cikge1xyXG4gICAgICAgICAgdGFiTmF2c1tqXS5jbGFzc0xpc3QuYWRkKFwibmF2LXRhYl9hY3RpdmVcIik7XHJcbiAgICAgICAgICB0YWJQYW5lc1tqXS5jbGFzc0xpc3QuYWRkKFwidGFiLXBhbmVfYWN0aXZlXCIpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFiTmF2c1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXRhYl9hY3RpdmVcIik7XHJcbiAgICAgICAgICB0YWJQYW5lc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwidGFiLXBhbmVfYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzbGlkZXIgPSBuZXcgU3dpcGVyKCcuc2xpZGVyJywge1xyXG4gIHNsaWRlUGVyVmlldzogJ2F1dG8nLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BlZWQ6IDQwMCxcclxuICBvYnNlcnZlcjogdHJ1ZSwgLy9mb3IgdGFic1xyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLCAvL2ZvciB0YWJzXHJcbiAgc3BhY2VCZXR3ZWVuOiAxMDAsXHJcbiAgZWZmZWN0OiAnZmFkZScsXHJcbiAgZmFkZUVmZmVjdDoge1xyXG4gICAgY3Jvc3NGYWRlOiB0cnVlXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBwcmV2RWw6ICcuc2xpZGVyX19wcmV2JyxcclxuICAgIG5leHRFbDogJy5zbGlkZXJfX25leHQnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLnNsaWRlcl9fcGFnaW5hdGlvblwiLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudmFsaWRhdGlvbkZvcm0oKVxyXG5mdW5jdGlvbiB2YWxpZGF0aW9uRm9ybSgpIHtcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0nKSxcclxuICBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWlucHV0JyksXHJcbiAgaW5wdXRQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbnB1dC1waG9uZScpLFxyXG4gIGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaW5wdXQtY2hlY2tib3gnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGhvbmUocGhvbmUpIHtcclxuICBsZXQgcmUgPSAvXlswLTlcXHNdKiQvO1xyXG4gIHJldHVybiByZS50ZXN0KFN0cmluZyhwaG9uZSkpO1xyXG59XHJcblxyXG5mb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCBcclxuICAgICAgICBwaG9uZVZhbCA9IGlucHV0UGhvbmUudmFsdWUsXHJcbiAgICAgICAgZW1wdHlJbnB1dHMgPSBBcnJheS5mcm9tKGZvcm1JbnB1dHMpLmZpbHRlcihpbnB1dCA9PiBpbnB1dC52YWx1ZSA9PT0gJycpO1xyXG5cclxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVtcHR5SW5wdXRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KCfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsaWRhdGVQaG9uZShwaG9uZVZhbCkpIHtcclxuICAgICAgICBhbGVydCgn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcpO1xyXG4gICAgICAgIGlucHV0UGhvbmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0UGhvbmUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighaW5wdXRDaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgaW5wdXRDaGVja2JveC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRDaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpXHJcbiAgICB9XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxubGV0IGJ1dHRvbk9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2J1dHRvbi1vcmRlcicpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX3Zpc2libGUnKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfdmlzaWJsZScpO1xyXG4gIH0sIDE1MDApXHJcbn0iXX0=
