// DOM element
const container = document.querySelector('.container');

// screen height and width
const height = window.innerHeight;
let width = window.innerWidth;

if (width > 1000) {
    width /= 10;
} else if (width > 100) {
    width /= 10;
}

// hexagons required according to the screen height and width
const numberOfDivVertically = Math.floor((height/100)) + 1;
const numberOfDivHorizontally = Math.round((width/10)) + 1;
const totalDiv = numberOfDivVertically * numberOfDivHorizontally;

// generating div and adding in the DOM.
for (let i = 0; i < totalDiv; i++) {
    const div = document.createElement('div');
    container.append(div);
}