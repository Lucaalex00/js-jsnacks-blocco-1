//L'utente inserisce due parole in successione, con due prompt.
//il software stampa prima la parola piu cortà, poi la parola piu lunga


let firstWord = prompt('Inserisci una parola');
let secondWord = prompt('Inserisci un altra parola');


if (firstWord.length > secondWord.length) {
    document.writeln(`${firstWord} & ${secondWord}`);
    console.log(firstWord, secondWord);
} else if (secondWord.length > firstWord.length) {
    document.writeln(`${secondWord} & ${firstWord}`);
    console.log(secondWord, firstWord);
} else {
    console.log('PARI')
    document.writeln(`Same Length`);
}

