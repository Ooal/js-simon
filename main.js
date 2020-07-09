/*Un alert espone 5 numeri casuali (univoci).
Poi parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati*/
$(document).ready(function(){

var arrayNumCasualiUnivoci =[];
var arrayNumUtente =[];
var numeriCorrispondenti =[];
var punteggio = 0;

while (arrayNumCasualiUnivoci.length < 5) {
  numRandom = getRandomInt(1, 100);
  if (!(controlloNumeriUguali(arrayNumCasualiUnivoci, numRandom))) {
      arrayNumCasualiUnivoci.push(numRandom);
    }
}


console.log(arrayNumCasualiUnivoci);
alert(arrayNumCasualiUnivoci);

setTimeout(function(){
  while (arrayNumUtente.length < 5) {
    var numeriUtente =parseInt(prompt("Inserisci gli stessi numeri che hai visto prima"));
    if (!(controlloNumeriUguali(arrayNumUtente, numeriUtente))) {
        arrayNumUtente.push(numeriUtente);
      } else {
        alert("hai gia inserito questo numero puoi inserire la stassa cifra solo una volta, furbetto")
      }

  }
  console.log(arrayNumUtente);

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (arrayNumCasualiUnivoci[i] == arrayNumUtente[j]) {
        var numeCorrispondente = arrayNumUtente[j];
        numeriCorrispondenti.push(numeCorrispondente);
        punteggio++;
      }
    }
  }
console.log("Hai inserito",punteggio,"numeri che corrispondono");
console.log("Hai inserito correttamente i seguenti numeri :",numeriCorrispondenti.join(" "));


},3000);

});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
function controlloNumeriUguali(array , num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }
  }
  return false;
}
