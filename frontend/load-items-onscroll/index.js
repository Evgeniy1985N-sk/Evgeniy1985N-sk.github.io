const arr = [];
const items = document.querySelector('.items-list');
const loader = document.querySelector('.loader');

async function app() {
  const obj = await fetch('https://jsonplaceholder.typicode.com/albums');
  const result = await obj.json();
  createEl(result);
}
app();

function createEl(arr) {

  function showItems(q) {

    arr.splice(0,q).forEach(function(el, i, array) {

      if (arr.length === 0) return false;

      const item = document.createElement('li');
      item.className = "animate-item";
      item.innerHTML = `
        <span class="title">${el.id}</span>
        <h4 class="title">${el.title}</h4>
      `;
      items.append(item);
    });

  }

  showItems(12);

  window.onscroll = function() {

    const coords = loader.getBoundingClientRect().top + pageYOffset;
    const scroll = window.pageYOffset;
    const screen = document.documentElement.clientHeight;

    if (scroll >= coords - screen + 150) {
      setTimeout(showItems(4), 1000)
    }

    else {
      loader.remove();
    }

  }
  
}