/*
Question 1: Copy countries array(Avoid mutation)
*/

console.log(countries.slice(0, countries.length));

/*
Question 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
*/

const copiedCountries = countries.slice();
const sortedCountries = copiedCountries.sort();