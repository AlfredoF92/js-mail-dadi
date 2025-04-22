/*
____________Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!

____________Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

____________Consigli del giorno
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento! :slightly_smiling_face

*/

/* ____________ MAIL  */
console.log("############### CONTROLLA SE L'EMAIL E' VALIDA ###############");
emailAdmins = ['alfredo@gmail.com', 'simone@gmail.com', 'marco@gmail.com', 'laura@gmail.com'];
emailUtente = 'alfredo@gmail.com';
console.log(emailUtente);

let emailValida = false
for(i=0; i<emailAdmins.length; i++){
    if(emailUtente === emailAdmins[i]){
        emailValida = true;
        console.log("Email valida: ", emailUtente, " può accedere!");
    }
}

if(emailValida === false){
    console.log("Email non valida: ", emailUtente, " non può accedere!");
}

/* ____________ GIOCO DEI DADI  */
// Genera un numero random da 1 a 6 per il giocatore e per il computer
// Stabilire il vincitore in base a chi fa il punteggio più alto
// Se il punteggio è uguale, il risultato è un pareggio

console.log("############### GIOCO DEI DADI ###############");
let numeroGiocatore1 = Math.floor(Math.random() * 6) + 1; // numero random da 1 a 6
let numeroGiocatore2 = Math.floor(Math.random() * 6) + 1; // numero random da 1 a 6

console.log("Numero giocatore 1: ", numeroGiocatore1);
console.log("Numero giocatore 2: ", numeroGiocatore2);

let resultMatch = "Gioca";
if (numeroGiocatore1 > numeroGiocatore2)
    console.log("Ha vinto il giocatore 1");
else if(numeroGiocatore1 < numeroGiocatore2)
    console.log("Ha vinto il giocatore 2")
else console.log("C'è stato un pareggio");

/* ____________ MAIL  */
console.log("############### CONTROLLA SE L'EMAIL E' VALIDA ###############");

/* 
🔢 1. Somma solo numeri pari
Obiettivo: Data un array di numeri, sommare solo quelli pari.
const numeri = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)
*/

const numeri = [2, 5, 8, 3, 10, 7];
let somma = 0; 
for(i=0; i<numeri.length; i++){
    if(numeri[i]%2 === 0){
        somma = somma + numeri[i];
    }
}

console.log("La somma è: ", somma);


/* 
🔁 2. Conta quante volte appare un valore
Obiettivo: Contare quante volte appare il valore "rosso" in un array di stringhe.
const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
// Output atteso: 3
*/

const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
let target = "rosso";
let cont = 0; 
for(i=0; i<colori.length; i++){
    if (target === colori[i])
        cont++; 
}

console.log("Il colore rosso è presente ", cont, " volte.");

/* 
🔄 3. Inverti un array
Obiettivo: Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
const input = [1, 2, 3, 4];
// Output atteso: [4, 3, 2, 1]
*/
const input = [1, 2, 3, 4];
let reverse = [];
let y=0; 
for(i=input.length-1; i>=0; i--){
    reverse[y] = input[i]; 
    y++;
}

console.log("Output: ", reverse);
