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
const sumPrice = products.reduce((acc, currVal) => acc + currVal);

/*
Question 3: Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/

//Answer

/*
Question 4: 
*/

//Answer

/*
Question 5: 
*/

//Answer