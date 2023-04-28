/*
Question 1: Explain the difference between forEach, map, filter, and reduce.
*/

//Answer forEach
'The forEach() method executes a provided function once for each array element. It iterates an array elements and can only be use with array'

//Example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element)) // a b c

//map
'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.'

//Example
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const toUpperCase = names.map((name) => name.toUpperCase());
console.log(toUpperCase) //['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

//filter
'The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.'

//Example
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//reduce
'The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.'

//Example
const arr1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

/*
Question 2: Define a callback function before you use it in forEach, map, filter or reduce.
*/

//Answer
//Define the callback function
const squareValue = (n) => {
  return n * n
}

//Use the callback function with map.
const numbers = [1, 2, 3, 4];
const squareValues = numbers.map(squareValue)
console.log(squareValues);

//forEach
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesUp = [];

countries.forEach(function(country){
  countriesUp.push(country.toUpperCase())
})
console.log(countriesUp);

//filter
const places = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const placesContainingLand = places.filter((place) => place.includes('land'))
console.log(placesContainingLand);

//reduce
const figures = [1, 2, 3, 4, 5];
const sum = figures.reduce((acc, cur) => acc + cur)

console.log(sum);

/*
Question 3: Use forEach to console.log each country in the countries array.
*/

//Answer
countries.forEach(element => console.log(element));

/*
Question 4: Use forEach to console.log each name in the names array.
*/

//Answer
names.forEach(element => console.log(element));

/*
Question 5: Use forEach to console.log each number in the numbers array.
*/

//Answer
numbers.forEach(num => console.log(num));

/*
Question 6: Use map to create a new array by changing each country to uppercase in the countries array.
*/

//Answer
countryToUppercase = [];

countries.map(function(country){
  countryToUppercase.push(country.toUpperCase())
})
console.log(countryToUppercase);

/*
Question 7: Use map to create an array of countries length from countries array.
*/

//Answer
const countriesArr = [
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
  'Kenya',
]
const countriesLength = countriesArr.map((country) => country.length)
console.log(countriesLength);

/*
Question 8: Use map to create a new array by changing each number to square in the numbers array
*/

//Answer
const sqrNum = numbers.map((number) => number * number);
console.log(sqrNum);


/*
Question 9: Use map to change to each name to uppercase in the names array
*/

//Answer
const nameUp = []; 

names.map(function(element){
  nameUp.push(element.toUpperCase())
})
console.log(nameUp);

/*
Question 10: Use map to map the products array to its corresponding prices.
*/

//Answer
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const prices = products.map((product) => {
  return product.price;
})
console.log(prices);


/*
Question 11: Use filter to filter out countries containing land.
*/

//Answer
const countryIncludesLand = countries.filter((country) => country.includes('land'));

console.log(countryIncludesLand);

/*
Question 12: Use filter to filter out countries having six characters.
*/

//Answer
const countriesHaveSixLetters = countries.filter((country) => country.length === 6);
console.log(countriesHaveSixLetters);

/*
Question 13: Use filter to filter out countries containing six letters and more in the country array.
*/

//Answer
const countriesHaveSixLettersAndMore = countries.filter((country) => country.length >= 6);
console.log(countriesHaveSixLettersAndMore)

/*
Question 14: Use filter to filter out country start with 'E';
*/

//Answer
console.log(countries.filter(country => country.startsWith('E')));


/*
Question 15: Use filter to filter out only prices with values.
*/

//Answer
const priceWithValues = products.filter((product) => {
  return typeof product.price === 'number'
})
console.log(priceWithValues);

/*
Question 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
*/

//Answer
const getStringLists = (arr) => {
  return arr.filter(arr => typeof arr === 'string')
}
getStringLists(['love it is', 1, 20, 'hello']);

//Another Method
function getStringLists(arr) {
  const stringArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      stringArr.push(arr[i]);
    }
  }

  return stringArr;
}
getStringLists([1, "hello", 2, "world", true, "foo", "bar", false]);

/*
Question 17: Use reduce to sum all the numbers in the numbers array.
*/

//Answer
const sumNum = numbers.reduce((acc, curr) => acc + curr);
console.log(sumNum);

/*
Question 18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/

//Answer
const concatenated = countries.reduce((accumulator, currentValue, index, array) => {
  if (index === array.length - 1) { //checks if the currentValue equals to the last index of the array (i.e., if we're currently processing the last country name).
    return `${accumulator}and ${currentValue}`;
  } else {
    return `${accumulator}${currentValue}, `;
  }
});

const sentence = `${concatenated} are north European countries.`;

console.log(sentence); // Output: Estonia, Finland, Sweden, Denmark, Norway, and Iceland are north European countries.


/*
Question 19: Explain the difference between some and every
*/

//Answer
/*
Some: Check if some elements are similar in an aspect and returns a boolean.
Every: Check if all elements are the same in an aspect and returns a boolean.
*/

/*
Question 20: Use some to check if some names' length greater than seven in names array
*/

//Answer
const greaterThanSeven = names.some((name) => name.length > 7);
/*if(greaterThanSeven){
  console.log('At least some names in the array has more than seven characters.')
} else{
  console.log("No name in the array has more than seven characters.");
}
*/
console.log(greaterThanSeven);

/*
Question 21: Use every to check if all the countries contain the word land
*/

//Answer
const containLand = countries.every((country) => country.includes('land'));
console.log(containLand);

/* EXPLANATION:
The code I provided uses the every method and the arrow function (country) => country.includes('land') to check if every country name in the countries array contains the substring "land".

The result of this operation is stored in the variable containLand, which will be a boolean value. If every country name in the array contains "land", containLand will be true. Otherwise, containLand will be false.
*/

/*
Question 22: Explain the difference between find and findIndex.
*/

//Answer
 /*
 find: Returns the first element that satisfies the condition
 findIndex: Returns the first position of the first element which satisfies the condition.
 */


/*
Question 23: Use find to find the first country containing only six letters in the countries array
*/

//Answer
const containSixLetters = countries.find((country) => country > 6)
console.log(containSixLetters);

/*
Question 24: Use findIndex to find the position of the first country containing only six letters in the countries array
*/

//Answer
const indexOfTheCountry = countries.findIndex((country) => country > 6);
console.log(indexOfTheCountry);

/*
Question 25: Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
*/

//Answer
const indexOfNorway = countries.findIndex((country) => country === 'Norway');
console.log(indexOfNorway)

/*
Question 26: Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/

//Answer
const indexOfRussia = countries.findIndex((country) => country === 'Norway')
console.log(indexOfNorway);