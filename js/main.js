// seleziono i miei due elementi che faranno partire alla scelta, la difficoltà del gioco

const selectedGame = document.getElementById("selected-game");
const startGame = document.getElementById("btn-start");
const boxContainer = document.getElementById("box-container");

let bombs = [];

// aggiungo l'event listener che mi permette di selezionare la difficoltà 

startGame.addEventListener("click", function() {
    // in questo modo memorizziamo tramite il metodo value proprio il valore della select che interessa a noi
    const levelGame = selectedGame.value;
    // creo una variabile che mi permette di richiamare la funzione sotto inizializzata 
    const cellS = cellLevel(levelGame);
    // richiamo la funzione che mi permetterà di stabilire quante celle generare
    gridSystem(cellS);

    bombs = bombsSpawn(16, cellS)
})

// creo una funzione che mi seleziona il numero di celle della griglia in base alla difficoltà scelta

function cellLevel (levelGame) {
    let result
    switch (parseInt(levelGame)) {
        case 1:
            result = 100;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 49;
            break;
    }

    return result;
}

// creo poi una funzione che mi permetterà di generare la griglia in base alla difficoltà scelta

function gridSystem (numberOfCells) {
    boxContainer.innerHTML = "";
    const cellSrow = Math.sqrt(numberOfCells)
    const cellSizes = 100 / cellSrow
    for (let i = 0; i < numberOfCells; i++) {
        // creo la singola cella 
        //const cell = `<div class='box' style='width: ${cellSizes}%; height: ${cellSizes}%'></div>`
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.width = cellSizes + "%"
        cell.style.height = cellSizes + "%"
        cell.textContent = i + 1
        cell.addEventListener("click", cellSoneClick)
        // creo la sezione html che inietterò tramite il metodo innerHTML
        boxContainer.append(cell)
        //boxContainer.innerHTML += cell;
    }
}

function cellSoneClick() {
    const currentCell = parseInt(this.textContent)
    if(bombs.includes(currentCell)) {
        this.classList.add("bomb");
    } else {
        this.classList.toggle("clicked");
    }
}