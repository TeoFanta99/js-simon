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



// GENERARE l'array di 5 numeri random tra 1 e 100
const randomNumbers = genArrayRandomNum (1, 100, 5);
console.log(`I numeri da ricordare sono: ${randomNumbers}`);


// DICHIARARE la variabile di partenza dl timer di 30 secondi
let timer = 3;

// GENERARE un timer di 30 secondi, al terimne del quale i 5 numeri scompaiono
const clock = setInterval(
    function() {
        if (timer === 0) {
            alert("tempo scaduto")
            // i 5 numeri scompaiono, fare con d-none in html e css

            // GENERARE un array per i 5 numeri dell'utente
            const userArray = [];
            

            // CHIEDERE all'utente i 5 numeri
            const numeroUno = parseInt(prompt("Inserisci il primo numero"));
            console.log(`Hai inserito il numero: ${numeroUno}`);
            userArray.push(numeroUno);

            const numeroDue = parseInt(prompt("Inserisci il secondo numero"));
            console.log(`Hai inserito il numero: ${numeroDue}`);
            userArray.push(numeroDue);

            const numeroTre = parseInt(prompt("Inserisci il terzo numero"));
            console.log(`Hai inserito il numero: ${numeroTre}`);
            userArray.push(numeroTre);

            const numeroQuattro = parseInt(prompt("Inserisci il quarto numero"));
            console.log(`Hai inserito il numero: ${numeroQuattro}`);
            userArray.push(numeroQuattro);

            const numeroCinque = parseInt(prompt("Inserisci il quinto numero"));
            console.log(`Hai inserito il numero: ${numeroCinque}`);
            userArray.push(numeroCinque);

            clearInterval(timer);
        } else {
            timer--
            console.log(timer);
        }
    },
    1000   
)


// CHECK per verificare la corrispondenza dei numeri inseriti dall'utente con l'array generato



// COMUNICARE quanti e quali numeri sono stati indovinati



