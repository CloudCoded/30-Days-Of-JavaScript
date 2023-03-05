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

/*
Question 4: Extract all the countries contain the word 'land' from the countries array and print it as array
*/

//Answer

let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}