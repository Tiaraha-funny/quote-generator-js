let ourquote = prompt("Give your quote here: ");

let quotes = {

firstQuote: {
    minQuote: "my name is Petah",
    seQuote: "I am quite old",
    maxQuote: "I am living on earth"
},

secondQuote: {
    oneQuote: "She is mamy",
    twoQuote: "not that old",
    threeQuote: "living Andamasina"
  },

lastQuote: {
    priQuote: "He is a boy",
    deQuote: "very very old",
    preQuote: "somewhere on the sky"
  }
}; console.log(quotes(`Our quotes are ${firstQuote} which is about myself, ${secondQuote} that is a young girl and our last quote is ${lastQuote}. Those are our quotes.`))

