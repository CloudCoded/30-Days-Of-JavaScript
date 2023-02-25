/*
Question 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/

//prompt box
let urAge = parseInt(prompt('Enter your age: '));

//if else statement
if(urAge >= 18){
    console.log('you are old enough to vote');
} else{
    console.log('you need to wait for 3 years');
}

/*
Question 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/
//prompt to input the ages
let myAge = prompt('My Age is: ');
let yourAge = prompt('Enter your age: ');

//difference between our ages
const diff = parseInt(yourAge) - parseInt(myAge);

//comparison
if(yourAge > myAge){
console.log(`You are ${diff} years older than me.`);
} else if(yourAge === myAge) {
    console.log('We are age mate');
} else{
    console.log('I am older');
}

/*
Question 3:If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator. 
*/

let a = 4;
let b = 3;

//if else statement
if(a > b){
    console.log(`${a} is greater than ${b}`);
} else{
    console.log(`${a} is less than ${b}`);
}

//ternary operator
let isGreater = true;
isGreater ? console.log(`{a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);


/*
Question 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
*/

let num = parseInt(prompt('Enter a number: '));


//Using the modulus operator to check if a num is even or odd
if(num % 2 == 0){
    console.log(`{num} is an even number`);
} else {
    console.log(`{num} is an odd number`);
}
