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
let randomIndex1 = Math.floor(Math.random() * array1.length);
let randomIndex2 = Math.floor(Math.random() * array2.length);
let randomIndex3 = Math.floor(Math.random() * array3.length);

let string1 = array1[randomIndex1];
let string2 = array2[randomIndex2];
let string3 = array3[randomIndex3];

let quote = `${string1} ${string2} ${string3}`;

console.log(quote);

//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes

var number = Number(prompt("Please enter a number from 1 to 5", ""));

if (number >= 5) {
  Number(prompt("Please enter a number from 1 to 5", ""));
} else {
    Number(prompt("Your number (" + number + ") is above 5. Please enter a number from 1 to 5", ""));
}

  for (let i = 0; i < number; number++ ) {
  quotes = Math.floor(Math.random() * 5) + 1;
  quotes = Math.floor(Math.random() * 5) + 1;
  quotes = Math.floor(Math.random() * 5) + 1;
}