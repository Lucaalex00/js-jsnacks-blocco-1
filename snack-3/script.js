//in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa

let invited = ['mario', 'luca', 'giovanni'];
const user = prompt('Come ti chiami ?');
let check = false;

document.writeln('try with mario or luca')

for (let i = 0; i < invited.length; i++) {
    const invitedIndex = invited[i];
    if (user == invitedIndex) {
        check = true;
    }
}
if (check == true) {
    console.log('welcome')
} else {
    console.log('Get out of my territory');
}