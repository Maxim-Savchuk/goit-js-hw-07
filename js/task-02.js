const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const makeItemsEl = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;

    return itemEl;
  });
};

const elements = makeItemsEl(ingredients);
listEl.append(...elements);
