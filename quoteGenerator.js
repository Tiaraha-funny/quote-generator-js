//1-random quotes

// this is our prompt

const randomGenerator = prompt("Write your quote here: ");

//let us create our three sentences by using three variables

let firstQuote = 'stay alone';
let secondQuote = 'think a lot';
let lastQuote = 'try hard';

// having the combination of those three different sentences, let us console log them together

console.log(`To reduce stress do not ${firstQuote} and if you can ${secondQuote} and also ${lastQuote}`);

// Trying to make another go 

// I think it is fine if we use "class" here. I create this so that we can click the the words in the quotes and it gives the details.

class Quote {
  constructor(firstsentence, secondsentence, thirdsentence) { // if we use class, we must have "constructor" to give multiple choice of objects use. Little definition: Constructor is the sets of instruction which used to create a new instance of the variable class.

    this.firstsentence = firstsentence;
    this.secondsentence = secondsentence;
    this.thirdsentence = thirdsentence;

  }

  // We use "quoteGen" to succeed our three sentences above

  quoteGen(random) {
    if (random > this.firstsentence) {// check if the radom is greater than our first, second and third sentence
      alert("I will not give up") // with the first, we need a change "I will not give up"
    }
    else if (random > this.secondsentence) {
      this.secondsentence === this.firstsentence; // with the second, we need the same result as the first
    }
    else if (random > this.secondsentence) {//with this last one, we need the same result as the first also
      this.thirdsentence === this.secondsentence;
    }
    else {// apart from that, we need the last one to equal our random
      this.thirdsentence = random;
    }
  }
} // We use these to make our code instantiated because "new" keyword is used to create an instante of a class.
const firstQuotes = new Quote("stay alone");
const secondQuotes = new Quote("think a lot");
const lastQuotes = new Quote("try hard");

const combinationSentences = [firstQuote, secondQuote, lastQuote]; // Using this constant, t run our code in the console.log, but I still use the console.log to make it clearly.

console.log(combinationSentences);// We can see all details by run our code with console.log.

// Configurable quotes

// We need to create two new sentences and much them in the funtion "genQuote"

let quote1 = "I do not have much to say";
let quote2 = "let me choose what I like";

//Let us use Math.floor and .random to give the length of our sentences

function genQuot(num) {
  let number1 = Math.floor(Math.random() * (quote1.length));
  let number2 = Math.floor(Math.random() * (quote2.length));

//let use for loop index here

  for (let i = 0; i < 5; i++) {
    let allNumbers = quote1[number1] + quote2[number2];
    num += allNumbers;
    i++;
  }
};
console.log(quote1);// to run our sentences
console.log(quote2);