/*
Question 1: The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

//Answer => sort array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortAges = ages.sort(); //sort the array
let minAge = Math.min.apply(Math, sortAges); //Math.min method uses the apply method to print the min age
let maxAge = Math.max.apply(Math, sortAges); //Math.min method uses the apply method to print the min age

console.log(sortAges); //output sorted array
console.log(minAge); //min age 19
console.log(maxAge); //max age 26