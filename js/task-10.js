/* Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/


const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onClickCreateBtn);
refs.destroyBtn.addEventListener('click', onClickDestroyBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  onClickDestroyBtn();

  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    refs.boxes.appendChild(box);
    sizeBox += 10;
  }
}

function onClickDestroyBtn(event) {
  refs.boxes.innerHTML = '';
}

function onClickCreateBtn(event) {
  const amount = refs.input.value;
  createBoxes(amount);
}





