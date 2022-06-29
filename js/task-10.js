const mainBlock = document.querySelector('#boxes')
mainBlock.style.marginTop = "10px"
const createBlockButton = document.querySelector('[data-create]');
const destroyAllButton = document.querySelector('[data-destroy]');

const inputEl = document.querySelector("#controls input");

function buildBlocks () {
  const newBlocks = []
  for (let i = 0; i < inputEl.value; i += 1) {
    const newBlock = document.createElement("div")
    const colorName = getRandomHexColor();
    newBlock.style.backgroundColor = colorName;

    newBlock.style.border = "2px solid black";
    newBlock.style.marginBottom = "10px";
    newBlock.style.marginRight = "10px";

    const size = 30 + i * 10;
    newBlock.style.height = `${size}px`;
    newBlock.style.width = `${size}px`;
    
    newBlocks.push(newBlock);
  }
  mainBlock.append(...newBlocks);
}
function clearFieldInput () {
  inputEl.value = "";
}
function destroyBlocks() {
  mainBlock.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
createBlockButton.addEventListener("click", buildBlocks);
destroyAllButton.addEventListener("click", destroyBlocks);
createBlockButton.addEventListener("click", clearFieldInput);