/*
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


let firstentences = [ "I am adorable person", "I am uplifted with the show which we watch last time", "I am very content"];
let secondSentences = ["My sister is crying because of the corona virus", "they are giving up of this life", "tough situation makes people feel down most of the time"];
let lastSentences = ["alone", "disturb", "above the tower"];


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

  let continueProgram = "Yes";

  while (continueProgram === "Yes") {
    let quoteNumber = Number(prompt("How many quotes do you want but make sure it is between 1 to 5: "));

    while (quoteNumber < 0 || quoteNumber > 5) {
      quoteNumber = Number(prompt("Again, how many quotes do you want t generate but make sure it is between 1 to 5: "))
    }

    let ourSentences = prompt("choose the number of the sentences that you want, here: ");
  
    while (ourSentences !== firstentences || ourSentences !== secondSentences || ourSentences !== lastSentences) {
      ourSentences = Number(prompt("Choose which one of them do you like, first, second or the last: "));
    }

    let ourPreferanceSentence = '';

    if (ourSentences = 'firstSentences') {
      for (i < 0; i < quoteNumber; i++) {
        ourPreferanceSentence += '\n' + quotes(firstentences) + '\n';
      }
    }  else {
      for () {

      }
    }
  }



//  let myQuote1 = Math.floor(Math.random() * firstentences.length);
//  let myQuote2 = Math.floor(Math.random() * secondSentences.length);
//  let myQuote3 = Math.floor(Math.random() * secondSentences.length);

//  let ranQuote1 = firstentences[myQuote1];
//  let ranQuote2 = secondSentences[myQuote2];
//  let ranQuote3 = secondSentences[myQuote3];

//  let quotes2 = `${ranQuote1} ${ranQuote2} ${ranQuote3}`;
//  console.log(quotes2);

 
//  let sentences = prompt("choose the number of the sentence that you want here: ");

//    if (sentences === 1) {
    
//     sentences = Number(prompt("number between 1 to 5"));

//     if(numberofquote >= 1 && numberofquote <= 5) {

//       for (let i = 0; i <= sentences; i++) {

//         let myQuote1 = Math.floor(Math.random() * firstentences.length);
//         let myQuote2 = Math.floor(Math.random() * secondSentences.length);
//         let myQuote3 = Math.floor(Math.random() * secondSentences.length);

//         let ranQuote1 = firstentences[myQuote1];
//         let ranQuote2 = secondSentences[myQuote2];
//         let ranQuote3 = secondSentences[myQuote3];

//         let quotes2 = `${ranQuote1} ${ranQuote2} ${ranQuote3}`;
//         console.log(quotes2);
//      }

//     } else {
//      console.log("write a correct number");
//    }
// }
*/

const happyQuotes = [
	[
		'Amateurs look for inspiration;',
		'We have to be honest about what we want',
		'All my life, I kept waiting for things to get better',
		'Accidents happen',
		'Either be a good parent',
	],
	[
		'the rest of us just',
		'and take risks rather than lie to ourselves',
		'But a funny thing happened while I was waiting for the world to change',
		'Our bones shatter, our skin splits, our hearts break',
		'to your career or ',
	],
	[
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
	],
];
const sadQuotes = [
	[
		'It made me realize that Beatrice had changed;',
		"Don't mistake me for a friend",
		'With the Smithies, it was different',
		'One of the hallmarks of social wellness',
		'Only by binding together',
	],
	[
		'that she did not spoke her mind',
		'because I sometimes',
		'was sometimes no telling where one of them',
		'is being inclusive, not exclusive,',
		'as a single force',
	],
	[
		'it was not the real deal.',
		'choose to be friendly.',
		'began and the others left off.',
		'with our friendship.',
		'will we remain strong and unconquerable.',
	],
];
const generateQuote = (quotesArray) => {
	let randomIndex1 = Math.floor(Math.random() * quotesArray[0].length);
	let randomIndex2 = Math.floor(Math.random() * quotesArray[1].length);
	let randomIndex3 = Math.floor(Math.random() * quotesArray[2].length);
	let string1 = quotesArray[0][randomIndex1];
	let string2 = quotesArray[1][randomIndex2];
	let string3 = quotesArray[2][randomIndex3];
	const generatedQuote = `Generated quote : "${string1} ${string2} ${string3}"`;
	return generatedQuote;
};

let continueProgram = 'yes';
while (continueProgram === 'yes') {
	let numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
	while (numberOfQuotes < 0 || numberOfQuotes > 5) {
		numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
	}
	let typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
	while (typeOfQuote !== 'happy' && typeOfQuote !== 'sad') {
		typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
	}
	let alertText = '';
	if (typeOfQuote === 'happy') {
		for (let i = 0; i < numberOfQuotes; i++) {
			alertText += '\n' + generateQuote(happyQuotes) + '\n';
		}
	} else {
		for (let i = 0; i < numberOfQuotes; i++) {
			alertText += '\n' + generateQuote(sadQuotes) + '\n';
		}
	}
	alert(alertText);
	continueProgram = prompt('Do you want to run the program again? (yes, no)');
}
alert('Thank you for using my quote generator ❤️');