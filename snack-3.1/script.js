// il software deve chiedere per 10 volte all'utente di inserire un numero.
// il programma stampa la somma di tutti i numeri inseriti
let i = 0;

//WHILE

/* while (i < 10) {

    const userNumber = prompt('Inserisci il numero')
    console.log(`il numero scelto è  ${userNumber}`)
    i++
}
 */
//FOR

/* for (let i = 0; i < 10; i++) {
    const userNumber = prompt('inserisci il numero')
    console.log(`il numero scelto è  ${userNumber}`)

} */


do {
    const userNumber = prompt('inserisci il numero')
    console.log(`il numero scelto è  ${userNumber}`)
    i++
} while (i < 10)