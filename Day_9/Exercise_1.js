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
