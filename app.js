
let container = document.querySelector('#container');
let getCell = document.getElementsByClassName("inside");
let column = 16;
let row = 16;
let options = "";

createGrid(row,column);
selectCell();
buttonReset();


function buttonReset(){ //function that shows if reset button is clicked
    let resetButton=document.getElementById('reset');
    resetButton.addEventListener("click", function(){
    let options = window.prompt("how many squares per side to make the new sketch?",16);
    if (options>7 && options<121){ //checks if selections is betweem 8 and 120
    container.innerHTML='';
    createGrid(options,options);
    selectCell();
    } else {
        window.alert("incorrect selection, please try again!");
        options = 16;
        container.innerHTML='';
        createGrid(options,options);
        selectCell(); 
    }
    });
}



function selectCell(){ //function that selects a cell with getCell variable

for(var x=0; x<getCell.length; x++){
    
    getCell[x].onmouseover= function(){
        this.classList.add('playing'); //Add CSS rule playing
    }
}
}


function createGrid (row,column){ //creates with CSS a Grid sized 'row' x 'column'
    let newRow=row;
    let newColumn=column;
    let cell = newColumn*newRow;
    console.log(row);
    console.log(column);
    container.style.setProperty("--row-size",newRow);
    container.style.setProperty("--column-size",newColumn);
        for (let total = 0; total<cell; total++ ){
        let creation = document.createElement("div");//creates a div element in each cell
        creation.setAttribute("class","inside"); //gives the class inside to all new div elements for CSS rules.
        container.appendChild(creation); 
        } 
}



