//L'utente inserisce due numeri in successione, con due prompt.
//il software stampa il maggiore.

let numberOne = prompt('Inserisci un numero');
Number(numberOne);
let numberTwo = prompt('Inserisci un altro numero');
Number(numberTwo);


if (numberOne > numberTwo) {
    document.writeln(`Il Primo numero è maggiore (${numberOne})`);
    console.log(numberOne)
} else if (numberOne < numberTwo) {
    document.writeln(`Il Secondo numero è maggiore (${numberTwo})`);
    console.log(numberTwo)
} else {
    console.log('PARI')
    document.writeln(`Il Primo numero (${numberOne}) è uguale al secondo numero (${numberTwo})`);
}

