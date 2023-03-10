/*
Question 1: Develop a small script which generate any number of characters random id:
*/

//Answer
let id = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// specify the desired minimum and maximum length of the ID here
const minLength = 5;
const maxLength = 15;
const idLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

for (let i = 0; i < idLength; i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log(id);

/*
Question 2: Write a script which generates a random hexadecimal number.
*/

//Answer
let hex = Math.floor(Math.random() * 16777215).toString(16); //The number 16,777,215 is the total possible combinations of RGB(255,255,255) && Hexadecimal is base 16

console.log("#" + hex);

/*
Question 3: Write a script which generates a random rgb color number.
*/

//Answer
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let color = `rgb(${r}, ${g}, ${b})`;

console.log(color);

/*
Question 4: Using the above countries array, create the following new array.
*/

//Answer
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const newArr = [];
  for(const country of countries){
    newArr.push(countries.toUpperCase())
  }
  console.log(newArr)

  //or

  for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase();
  }
  
  console.log(countries);

/*
Question 5:Using the above countries array, create an array for countries length'.  
*/

//Answer
for(let i = 0; i <= countries; i++) {
    countries[i] = countries[i].length;
}
console.log(countries);

/*
Question 6: Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

//Answer
const result = [];

for (let i = 0; i < countries.length; i++) {
  const name = countries[i];
  const code = name.substring(0, 3).toUpperCase();
  const length = name.length;
  result.push([name, code, length]);
}

console.log(result);

/*
Question 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
*/

//Answer
let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}

/*
Question 8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
*/

//Answer
const countriesEndsWithIA = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith('ia')) {
    countriesEndsWithIA.push(countries[i]);
  }
}

if (countriesEndsWithIA.length > 0) {
  console.log(countriesEndsWithIA);
} else {
  console.log('These are countries ends without ia');
}

/*
Question 9: Using the above countries array, find the country containing the biggest number of characters.
*/

//Answer
const longestCountry = countries.reduce(compareLengths); //The reduce() method iterates over each element of the countries array, comparing the length of the current country name with the length of the previous one

function compareLengths(a, b) { //function named compareLengths takes two arguments(accumulator and current element)
  if (a.length > b.length) { //if statement to compare the lengths
    return a; 
  } else {
    return b;
  }
}

//Or

const longestCountry2 = countries.reduce((a, b) => (a.length > b.length ? a : b));
//The arrow function takes two parameters (the accumulator and the current element) and uses a ternary operator to compare the length of the two country names.


/*
Question 10: Using the above countries array, find the country containing only 5 characters.
*/

//Answer
//declared a variable called countryWithFiveChars to store the name of the country containing only 5 characters
const countriesWithFiveChars = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWithFiveChars.push(countries[i]); // If a country name with a length of 5 is found, we push it to the countriesWithFiveChars array using the push() method.
  }
}

/*
Question 11: Find the longest word in the webTechs array
*/

//Answer
const LongestWord = webTechs.reduce(checkLength);

function checkLength(a, b){
    if(a.length > b.length){
        return a;
    } else{
        return b;
    }
}

//or

const checkLength2 = webTechs.reduce((a, b) => (a.length > b.length ? a : b));

/*
Question 12: Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

//Answer
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const webTechsCount = [];

for (let i = 0; i < webTechs.length; i++) {
  webTechsCount.push([webTechs[i], webTechs[i].length]);
}

console.log(webTechsCount);


/*
Question 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
*/

//Answer
for (const stack of mernStack) {
    console.log(stack[0])
}

/*
Question 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
*/

//Answer
const array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}

//Or

for(const item of array){
    console.log(item);
}

/*
Question 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
*/

//Answer
const arr = ['banana', 'orange', 'mango', 'lemon']

const reversedArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArray.push(arr[i]);
}

console.log(reversedArray);


/*
Question 16: Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

//Answer
for (const stack of fullStack) {
    for (const tech of stack) {
      console.log(tech);
    }
  }