const body = document.body;
const btn = document.querySelector('#colorChanger');
const color = document.querySelector('#color');

function generateValue() {
    return Math.floor(Math.random() * 255);
}

function generateOpacity() {
    return Math.random();
}

function generateColor() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(generateValue());
    }
    rgb.push(generateOpacity());
    // console.log(rgb);

    const rgba = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`;
    body.style.backgroundColor = rgba;
    color.textContent = rgba;
    color.style.color = rgba;

}

btn.addEventListener('click', generateColor);