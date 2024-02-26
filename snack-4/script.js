//chiedi per 6 volte all'utente di inserire un numero
//se è dispari inseriscilo nell'array


let evenList = []
let i = 0


/* //WHILE
while (i < 3) {
    let userNumber = parseInt(prompt('inserisci un numero'));
    if (userNumber % 3 === 0) { //divisibile per dispari
        evenList.push(userNumber)
    }
    i++
} console.log(evenList)

 */
//FOR
for (let i = 0; i < 3; i++) {
    let userNumber = parseInt(prompt('inserisci un numero'));

    if (userNumber % 3 === 0) { //divisibile per dispari
        evenList.push(userNumber)
    }
}

console.log(`[${evenList}] ciclo for`)