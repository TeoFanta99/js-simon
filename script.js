/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

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



// GENERARE i 5 numeri
const randomNumbers = genArrayRandomNum (1, 100, 5);
console.log(randomNumbers);


// DICHIARARE la variabile di partenza dl timer di 30 secondi
let timer = 30;

// GENERARE un timer di 30 secondi, al terimne del quale i 5 numeri scompaiono
const clock = setInterval(
    function() {
        if (timer === 0) {
            alert("tempo scaduto")
            // i 5 numeri scompaiono, fare con d-none in html e css
        } else {
            // timer--
            // console.log(timer);
        }
    },
    1000   
)


// SELEZIONARE un form nell'html dove l'utnete inserisce i numeri



// COMUNICARE quanti e quali numeri sono stati indovinati



