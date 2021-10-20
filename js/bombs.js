
const numCells = 81;

// creo una funzione che mi permetterà di generare un numero determinato di bombe
function bombsSpawn (bombsNum, numMaxRand) {
// genero un'array vuoto che conterrà i miei numeri random
const bombsArray = [];

// creo il ciclo per i miei 16 numeri random 
    while (bombsArray.length < 16) {
        const newBombs = generateRandomNum(1, numMaxRand);
        // bombsArray.push(bombs)

        let numbExist = bombsArray.includes(newBombs);
// creo il ciclo che mi permette di cercare nell'array delle bombe se esiste un doppione
        /*for (let j = 0; j < bombsArray.length; j++) {
            const bombExist = bombsArray[j];
            if (bombExist === newBombs) {
                numbExist = true;
            }
        }
        */
        // creo poi una condizione che mi indichi se un numero generato dal ciclo e dal random sia uguale con un altro 
        if(!numbExist) {
            bombsArray.push(newBombs)
        } else {
            // se non esiste il doppione la funzione non necessita di alcun indice per decrementare l'array, grazie al length
        }
    }
    
    return bombsArray
}

bombsSpawn(16, numCells)



function generateRandomNum(minNumber = 1, maxNumber = 10) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  
    return numRandom;
}