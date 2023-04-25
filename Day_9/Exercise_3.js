/*
Question 1: Use the countries information, in the data folder. Sort countries by name, by capital, by population
*/

//Answer
// Load the data from the CSV file
fetch('data/countries.csv')
  .then(response => response.text())
  .then(data => {
    // Parse the CSV data into an array of objects
    const countries = Papa.parse(data, { header: true }).data;

    // Sort the countries by name
    const sortedByName = countries.slice().sort((a, b) => a.name.localeCompare(b.name));

    // Sort the countries by capital
    const sortedByCapital = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));

    // Sort the countries by population
    const sortedByPopulation = countries.slice().sort((a, b) => a.population - b.population);

    // Print the sorted arrays
    console.log(sortedByName);
    console.log(sortedByCapital);
    console.log(sortedByPopulation);
});

/*
This code uses the PapaParse library to parse the CSV data into an array of objects. 
Then, it sorts the array by name, capital, and population using the sort method and the localeCompare function (for sorting by name and capital) and the minus operator (for sorting by population).
 Finally, it logs the sorted arrays to the console.
*/



/*
Question 3: *** Use countries_data.js file create a function which create the ten most populated countries
*/

//Answer
function getTenMostPopulatedCountries(countriesData) {
    // sort the countries by population in descending order
    const sortedCountries = countriesData.sort((a, b) => b.population - a.population);
    // get the top 10 countries by population
    const topTenCountries = sortedCountries.slice(0, 10);
    // return an array of objects with country names and populations
    return topTenCountries.map(country => ({ name: country.name, population: country.population }));
}

const mostPopulatedCountries = getTenMostPopulatedCountries(countriesData);
console.log(mostPopulatedCountries); // should output an array of objects with country names and populations
  

/*
Question 4: 
*/

//Answer