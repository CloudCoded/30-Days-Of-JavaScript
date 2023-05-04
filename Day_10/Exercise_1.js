/*
Question 1: create an empty set
*/

//Answer
const emptySet = new Set()
console.log(emptySet);

/*
Question 2: Create a set containing 0 to 10 using loop
*/

//Answer
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const setOfNumbers = new Set(num)

for(const num of setOfNumbers){
    console.log(num)
}

/*
Question 3: Remove an element from a set
*/

//Answer
const companies = new Set();
companies.add('Nigeria');

console.log(companies.delete('Nigeria'));
