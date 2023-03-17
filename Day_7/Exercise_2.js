/*
Question 1: Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
*/

//Answer
function solveLinEquation(a, b, c) {
    const x = -c / a;
    const y = -c / b;
    return [x, y];
}
solveLinEquation();
  

/*
Question 2: 
*/
/*
Question 3: Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
*/

//Answer
function printArray(arr) {
    console.log(arr)
}
printArray([1, 2, 3, 4]);

/*
Question 4: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
*/

//Answer
const showDateTime = () => {
    const now = new Date();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
}
showDateTime()

/*
Question 5: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/
/*
Question 1: 
*/