/*
Question 1: Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
*/

//Answer
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
  
const totalPrice = products.filter(product => typeof product.price === 'number').map(product => product.price).reduce((accumulator, currentValue) => accumulator + currentValue)
  
console.log(totalPrice) // Output: 27 (3 + 6 + 8 + 10)
  

/*
Question 2: Find the sum of price of products using only reduce reduce(callback))
*/

//Answer
const sumPrice = products.reduce((acc, currVal) => {
    if (typeof currVal.price === 'number'){
        return acc + currVal.price
    }
    return acc;
}, 0);

console.log(sumPrice);

/*
Question 3: Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/

//Answer
const countries = require('./countries') // Assuming countries.js is in the same directory

function categorizeCountries(countryArray) {
  const patternArray = ['land', 'ia', 'island', 'stan']
  const resultArray = []
  
  patternArray.forEach(pattern => {
    const filteredCountries = countryArray.filter(country => country.toLowerCase().endsWith(pattern))
    resultArray.push(...filteredCountries)
  })
  
  return resultArray
}

const categorizedCountries = categorizeCountries(countries)
console.log(categorizedCountries)


/*
Question 4: 
*/

//Answer

/*
Question 5: 
*/

//Answer