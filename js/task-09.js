/* Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

const handleClick = (event) => {
  const COLOR = getRandomHexColor();
  document.body.style.backgroundColor = COLOR;
}
button.addEventListener('click', handleClick);