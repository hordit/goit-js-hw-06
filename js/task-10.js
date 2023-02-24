const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onClickCreateBtn);
refs.destroyBtn.addEventListener('click', onClickDestroyBtn);

let boxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox() {
  const box = `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${getRandomHexColor()}"></div>`;
  refs.boxesContainer.insertAdjacentHTML('beforeend', box);
  boxSize += 10;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    createBox();
  }
}

function onClickCreateBtn() {
  const amount = refs.input.value;
  createBoxes(amount);
}

function onClickDestroyBtn() {
  while (refs.boxesContainer.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
