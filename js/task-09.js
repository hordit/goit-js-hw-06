const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', handleClick);

function handleClick(event) {
  const COLOR = getRandomHexColor();
  document.body.style.backgroundColor = COLOR;
  colorSpan.textContent = COLOR;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};