const controlSizeLine = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlSizeLine.addEventListener('input', onInputChange);

function onInputChange() {
  const size = controlSizeLine.value;
  textEl.style.fontSize = size + 'px';
}
