/*
Question 1: Declare an empty array;
*/

//Answer
const arr = [];
console.log(arr) //it will return an empty arr[]

/*
Question 2: Declare an array with more than 5 number of elements
*/

//Answer
const arrNumbers = [1, 2, 3, 4, 5, 6]; //array numbers
console.log(arrNumbers); //print array 

/*
Question 3: Find the length of your array 
*/

//Answer
console.log(arrNumbers.length) //print its length

/*
Question 4: Get the first item, the middle item and the last item of the array
*/

//Answer
console.log(arrNumbers[0]); //print first item which 1
console.log(arrNumbers.slice(2, 4)); //print middle items 3 and 4
//last item
let lastIndex = arrNumbers.length - 1
lastItem = arrNumbers[lastIndex]

console.log(lastItem) //6

/*
Question 5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
*/

//Answer
const personalInfo = [
    'Abdul',
    10,
    true,
    5.1,
    {country: 'Nigeria'},
    NaN
]
console.log(personalInfo);

/*
Question 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/

//Answer
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

/*
Question 7: Print the array using console.log()
*/

//Answer
console.log(itCompanies);

/*
Question 8: Print the number of companies in the array
*/

//Amswer
console.log('Number:', itCompanies.length);

/*
Question 9: Print the first company, middle and last company
*/

//Answer
//firstcompany
console.log(itCompanies[0]);
//middle
console.log(itCompanies[3])
//lastcompany
lastCompany = itCompanies.length - 1
last = itCompanies[lastCompany]
console.log(last);

/*
Question 10: Print out each company
*/

//Answer
console.log(itCompanies[0]) //Facebook
console.log(itCompanies[1]) //Google
console.log(itCompanies[2]) //Microsoft
console.log(itCompanies[3]) //Apple
console.log(itCompanies[4]) //IBM
console.log(itCompanies[5]) //Oracle
console.log(itCompanies[6]) //Amazon

/*
Question 11: Change each company name to uppercase one by one and print them out
*/

//Answer
console.log(itCompanies[0].toUpperCase()); //FACEBOOK
console.log(itCompanies[1].toUpperCase()); //GOOGLE
console.log(itCompanies[2].toUpperCase()); //MICROSOFT
console.log(itCompanies[3].toUpperCase()); //APPLE
console.log(itCompanies[4].toUpperCase()); //IBM
console.log(itCompanies[5].toUpperCase()); //ORACLE
console.log(itCompanies[6].toUpperCase()); //AMAZON

/*
Question 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
*/

//Answer
itCompanies.push('are', 'big', 'IT', 'companies')
console.log(itCompanies.join(' '));

/*
Question 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
*/

//Answer
let company = itCompanies.indexOf('Oracle');

if(company === -1){
    console.log('company does not exist');
} else{
    console.log('company found in array');
}

/*
Question 14: Filter out companies which have more than one 'o' without the filter method
*/

const companyNames = ['Google', 'Microsoft', 'Amazon', 'Yahoo', 'Facebook'];

const filteredCompanies = []; //new array to store the companies with more than one 'o'

for (const companyName of companyNames) { //used for of loop to iterate cos I'm not interested in the index of each element in the arr
  const oMatches = companyName.match(/o/gi); //regEx to find countries with 'o'
  if (!oMatches || oMatches.length <= 1 || companyName === 'Facebook') { //conditions to find the countries
    filteredCompanies.push(companyName); //push the countries into new arr
  }
}

console.log(filteredCompanies); //print the countries

/*
Question 15: Sort the array using sort() method
*/

//Answer
console.log(itCompanies.sort());

/*
Question 16: Reverse the array using reverse() method 
*/

//Answer
console.log(itCompanies.reverse());

/*
Question 17: Slice out the first 3 companies from the array
*/

//Answer
console.log(itCompanies.slice(0, 3));

/*
Question 18: Slice out the last 3 companies from the array
*/

//Answer
console.log(itCompanies.slice(4,));

/*
Question 19: Slice out the middle IT company or companies from the array 
*/

//Answer
console.log(itCompanies.slice(3, 4));

/*
Question 20: Remove the first IT company from the array
*/

//Answer
console.log(itCompanies.shift());

/*
Question 21: Remove the middle IT company or companies from the array
*/

//Answer
console.log(itCompanies.splice(3, 1));

/*
Question 22: Remove the last IT company from the array
*/

//Answer
console.log(itCompanies.pop());

/*
Question 23: 
*/

//nswer
console.log(itCompanies.splice());


