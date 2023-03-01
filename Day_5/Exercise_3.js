/*
Question 1: The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
*/

//Answer => sort array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortAges = ages.sort(); //sort the array
let minAge = Math.min.apply(Math, sortAges); //Math.min method uses the apply method to print the min age
let maxAge = Math.max.apply(Math, sortAges); //Math.min method uses the apply method to print the min age

console.log(sortAges); //output sorted array
console.log(minAge); //min age 19
console.log(maxAge); //max age 26

//Answer => Find the median age(one middle item or two middle items divided by two)
const aages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(function(a, b) {
  return a - b;
});

const length = ages.length; //gives the length of the array
const middle = Math.floor(length / 2); //divides the array into two and return the absolute num

if (length % 2 === 0) {
  const median = (ages[middle - 1] + ages[middle]) / 2; //add the last num in the first arr and the first num in the second arr and divide the numbers by 2
  console.log(median); // Output: 24
} else {
  const median = ages[middle]; //but if its jus a num in the middle, print it
  console.log(median); // Output: 24
}


//Answer => Find the average age(all items divided by number of items)
let sum = 0
for(i = 0; i < ages.length; i++){
    sum += ages[i]
}
const average = sum / ages.length;
console.log(average); //22.8

//Answer => Compare the value of (min - average) and (max - average), use abs() method
const comValueMin = Math.abs(Math.floor(19 - 22.8)); //Math.abs to return the absolute number and floor to round up the number
const comValueMax = Math.abs(Math.floor(26- 22.8));

console.log(comValueMin);
console.log(comValueMax);

//1.Slice the first ten countries from the countries array

//Check main.js => countries.js

//2. Find the middle country(ies) in the countries array
//Check main.js => countries.js


//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//Check main.js => countries.js

