/*
Question 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/

//Answer
const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const extractNums = sentence.match(/\d+/g)
const monthSalary = parseInt(extractNums[0])
const bonus = parseInt(extractNums[1])
const onlineMonie = parseInt(extractNums[2])

const annualIncome = (monthSalary * 12) + bonus + (onlineMonie * 12)
console.log(annualIncome);

/*
Question 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
*/

//Answer
const positions = [-12, -4, -3, -1, 0, 4, 8];

// Find the minimum and maximum positions
const minPosition = Math.min(...positions);
const maxPosition = Math.max(...positions);

// Calculate the distance
const distance = maxPosition - minPosition;

console.log('Minimum Position:', minPosition);
console.log('Maximum Position:', maxPosition);
console.log('Distance between the two furthest particles:', distance);

/*
Question 3: Write a pattern which identify if a string is a valid JavaScript variable
*/

//Answer
const is_valid_variable = (str) => {
    // Regular expression pattern to match valid variable names
    const variablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  
    return variablePattern.test(str);
}

console.log(is_valid_variable('first_name'));   // true
console.log(is_valid_variable('first-name'));   // false
console.log(is_valid_variable('1first_name'));  // false
console.log(is_valid_variable('firstname'));    // true

  