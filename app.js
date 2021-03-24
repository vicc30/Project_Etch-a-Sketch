'use strict'

// Document selectors
let container = document.querySelector('#container');
let getCell = document.getElementsByClassName("inside");

//Initial size 16*16
let column = 16;
let row = 16;
let options = "";

function buttonReset() { //function that shows if reset button is clicked
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener("click", function () {
        let options = window.prompt("how many squares per side to make the new sketch?", 16);
        if (options > 7 && options < 121) { //checks if selections is betweem 8 and 120
            container.innerHTML = '';
            createGrid(options, options);
            selectCell();
        } else {
            window.alert("incorrect selection, please try again!");
            options = 16;
            container.innerHTML = '';
            createGrid(options, options);
            selectCell();
        }
    });
}

//function that selects a cell with getCell variable
function selectCell() {
    for (var x = 0; x < getCell.length; x++) {
        getCell[x].onmouseover = function () {
            this.classList.add('playing');
        }
    }
}

function createGrid(row, column) {
    let newRow = row;
    let newColumn = column;
    let cell = newColumn * newRow;
    container.style.setProperty("--row-size", newRow);
    container.style.setProperty("--column-size", newColumn);
    for (let total = 0; total < cell; total++) {
        let creation = document.createElement("div");
        creation.setAttribute("class", "inside");
        container.appendChild(creation);
    }
}

// Initialize functions
createGrid(row,column);
selectCell();
buttonReset();
