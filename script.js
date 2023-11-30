/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// SELEZIONE degli elementi del DOM: bottone play, timer
const playBtn = document.getElementById("play");
const timerRunning = document.getElementById ("main-timer");


// FUNZIONE che genera numeri random
function genRandomNum (min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}


// FUNZIONE che genera un array di tot numeri random in un dato range
function genArrayRandomNum (arrMin, arrMax, arrLength) {

    // GENERO l'array da riempire
    const arrayToFill = [];

    // RIEMPO l'array con il ciclo while
    while (arrayToFill.length < arrLength) {

        // GENERO un numero random in un range
        let newNumber = genRandomNum(arrMin, arrMax);

        // SE il numero generato non è presente nell'array, lo pusho
        if (!arrayToFill.includes(newNumber)) {
            arrayToFill.push(newNumber);
        }
    }
    return arrayToFill

}


// GENERARE l'array di 5 numeri random tra 1 e 100
const randomNumbers = genArrayRandomNum (1, 100, 5);
console.log(`I numeri da ricordare sono: ${randomNumbers}`);


// DICHIARAZIONE di 3 variabili: partenza del timer di 30 secondi, punteggio e i numeri utente
let timer = 3;
let score = 0;
let userNumber;



// GENERARE un timer di 30 secondi, al terimne del quale i 5 numeri scompaiono
const clock = setInterval(
    function() {
        if (timer === 0) {

            clearInterval(clock);

            alert("Tempo scaduto");

            // i 5 numeri scompaiono, fare con d-none in html e css

            // GENERARE un array contenente SOLO i numeri indovinati dall'utente
            const userArray = [];
            

            // CHIEDERE all'utente i 5 numeri (con ciclo for)
            for (let i = 0; i < 5; i++) {
                
                // PROMPT 
                userNumber = parseInt(prompt("Inserisci un numero"));

                // AGGIUNGERE i numeri all'array solo se presenti nell'array di numeri random
                if (randomNumbers.includes(userNumber)) {
                    userArray.push(userNumber);
                }

            } 
            console.log(userArray);

            if (userArray.length === 5) {
                console.log("Hai vinto");
            } else {
                console.log(`Hai perso. Il tuo punteggio è stato di ${userArray.length} punti.`);
            }

            console.log(`Hai indovinato i seguenti numeri: ${user}`);

        } else {
            timer--
            console.log(timer);
        }
    
    },
    1000
)
