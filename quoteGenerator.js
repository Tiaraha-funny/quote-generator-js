let array1 = [
  'Amateurs look for inspiration;',
  'We have to be honest about what we want',
  'All my life, I kept waiting for things to get better',
  'Accidents happen',
  'Either be a good parent',
];
let array2 = [
  'the rest of us just',
  'and take risks rather than lie to ourselves',
  'But a funny thing happened while I was waiting for the world to change',
  'Our bones shatter, our skin splits, our hearts break',
  'to your career or ',
];
let array3 = [
  'get up and go to work.',
  'and make excuses to stay in our comfort zone.',
  "Because I didn't change it.",
  'We burn, we drown, we stay alive.',
  'just give your dream up for adoption.',
];

var quoteNumber = Number(prompt("Please enter a number from 1 to 5", ""));

if (quoteNumber >= 1 && quoteNumber <= 5) {

  for (let i = 0; i <= quoteNumber; i++) {

     let myQuote_1 = Math.floor(Math.random() * array1.length);
     let myQuote_2 = Math.floor(Math.random() * array2.length);
     let myQuote_3 = Math.floor(Math.random() * array3.length);

     let ranQuote_1 = array1[myQuote_1];
     let ranQuote_2 = array2[myQuote_2];
     let ranQuote_3 = array3[myQuote_3];

     let quotes = `${ranQuote_1} ${ranQuote_2} ${ranQuote_3}`;

     console.log(quotes);
   }

  } else {
   console.log("write a correct number");
 }
 
 // we need to have 2 set of quote
 // create new arrays
 //
 let genQuote1 = ["our new arrays are here", "it is almost there but need effort", "try again and again and again"];
 let genQuote2 = ["work again don't be lazy", "do not give up", "one more step"];

 // if the user select 1 or 2
if (genQuote1 === "our new arrays are here" && genQuote2 == "work again don't be lazy") {

  while (genQuote1 = true && genQuote2 = true) {
   sentence = Number(prompt('enter 2 types of sentences here: '));
  console.log(sentence);
  }
}