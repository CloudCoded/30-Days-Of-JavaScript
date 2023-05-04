/*
Question 1: create an empty set
*/

//Answer
const emptySet = new Set()
console.log(emptySet);

/*
Question 2:
*/

//Answer
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const setOfNumbers = new Set(num)

for(const num of setOfNumbers){
    console.log(num)
}