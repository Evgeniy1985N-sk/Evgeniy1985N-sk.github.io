const arr = [];
const items = document.querySelector('.items-list');
const buttonMore = document.querySelector('.button-more');

const app = async () => {
  const obj = await fetch('https://jsonplaceholder.typicode.com/photos');
  const result = await obj.json();
  createEl(result);
}
app();

function createEl(arr) {

  function showItems(q) {

    arr.splice(0,q).forEach(function(el) {

      const item = document.createElement('li');
      item.className = "animate-item";
      item.innerHTML = `
        <img src="${el.url}" alt="">
        <span class="title">${el.id}</span>
        <h4 class="title">${el.title}</h4>
      `;
      items.append(item);
    });

  }

  showItems(8);

  buttonMore.onclick = function() {
    showItems(4);
  }
  
}