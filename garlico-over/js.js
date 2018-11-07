var arrowUp = document.getElementById("arrow-up");
window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if(scrolled>50){
    arrowUp.style.display="block";
    }
  if(scrolled<50){
    arrowUp.style.display="none";
    }
}
window.onload = function() {
   var scrolled = window.pageYOffset;
    if(scrolled>50){
    arrowUp.style.display="block";
    }
  if(scrolled<50){
    arrowUp.style.display="none";
    }
}

//--------------smooth scroll--------------------
$(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 999,
         easing: "swing"
      });
      return false;
   });
 
 
});
 // ------------slider--------------

var ulSelect = document.getElementById('ul-s');
var ulSelectLi = ulSelect.getElementsByTagName('li');




// -----------function delete style-------

function deleteStyle() {

  for (var l=0; l<ulSelectLi.length; l++) {

    ulSelectLi[l].style.color = "white";
    ulSelectLi[l].style.borderBottom = "none";

  }

}

// ------function click li-title-------

ulSelectLi[0].onclick = function() {
  deleteStyle();
  position = 0;
  list.style.marginLeft = position + 'px';
  ulSelectLi[0].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[0].style.borderBottom = "6px solid #29b35b";
}    
ulSelectLi[1].onclick = function() {
  deleteStyle();
  position = -1200;
  list.style.marginLeft = position + 'px';
  ulSelectLi[1].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[1].style.borderBottom = "6px solid #29b35b";
}
ulSelectLi[2].onclick = function() {
  deleteStyle();
  position = -2400;
  list.style.marginLeft = position + 'px';
  ulSelectLi[2].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[2].style.borderBottom = "6px solid #29b35b";
}
ulSelectLi[3].onclick = function() {
  deleteStyle();
  position = -3600;
  list.style.marginLeft = position + 'px';
  ulSelectLi[3].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[3].style.borderBottom = "6px solid #29b35b";
}
ulSelectLi[4].onclick = function() {
  deleteStyle();
  position = -4800;
  list.style.marginLeft = position + 'px';
  ulSelectLi[4].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[4].style.borderBottom = "6px solid #29b35b";
}
ulSelectLi[5].onclick = function() {
  deleteStyle();
  k=5;
  position = -6000;
  list.style.marginLeft = position + 'px';
  ulSelectLi[5].style.color = "#29b35b";
  changeImg();
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[5].style.borderBottom = "6px solid #29b35b";
}



var width = 300; 
var count = 4; 


if(document.documentElement.clientWidth < 1320) count=2;
if(document.documentElement.clientWidth < 1125) count=2;
if(document.documentElement.clientWidth < 710) count=1;
if(document.documentElement.clientWidth > 710) count=2;
if(document.documentElement.clientWidth > 1125) count=2;
if(document.documentElement.clientWidth > 1320) count=4;



var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');


var position = 0;


// ----------------сдвиг влево------------------------
var k;

carousel.querySelector('.prev').onclick = function() {

  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';

  changeImg();


  if (position===0  || position===-300  || position===-600 || position===-900) k=1;
  if (position===-1200 || position===-1500 || position===-1800 || position===-2100) k=2;
  if (position===-2400 || position===-2700 || position===-3000 || position===-3300) k=3;
  if (position===-3600 || position===-3900 || position===-4200 || position===-4500) k=4;
  if (position===-4800 || position===-5100 || position===-5400 || position===-5700) k=5;
  if (position===-6000 || position===-6300 || position===-6600 || position===-6900) k=6;


  if (k > 0) {

    if(k===6) return false;

    ulSelectLi[k].style.color = "white";
    ulSelectLi[k].style.borderBottom = "none";

    k -= 1;

    ulSelectLi[k].style.color = "#29b35b";
    if(document.documentElement.clientWidth < 889) return false;
    ulSelectLi[k].style.borderBottom = "6px solid #29b35b";

  }

};


// --------------сдвиг вправо--------------

carousel.querySelector('.next').onclick = function() {

  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';

  changeImg();

  if(position===-1200 || position===-900 || position===-600 || position===-300) k=0;
  if(position===-2400 || position===-2100 || position===-1800 || position===-1500) k=1;
  if(position===-3600 || position===-3300 || position===-3000 || position===-2700) k=2;
  if(position===-4800 || position===-4500 || position===-4200 || position===-3900) k=3;
  if(position===-6000 || position===-5700 || position===-5400 || position===-5100) k=4;


  if (k <= 4) {
    if(position===-600 || position===-900||position===-1800||position===-2100||position===-3000|| position===-3300
      ||position===-4200|| position===-4500||position===-5400|| position===-5700 
      ||position===-300||position===-1500||position===-2700||position===-3900||position===-5100) return false;
    ulSelectLi[k].style.color = "white";
    ulSelectLi[k].style.borderBottom = "none";

    k+=1;
  }

  if(k===6) return false;
  ulSelectLi[k].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[k].style.borderBottom = "6px solid #29b35b";  

};
   

   
// ------------JS-HOVER--------------------------
//906=923

ulSelectLi[0].onmouseover = function() {

  if(position===0 || position===-600) return false;
  ulSelectLi[0].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[0].style.borderBottom = "6px solid #29b35b";
      
    }

ulSelectLi[0].onmouseout = function() {

  if(position===0 || position===-600) return false;
  ulSelectLi[0].style.color = "white";
  ulSelectLi[0].style.borderBottom = "none";
  
}


ulSelectLi[1].onmouseover = function() {
  
  if(position===-1200|| position===-1800) return false;
  ulSelectLi[1].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[1].style.borderBottom = "6px solid #29b35b";
  
}

ulSelectLi[1].onmouseout = function() {
  if(position===-1200|| position===-1800) return false;
  ulSelectLi[1].style.color = "white";
  ulSelectLi[1].style.borderBottom = "none";
  
}


ulSelectLi[2].onmouseover = function() {
  
  if(position===-2400|| position===-3000) return false;
  ulSelectLi[2].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[2].style.borderBottom = "6px solid #29b35b";
  
}

ulSelectLi[2].onmouseout = function() {

  if(position===-2400|| position===-3000) return false;
  ulSelectLi[2].style.color = "white";
  ulSelectLi[2].style.borderBottom = "none";
  
}


ulSelectLi[3].onmouseover = function() {

  if(position===-3600|| position===-4200) return false;
  ulSelectLi[3].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[3].style.borderBottom = "6px solid #29b35b";
  
}

ulSelectLi[3].onmouseout = function() {
  
  if(position===-3600|| position===-4200) return false;
  ulSelectLi[3].style.color = "white";
  ulSelectLi[3].style.borderBottom = "none";
  
}


ulSelectLi[4].onmouseover = function() {

  if(position===-4800|| position===-5400) return false;
  ulSelectLi[4].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[4].style.borderBottom = "6px solid #29b35b";
  
}

ulSelectLi[4].onmouseout = function() {
  if(position===-4800|| position===-5400) return false;
  ulSelectLi[4].style.color = "white";
  ulSelectLi[4].style.borderBottom = "none";
  
}


ulSelectLi[5].onmouseover = function() {

  if(position===-6000|| position===-6600) return false;
  ulSelectLi[5].style.color = "#29b35b";
  if(document.documentElement.clientWidth < 889) return false;
  ulSelectLi[5].style.borderBottom = "6px solid #29b35b";
  
}

ulSelectLi[5].onmouseout = function() {
  if(position===-6000|| position===-6600) return false;
  ulSelectLi[5].style.color = "white";
  ulSelectLi[5].style.borderBottom = "none";
  
}

// -----------SLIDER-MARKRS-----------

var slMarkerGreen = document.getElementById('sl-marker-green');
var slMarkerGray = document.getElementById('sl-marker-gray');
var slMarkerGray2 = document.getElementById('sl-marker-gray2');

function changeImg() {

  if(position>=-2100) {
    
    slMarkerGreen.src = 'images/sl_m-1.png'; //green
    slMarkerGray.src = 'images/sl_m-2.png';  //gray
    slMarkerGray2.src = 'images/sl_m-2.png'; //gray

  }

   if(position<-2100 && position>=-4500) {
    slMarkerGreen.src = 'images/sl_m-2.png'; //gray
    slMarkerGray.src = 'images/sl_m-1.png'; //green
    slMarkerGray2.src = 'images/sl_m-2.png'; //gray

  }
  if(position<-4500&&position>=-6900) {

    slMarkerGreen.src = 'images/sl_m-2.png'; //gray
    slMarkerGray.src = 'images/sl_m-2.png';  //gray
    slMarkerGray2.src = 'images/sl_m-1.png'; //green


  }

}


// ---------modal-window----------


var goodsButton = document.getElementsByClassName('goods__button');

var h5InMw = document.getElementById('h5-in-mw');

for (var i=0; i<goodsButton.length; i++) {
  
  goodsButton[i].onclick = function() {

    if(position===0) h5InMw.innerHTML="Молодой";
    if(position===-1200) h5InMw.innerHTML="Свежий";
    if(position===-2400) h5InMw.innerHTML="Сушеный";
    if(position===-3600) h5InMw.innerHTML="Консервированный";
    if(position===-4800) h5InMw.innerHTML="Стрелка чеснока";
    if(position===-6000) h5InMw.innerHTML="Посадочный материал";
    



  }

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


   