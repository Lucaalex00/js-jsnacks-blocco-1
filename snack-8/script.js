//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
let sum = 0
let fourUserValue = prompt('Digita un numero')
console.log(fourUserValue)
if (fourUserValue.length < 4) {
    console.log('ERROR')
} else if (fourUserValue.length >= 5) {
    console.log('ERROR')
} else {
    console.log(Number(fourUserValue))
}

for (let i = 0; i < fourUserValue.length; i++) {
    const UserValueIndex = fourUserValue[i];
    sum += Number(UserValueIndex);


}
console.log(sum)