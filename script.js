const container = document.querySelector('#container');
const column = document.querySelector('.column');

let grid = prompt("how many rows do you want?");
if (isNum(grid) === false) {
    refreshPage();
} else {

    for (let i = 0; i < grid; i++) {

        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);

        for (let j = 0; j < grid; j++) {



            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);

            cell.addEventListener('mouseover', () => {
                cell.classList.remove('cell');
                cell.classList.add('cell-hovered');
            });

        }

    }
}

function clear() {
    cell.classList.remove('cell-hovered');
    cell.classList.add('cell');
}

function refreshPage() {
    location.reload();
}

function isNum(v) {
    return /\d/.test(v);
}
