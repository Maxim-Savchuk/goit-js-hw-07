const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
  const currentLength = event.currentTarget.value.length;
  const dataLength = Number(input.dataset.length);

  if (currentLength === dataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else if (currentLength !== dataLength) {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}
