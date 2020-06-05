const myArray = ["name","plants", "sky", "earth", "age", "gender", "animal", "bird", "people"];
const randomArray = myArray[Math.floor(Math.random() * Math.length) | 2];
console.log(randomArray);