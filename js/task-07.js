const refs = {
    input: document.getElementById('font-size-control'),
    changeSizeText: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.changeSizeText.style.fontSize = `${refs.input.value}px`;
};
