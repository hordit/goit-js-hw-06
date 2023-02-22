/* Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
*/

const refs = {
    inputText: document.getElementById('validation-input'),
    dataLength: document.querySelector('[data-length="6"]'),
}

refs.inputText.addEventListener('blur', () => {
    const text = refs.inputText.value.trim();

    if (text.length === parseInt(refs.dataLength.dataset.length)) {
        refs.inputText.classList.add('valid');
        refs.inputText.classList.remove('invalid');
    } else {
        refs.inputText.classList.add('invalid');
        refs.inputText.classList.remove('valid');
    }
});