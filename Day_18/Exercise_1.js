/*
Question 1: Read the countries API using fetch and print the name of country, capital, languages, population and area.
*/

const countriesAPI = 'https://restcountries.com/v2/all';

fetch (countriesAPI).then(response => response.json())
.then(data =>{
    data.forEach((country) =>{
    console.log('Country:', country.name);
    console.log('Capital:', country.capital);
    console.log('Language:', country.languages.map((lang) => lang.name).join(', '));
    console.log('Population:', country.population)
    console.log('Area:', country.area)
    }) 
})
.catch((error) => {
    console.log('Error:', error)
});