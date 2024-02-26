//Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let i = 0;
let userNumber = Number(prompt('Inserisci il numero'))
//WHILE

/* while (i < 3) {

    const userNumber = prompt('Inserisci il numero')
    let userNumberCube = (userNumber * userNumber * userNumber)
    console.log(`il numero scelto AL CUBO è ${userNumberCube}`)
    i++

} */

//FOR

for (let i = 0; i < userNumber + 1; i++) {
    userNumber -= i
    let userNumberCube = (userNumber * userNumber * userNumber)
    console.log(`il numero scelto AL CUBO di ${userNumber} è ${userNumberCube}`)

}

// DO- WHILE

/* do {
    const userNumber = prompt('Inserisci il numero')
    let userNumberCube = (userNumber * userNumber * userNumber)
    console.log(`il numero scelto AL CUBO è ${userNumberCube}`)
    i++

} while (i < 3) */