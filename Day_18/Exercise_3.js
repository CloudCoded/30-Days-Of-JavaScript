/*
Question 1: Read the cats api and find the average weight of cat in metric unit.
*/
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    // Filter out breeds with weight data
    const breedsWithData = data.filter((cat) => cat.weight.metric);

    // Calculate the average weight in metric units (grams)
    const totalWeightInGrams = breedsWithData.reduce(
      (sum, cat) => sum + parseFloat(cat.weight.metric.split(' - ')[0].replace(' kg', '').replace(' g', '')) * 1000,
      0
    );

    const averageWeightInGrams = totalWeightInGrams / breedsWithData.length;

    // Convert the average weight to kilograms
    const averageWeightInKilograms = averageWeightInGrams / 1000;

    console.log(`Average Weight of Cats: ${averageWeightInKilograms.toFixed(2)} kg`);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

/*
Question 2: Read the countries api and find out the 10 largest countries
*/

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    // Sort the countries by area in descending order
    const sortedCountries = data.sort((a, b) => b.area - a.area);
    
    // Take the first 10 countries (the largest ones)
    const largestCountries = sortedCountries.slice(0, 10);

    // Log the names of the 10 largest countries
    console.log('10 Largest Countries:');
    largestCountries.forEach(country => {
      console.log(`${country.name} - Area: ${country.area} sq. km`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
