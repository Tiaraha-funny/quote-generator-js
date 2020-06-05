let firstArray = ["name","plants", "sky"];
let secondArray = ["earth", "age", "gender"];
let lastArray = ["animal", "bird", "people"];


const randomArray_1 = firstArray[Math.floor(Math.random() * firstArray.length)];
const randomArray_2 = secondArray[Math.floor(Math.random() * secondArray.length)];
const randomArray_3 = lastArray[Math.floor(Math.random() * lastArray.length)];

let quotes = `${randomArray_1}, ${randomArray_2} and ${randomArray_3} `;
console.log(quotes);

let genNum = 5;
for (let number of genNum) {
  if (number > 1) {
    return genNum.quotes(1);
  } else if (number > 5) {
    return genNum.quotes(2);
  } else {
    return genNum.quotes(0);
  }
}