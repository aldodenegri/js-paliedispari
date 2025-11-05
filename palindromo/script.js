let stringaUtente = prompt("Inserisci una parola");

if (isPalindromo(stringaUtente)) {
    alert("La parola è palindroma");
}
else {
    alert("La parola non è palindroma");
}
//soluzione ultra compatta trovata su internet
/*function isPalindromoCompatto(stringa) { 
    stringa = stringa.toLowerCase().replace(/\s/g, ''); //normalizzo la stringa rimuovendo tutti i tipi di spazio(tab,spazio...), sostituendoli con ''(niente) e maiuscole=> Anna != anna
    return stringa === stringa.split('').reverse().join(''); //split divide la stringa in un array di caratteri, reverse inverte l'array, join unisce l'array in una stringa restituendo true o false, ricorda che reverse e join si possono fare solo su array
 }*/
function isPalindromo(stringa) {
    tringa = stringa.toLowerCase().trim();//normalizzo la stringa rimuovendo spazi e maiuscole=> Anna != anna
    let stringaInvertita = "";
    for (let i = stringa.length - 1; i >= 0; i--) {//ricorda che stringa.length restituisce la lunghezza della stringa e non l'indice dell'ultimo carattere
        stringaInvertita += stringa[i];
    }
    console.log(stringa);
    console.log(stringaInvertita);
    return stringa === stringaInvertita;

}

