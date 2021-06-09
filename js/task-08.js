const boxes = document.querySelector('#boxes');
const addBox = document.querySelector('[data-action="render"]');
const removeBox = document.querySelector('[data-action="destroy"]');

addBox.addEventListener('click', createBoxes);
removeBox.addEventListener('click', destroyBoxes);
    
function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    
    amount = document.querySelector('#controls input').value;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        let divSize = 30 + i * 10;
        div.style.cssText = `width: ${divSize}px; height: ${divSize}px; background-color: rgba( ${randomizer()} , ${randomizer()} , ${randomizer()} ); `;
        fragment.append(div);
    }
    boxes.append(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

function randomizer() {
    return Math.floor(Math.random() * 255);
}