function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pariOrDispari(numero) {

    if (numero % 2 == 0) {
        return "pari";
    }
    else return "dispari";
}
let betUtente = prompt("Scegli pari o dispari");
while (betUtente != "pari" && betUtente != "dispari"){
    betUtente = prompt("Devi scegliere pari o dispari");
}
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = parseInt(prompt("Devi inserire un numero valido da 1 a 5"));
}
let numeroComputer = generaNumeroRandom(1, 5);

let somma = numeroUtente + numeroComputer;

if (pariOrDispari(somma) == betUtente) {
    alert("Hai vinto! Il numero del computer è " + numeroComputer + " e la somma è " + somma);
}
else {
    alert("Hai perso! Il numero del computer è " + numeroComputer + " e la somma è " + somma);
}
