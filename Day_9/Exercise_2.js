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
Question 4: Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
*/

//Answer
function countStartingLetters(countryArray) {
    const letterCount = countryArray.reduce((accumulator, country) => {
      const firstLetter = country[0].toUpperCase()
      if (firstLetter in accumulator) {
        accumulator[firstLetter]++
      } else {
        accumulator[firstLetter] = 1
      }
      return accumulator
    }, {})
    
    const resultArray = Object.keys(letterCount).map((letter) => {
      return {letter: letter, count: letterCount[letter]}
    })
    
    return resultArray
  }
  
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
  const startingLetters = countStartingLetters(countries)
  console.log(startingLetters)
  

/*
Question 5: Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
*/

//Answer
//const countries = require('./countries')

function getFirstTenCountries() {
  return countries.filter((country, index) => index < 10)
                 .map(country => country.toUpperCase())
}

console.log(getFirstTenCountries());
