const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

function getRandomHexColor() {
  const colorName = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyEl.style.backgroundColor = colorName;
  textEl.textContent = colorName;
}

btnEl.addEventListener("click",getRandomHexColor)


