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
Question 2: 
*/

//Answer

/*
Question 3: 
*/

//Answer

/*
Question 4: 
*/

//Answer