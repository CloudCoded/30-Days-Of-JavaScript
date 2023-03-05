/*
Question 1: Copy countries array(Avoid mutation)
*/

//Answer
console.log(countries.slice(0, countries.length));

/*
Question 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
*/

//Answer
const copiedCountries = countries.slice();
const sortedCountries = copiedCountries.sort();

/*
Question 3: Sort the webTechs array and mernStack array
*/

//Answer
const sortWebTechs = webTechs.sort();
const sortMernStack = mernStack.sort();