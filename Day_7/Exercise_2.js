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
Question 2: Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

//Answer
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant < 0) {
      return [];
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      return [x];
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [x1, x2];
    }
}
solveQuadratic()
  

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
Question 5: Declare a function name swapValues. This function swaps value of x to y.
*/

//Answer
const swapValues = (a, b) => {
    [a, b] = [b, a];
    console.log(`a = ${a}, b = ${b}`)
}
swapValues(10, 11);

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