const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const btn = document.querySelector('#colorChanger');
const color = document.querySelector('#color');
const hexLength = 6;

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function generateHex() {
    let hexColor = '#';
    for (let i = 0; i < hexLength; i++) {
        hexColor += hex[randomNumber()];
    }

    body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
}

btn.addEventListener('click', generateHex);