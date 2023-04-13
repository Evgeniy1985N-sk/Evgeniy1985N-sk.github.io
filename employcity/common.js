'use strict';

NiceSelect.bind(document.getElementById('select'));

let i = document.querySelector('.range__input'),
    o = document.querySelector('.range__percent');

o.innerHTML = i.value + '%';

// use 'change' instead to see the difference in response
i.addEventListener('input', function () {
  o.innerHTML = i.value + '%';
}, false);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuTmljZVNlbGVjdC5iaW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSk7XHJcblxyXG5sZXQgaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9faW5wdXQnKSxcclxuICAgIG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX3BlcmNlbnQnKTtcclxuXHJcbm8uaW5uZXJIVE1MID0gaS52YWx1ZSArICclJztcclxuXHJcbi8vIHVzZSAnY2hhbmdlJyBpbnN0ZWFkIHRvIHNlZSB0aGUgZGlmZmVyZW5jZSBpbiByZXNwb25zZVxyXG5pLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gIG8uaW5uZXJIVE1MID0gaS52YWx1ZSArICclJztcclxufSwgZmFsc2UpOyJdfQ==
