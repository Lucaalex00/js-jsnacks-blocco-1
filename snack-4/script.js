//chiedi per 6 volte all'utente di inserire un numero
//se è dispari inseriscilo nell'array


let evenList = []
let i = 0

while (i < 3) {
    let userNumber = parseInt(prompt('inserisci un numero'));
    if (userNumber % 3 === 0) {
        evenList.push(userNumber)
    }
    i++
} console.log(evenList)