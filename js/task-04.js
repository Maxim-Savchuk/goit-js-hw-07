const counterNumber = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterNumber.textContent = --counterValue;
}

function increment() {
  counterNumber.textContent = ++counterValue;
}
