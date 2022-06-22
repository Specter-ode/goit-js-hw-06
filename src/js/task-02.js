const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


const elements = ingredients.map(option => {
const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = option;
console.log(itemEl.textContent);
return itemEl;
});

listEl.append(...elements);