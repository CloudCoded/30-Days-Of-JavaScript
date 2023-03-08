/*
Question 1: Copy countries array(Avoid mutation)
*/

//Answer
let copyCountries = countries.slice(0, countries.length);
console.log(copyCountries);

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

const countriesWithLand = [];

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

/*
Question 5: Find the country containing the hightest number of characters in the countries array
*/

//Answer
const longestCountry2 = countries.reduce((a, b) => (a.length > b.length ? a : b));

/*
Question 6: Extract all the countries containing only four characters from the countries array and print it as array
*/

//Answer
const countriesWithFourChars = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    countriesWithFiveChars.push(countries[i]); // If a country name with a length of 4 is found, we push it to the countriesWithFiveChars array using the push() method.
  } else{
    console.log('none of the countries has four letters')
  }
}

/*
Question 7: Extract all the countries containing two or more words from the countries array and print it as array
*/

//Answer
const countriesWithTwoOrThreeChars = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 2 || countries[i].length === 3) {
    countriesWithFiveChars.push(countries[i]); // If a country name with a length of 2 or 3 is found, we push it to the countriesWithFiveChars array using the push() method.
  } else{
    console.log('none of the countries has just two or three letters')
  }
}

/*
Question 8: Reverse the countries array and capitalize each country and stored it as an array
*/

//Answer
countries.slice().reverse()

  for (const country of countries) {
     console.log(country.toUpperCase());
  }
