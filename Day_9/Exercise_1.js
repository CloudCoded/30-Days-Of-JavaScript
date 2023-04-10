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
const countriess = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countriess.forEach(element => console.log(element));

/*
Question 4: Use forEach to console.log each name in the names array.
*/

//Answer
const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

namess.forEach(element => console.log(element));

/*
Question 5: Use forEach to console.log each number in the numbers array.
*/

//Answer
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numberss.forEach(num => console.log(num));

/*
Question 6: Use map to create a new array by changing each country to uppercase in the countries array.
*/

//Answer
countryToUppercase = [];

countriess.map(function(country){
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

const nums = [1, 2, 3, 4, 5];

const sqrNum = nums.map((number) => number * number);
console.log(sqrNum);


/*
Question 9: Use map to change to each name to uppercase in the names array
*/

const nameUp = []; 

namess.map(function(element){
  nameUp.push(element.toUpperCase())
})
console.log(nameUp);
