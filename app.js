const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#colorChanger');
const body = document.body;
const color = document.querySelector('#color');


function changeColor() {
    const randomNumber = Math.floor(Math.random() * colors.length);

    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
}

btn.addEventListener('click', changeColor);