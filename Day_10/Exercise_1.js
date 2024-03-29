/*
Question 1: create an empty set
*/

//Answer
const emptySet = new Set();
console.log(emptySet);

/*
Question 2: Create a set containing 0 to 10 using loop
*/

//Answer
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const setOfNumbers = new Set(num);

for(const num of setOfNumbers){
    console.log(num);
}

/*
Question 3: Remove an element from a set
*/

//Answer
const companies = new Set();
companies.add('Nigeria');

console.log(companies.delete('Nigeria'));

/*
Question 4: Clear a set
*/

//Answer
companies.clear();
console.log(companies);

/*
Question 5: Create a set of 5 string elements from array
*/

//Answer
const myStates = ['Madrid', 'Barcelona', 'Berlin', 'Paris', 'London'];
const fiveStrings = new Set(myStates);

console.log(fiveStrings);

/*
Question 6: Create a map of countries and number of characters of a country
*/

//Answer
const countries = ['Finland', 'Sweden', 'Norway'];
const mapCountries = new Map();

for (const country of countries) {
  mapCountries.set(country, country.length);
}

for (const country of mapCountries.keys()) {
  console.log(country.length);
}


/*This code first creates an empty Map object, then uses a for...of loop to iterate over the countries array and add a key-value pair to the mapCountries object for each country.

Finally, it uses another for...of loop to iterate over the keys of the mapCountries object and log the length of each country name.*/
