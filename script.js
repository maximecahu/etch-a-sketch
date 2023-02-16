const container = document.querySelector('#container');
const column = document.querySelector('.column');
let blackOrRgb = 1;
let mouseDown = false

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


window.onload = summonGrid(5, 5);

function summonGrid(n, grid) {
    let gridDimesion = 500 / grid;
    if (isNum(n) === false) {
        refreshPage();
    } else {
        for (let i = 0; i < n; i++) {

            const column = document.createElement('div');
            column.classList.add('column');
            container.appendChild(column);

            for (let j = 0; j < n; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                column.appendChild(cell);
                cell.style.width = gridDimesion + "px";
                cell.style.height = gridDimesion + "px";
                cell.addEventListener('mouseover', () => {

                    if (blackOrRgb === 2 && mouseDown === true) {
                        rgbMode(cell);
                    } else if (blackOrRgb === 1 && mouseDown === true) {
                        cell.classList.remove('cell');
                        cell.classList.add('cell-hovered');
                    } else if (blackOrRgb === 3 && mouseDown === true) {
                        cell.style.backgroundColor = "rgb(255, 255, 255)";
                    }
                });

            }

        }
    }
}

function removeGrid() {

    var elements = document.getElementsByClassName("cell");
    while (elements.length > 0) {
        elements[0].remove();
    }

    var elementBlacks = document.getElementsByClassName("cell-hovered");
    while (elementBlacks.length > 0) {
        elementBlacks[0].remove();
    }

}

function bigSquares() {
    removeGrid()
    summonGrid(3, 3);
}

function mediumSquares() {
    removeGrid()
    summonGrid(25, 25);
}

function smallSquares() {
    removeGrid()
    summonGrid(100, 100);
}

function custom() {
    userInput = prompt("how many rows do you want? maximum: 100x100");
    if (userInput > 100) {
        userInput = prompt("how many rows do you want? maximum: 100x100");
    }
    removeGrid()
    summonGrid(userInput, userInput);
}

function refreshPage() {
    location.reload();
}

function isNum(v) {
    return /\d/.test(v);
}

function rgbMode(e) {
    let red = Math.floor(Math.random() * 128) + 128;
    let green = Math.floor(Math.random() * 128) + 128;
    let blue = Math.floor(Math.random() * 128) + 128;
    e.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function rgbOn() {
    blackOrRgb = 2;
}

function blackOn() {
    blackOrRgb = 1;
}

function eraser() {
    blackOrRgb = 3;
}
