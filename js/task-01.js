const listEl = document.querySelector('#categories');
const titleEl = document.querySelectorAll("h2");
const itemEl = document.querySelectorAll('.item');

console.log('Number of categories :', listEl.children.length);

const groups = listEl.children

for (const group of groups) {
    console.log('Category :',group.children[0].textContent)
    console.log('Elements :',group.children[1].children.length)
}





// const firstItemNameInlist = itemEl[0].querySelectorAll("li")
// console.log('Category :',titleEl[0].textContent);
// console.log('Elements :', firstItemNameInlist.length);

// const secondTtemNameInlist = itemEl[1].querySelectorAll("li");
// console.log('Category :',titleEl[1].textContent);
// console.log('Elements :', secondTtemNameInlist.length);

// const thirdItemNameInlist = itemEl[2].querySelectorAll("li");
// console.log('Category :',titleEl[2].textContent);
// console.log('Elements :', thirdItemNameInlist.length);
