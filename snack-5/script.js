//Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let i = 0;
//WHILE

while (i < 3) {

    const userNumber = prompt('Inserisci il numero')
    let userNumberCube = (userNumber * userNumber * userNumber)
    console.log(`il numero scelto AL CUBO è ${userNumberCube}`)
    i++

}

//FOR

/* for (let i = 0; i < 10; i++) {
    const userNumber = prompt('inserisci il numero')
    console.log(`il numero scelto è  ${userNumber}`)

} */


// DO- WHILE

/* do {
    let userNumber = parseInt(prompt('inserisci il numero'))
    console.log(`il numero scelto è  ${userNumber}`)
    i++
    sum += userNumber
} while (i < 10)

console.log(sum) */