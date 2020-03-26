// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// Creo una variabile che scorrerà i 100 numeri (assumendo il valore della posizione)
// var num = 1;
//
// // Faccio un ciclo che mi stampa i numeri da 1 a 100
// for (var i = 1; i <= 100; i++) {
//   num = i;
//   // console.log(num);
//
//   // Controllo se il numero in cui mi trovo è multiplo sia di 3 che di 5
//   if (num % 3 === 0 && num % 5 === 0) {
//     num = "FizzBuzz";
//     // console.log(num);
//   }
//   // Controllo se il numero in cui mi trovo è multiplo di 3
//   if (num % 3 === 0) {
//     num = "Fizz";
//     // console.log(num);
//   }
//   // Controllo se il numero in cui mi trovo è multiplo di 5
//   if (num % 5 === 0) {
//     num = "Buzz";
//     // console.log(num);
//   }
//
//   console.log(num);
// }

for (var i = 0; i < 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
