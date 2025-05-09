// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.
const name = 'Luca';
console.log (name); // output Luca

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.
const number = 10;
const text =`Hello`;
const bool = true;

console.log("number:" + ' ' + number); 
console.log("text:" + ' ' + text); 
console.log("bool:" + ' ' + bool); 


// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA 
 

const fullName = 'Jane' + ' ' + 'Smith';
console.log(fullName); // Output: "Jane Smith"


// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = null // NON MODIFICARE QUESTA RIGA
console.log(numberOfLettersInAlphabet); // Output: 26
let a = numberOfLettersInAlphabet;
let b = 26;
console.log( a , b); // Output: 26

let c = a
a = b
b = c