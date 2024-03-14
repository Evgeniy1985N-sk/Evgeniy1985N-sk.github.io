const blocks = document.querySelectorAll('.animated-js');

window.onscroll = function() {

  blocks.forEach(function(item) {

    let coords = getCoords(item);
    let scroll = pageYOffset;
    let screen = document.documentElement.clientHeight;
  
    if (scroll >= coords.top - screen) {
      item.classList.add('start-anim');
    }

    else {
      item.classList.remove('start-anim');
    }

  });

}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset
  }

}