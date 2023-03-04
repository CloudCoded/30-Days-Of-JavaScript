/*
Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
*/

//Answer => for loop
for(let i = 0; i <= 10; ++i){
    console.log(i)
}

//while loop
let i = 0;
while(i < 10){
    console.log(i)
    ++i
}

//do while loop
let x = 0;
do{
    console.log(x)
    ++x;
} while(x < 10)

/*
Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
*/
//Answer => for loop
for (let i = 10; i >= 0; i--){
    console.log(i)
}

//while loop
let j = 10;
while(i >= 0){
    console.log(i)
    --i
}

// do while loop
let k = 0;
do{
    console.log(x)
    k--
} while(k >= 0)

/*
Question 3: Iterate 0 to n using for loop
*/
let n = 10 // replace 10 with actual value of n
for(let i = 0; i <= n; i++){
    console.log(i)
}

/*
Question 4: Write a loop that makes the following pattern # using console.log():
*/

let pattern = ''
for(let i = 0; i <= 7; i++){
    pattern = pattern + '#'
    console.log(pattern)
}

/*
Question 5: Use loop to print the following pattern:
*/

for(let i = 0; i <= 10; ++i){
    console.log(`${i} * ${i} = ${i * i}`)
}

/*
Question 6:  Using loop print the following pattern   
*/

for(let i = 0; i <= 10; ++i){
    console.log(`${i}  ${i**2}   ${i **3}`)
}

/*
Question 7: Use for loop to iterate from 0 to 100 and print only even numbers
*/

for(let i = 0; i <= 100; ++i){
    if (i % 2 === 0) {
        console.log(i)
    }
}

/*
Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers
*/

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

/*
Question 9: Use for loop to iterate from 0 to 100 and print only prime numbers
*/



/*
Question 10: 
*/

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is: ${sum}`);


/*
Question 11: 
*/

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}

console.log(`The sum of all even numbers from 0 to 100 is: ${sumEvens}`);
console.log(`The sum of all odd numbers from 0 to 100 is: ${sumOdds}`);


/*
Question 12: 
*/

let evensSum = 0;
let oddsSum = 0;
let evensArray = [];
let oddsArray = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evensSum += i;
    evensArray.push(i);
  } else {
    oddsSum += i;
    oddsArray.push(i);
  }
}

console.log("Sum of evens: ", evensSum);
console.log("Sum of odds: ", oddsSum);
console.log("Array of evens: ", evensArray);
console.log("Array of odds: ", oddsArray);


/*
Question 13: Develop a small script which generate array of 5 random numbers
*/



/*
Question 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
*/

let numbersArray = [];

while (numbersArray.length < 5) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (!numbersArray.includes(randomNumber)) {
    numbersArray.push(randomNumber);
  }
}

console.log(numbersArray);

/*
Question 15: Develop a small script which generate a six characters random id:
*/

