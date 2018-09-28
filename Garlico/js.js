 // var lis = document.getElementsByTagName('li');
 //    for (var i = 0; i < lis.length; i++) {
 //      lis[i].style.position = 'relative';
 //      var span = document.createElement('span');
 //      // обычно лучше использовать CSS-классы,
 //      // но этот код - для удобства разработки, так что не будем трогать стили
 //      span.style.cssText = 'position:absolute;left:0;top:0';
 //      span.innerHTML = i + 1;
 //      lis[i].appendChild(span);
 //    }
    /* конфигурация */
    var width = 300; // ширина изображения
    var count = 4; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };


var modalWindow = document.getElementById('modal__window');
var modalWindowBg = document.getElementById('modal-window-bg');
var modalWindowButtonClose = document.getElementById('modal-window__button-close');
var goodsButton = document.getElementsByClassName('goods__button');

for (var i=0; i<goodsButton.length; i++) {
  
  goodsButton[i].onclick = function() {
    
    modalWindow.style.display = 'flex';
    modalWindowBg.style.display = 'block';
  }

}

modalWindowBg.onclick = function() {
    modalWindow.style.display = 'none';
    modalWindowBg.style.display = 'none';
}

modalWindowButtonClose.onclick = function() {
    modalWindow.style.display = 'none';
    modalWindowBg.style.display = 'none';
}

// -----------map-------------------

ymaps.ready(init);


function init() {

  var map = new ymaps.Map('map', {
  center: [50.467305, 30.515528],
  zoom: 11,
  controls: ['zoomControl'],
  behaviors: ['drag']

});

var placemark = new ymaps.Placemark([50.467305, 30.515528], {

}, {

  iconLayout: 'default#image',
  iconImageHref: 'SVG files/map-marker.svg'

  });

    map.geoObjects.add(placemark);

}


   