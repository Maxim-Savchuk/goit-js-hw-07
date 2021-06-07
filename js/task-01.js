const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.children.length} категории.`);

const itemEl = document.querySelectorAll('.item');

function categoryEl() {
  itemEl.forEach(elem => {
    console.log('Категория:', elem.firstElementChild.textContent);
    console.log('Количество элементов:', elem.lastElementChild.children.length);
  });
}

categoryEl();
