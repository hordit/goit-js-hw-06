const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = counter.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

const incrementBtn = counter.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});


