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
Question 4: *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
*/

//Answer
const statistics = {
    sample: [],
    mean: function() {
      const sum = this.sample.reduce((acc, curr) => acc + curr, 0);
      return sum / this.sample.length;
    },
    median: function() {
      const sortedSample = this.sample.sort((a, b) => a - b);
      const middleIndex = Math.floor(this.sample.length / 2);
      if (this.sample.length % 2 === 0) {
        return (sortedSample[middleIndex - 1] + sortedSample[middleIndex]) / 2;
      } else {
        return sortedSample[middleIndex];
      }
    },
    mode: function() {
      const countMap = {};
      let maxCount = 0;
      let mode;
      this.sample.forEach(num => {
        if (!countMap[num]) {
          countMap[num] = 1;
        } else {
          countMap[num]++;
        }
        if (countMap[num] > maxCount) {
          maxCount = countMap[num];
          mode = num;
        }
      });
      if (maxCount === 1) {
        return "No mode";
      } else {
        return mode;
      }
    },
    range: function() {
      const sortedSample = this.sample.sort((a, b) => a - b);
      return sortedSample[this.sample.length - 1] - sortedSample[0];
    },
    variance: function() {
      const mean = this.mean();
      const squaredDifferences = this.sample.map(num => (num - mean) ** 2);
      const sumSquaredDifferences = squaredDifferences.reduce((acc, curr) => acc + curr, 0);
      return sumSquaredDifferences / this.sample.length;
    },
    standardDeviation: function() {
      return Math.sqrt(this.variance());
    },
    min: function() {
      return Math.min(...this.sample);
    },
    max: function() {
      return Math.max(...this.sample);
    },
    count: function() {
      return this.sample.length;
    },
    percentile: function(p) {
      const sortedSample = this.sample.sort((a, b) => a - b);
      const index = Math.ceil((p / 100) * sortedSample.length) - 1;
      return sortedSample[index];
    },
    frequencyDistribution: function() {
      const countMap = {};
      this.sample.forEach(num => {
        if (!countMap[num]) {
          countMap[num] = 1;
        } else {
          countMap[num]++;
        }
      });
      return countMap;
    }
  };
  
  // example usage
  statistics.sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Mean:", statistics.mean()); // 5.5
  console.log("Median:", statistics.median()); // 5.5
  console.log("Mode:", statistics.mode()); // No mode
  console.log("Range:", statistics.range()); // 9
  console.log("Variance:", statistics.variance()); // 8.25
  console.log("Standard deviation:", statistics.standardDeviation()); // 2.8722813232690143
  console.log("Min:", statistics.min()); // 1
  console.log("Max:", statistics.max()); // 10
  console.log("Count:", statistics.count()); // 10
  console.log("Percentile (25th):", statistics.percentile(25)); // 
  