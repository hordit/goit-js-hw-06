/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

const refs = {
    input: document.getElementById('font-size-control'),
    changeSizeText: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.changeSizeText.style.fontSize = `${refs.input.value}px`;
};
