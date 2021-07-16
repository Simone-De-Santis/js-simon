/*
Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Commentate il codice.
 */

var listNumberRandom = [];
var manyRandom = 5;
var listNumberChoice = [];
var time = 1 * 1000;

//! generatore di numeri random

while (listNumberRandom.length < manyRandom) {
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  if (!listNumberRandom.includes(randomNumber)) {
    listNumberRandom.push(randomNumber);
  }
}

console.table(listNumberRandom);

// stampa alert con i numeri generati
alert(
  "ricorda questi numeri \n è importatne!!" +
    " " +
    "\n\n\n\n" +
    listNumberRandom
);

//!!!! dopo inserimento time dopo il quale parte la richiesta dei numeri

// setTimeout(myfunction, time);
// function myfunction() {}

//!!!! da inserire nella funzione
//chiediamo un numero all'utente fino a quando:
//*validazione 1- fino a quando i numeri inseriti sono inferiori a manyRandom.lengt
//*validazione 2- se il numero inserito non è un numero

while (listNumberChoice.length < manyRandom) {
  var numberChoice = parseInt(
    prompt("inserisci un numero della lista vista precedentemente")
  );
  if (numberChoice && !isNaN(numberChoice)) {
    //inserisco il numero dell'utente in listNumberChoice
    listNumberChoice.push(numberChoice);
  }
}
console.log(listNumberChoice);

//! controllo per ogni numero inserito se è presente nell'array per ogni controllo ho bisogno del risultato per quantificare quanti e quali numeri sono stati inseriti in maniera errata
