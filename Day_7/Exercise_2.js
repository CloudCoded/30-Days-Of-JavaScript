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
    for(let i = 0; i <= arr.length; i++){
        console.log(arr[i])
    }
}
printArray([1, 2, 3, 4]);

//Or

function printArray(arr){
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
Question 6: Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
*/

//Answer
const reverseArray = (arr) => {
    const reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);
    }
    console.log(reverse);
}
reverseArray([10, 20, 30, 40])

/*
Question 7: Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
*/

//Answer
function capitalizeArray(){
    arr = ['hello', 'world', 'fam']
    const capitalizedArray = []
    for(let i = 0; i < arr.length; i++){
        capitalizedArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return capitalizedArray;
}
capitalizeArray()

/*
Question 8: Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
*/

//Answer
function addItem(arr, x = 'mango'){
    const fruit = ['lemon', 'apple', 'cherry']
    fruit.push(x)
    return fruit;
}
addItem()

//Or
function addItem(arr, x){
    x = 'mango'
    const fruit = ['lemon', 'apple', 'cherry']
    fruit.push(x)
    return fruit;
}
addItem()


/*
Question 9: Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
*/

//Answer
const removeItem = (arr, index) => {
    const countries = ['Japan', 'Morocco', 'Brazil', 'Sri Lanka'];
    countries.splice(index, 1)
    return countries;
}
removeItem();

/*
Question 10: Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
*/

//Answer
const sumOfNumbers = (num) => {
    sum = 0
    for(let i = 0; i <= num; i++){
        sum += i
    }
    return sum;
}
sumOfNumbers(10)

/*
Question 11: Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
*/

//Answer
function sumOfOdds(num) {
    let total = 0;
    for (let i = 1; i <= num; i += 2) { //i on the first iteration is 1 and on the second we use += to increment by 2 and so on, by doing that we ensure that i takes on only odd values, since we started with an odd value for i
      total += i;
    }
    return total;
  }
  sumOfOdds(10)

  //Or

  function sumOfOdds(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 !== 0) {
        total += i;
      }
    }
    return total;
  }
  sumOfOdds(10)
  
  

/*
Question 12: Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
*/

//Answer
function sumOfEven(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        total += i;
      }
    }
    return total;
  }
  sumOfEven(20)

/*
Question 13: Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
*/

//Answer
function evenAndOdd(num) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log('The number of evens are ' + evenCount);
    console.log('The number of odds are ' + oddCount);
    return evenCount, oddCount;
  }
  evenAndOdd(20)
  

/*
Question 14: Write a function which takes any number of arguments and return the sum of the arguments
*/

//Answer
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  sum(1, 2, 3);

/*
Question 15: Writ a function which generates a randomUserIp.
*/

//Answer
function randomUserIp() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    const num4 = Math.floor(Math.random() * 256);
    return `${num1}.${num2}.${num3}.${num4}`;
  }
  

/*
Question 16: Write a function which generates a randomMacAddress
*/

//Answer
function randomMacAddress() {
    let mac = '';
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * 256);
      mac += rand.toString(16).padStart(2, '0');
      if (i < 5) {
        mac += ':';
      }
    }
    return mac.toUpperCase();
  }
  

/*
Question 17: 
*/

//Answer
  
/*
Question 18: Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
*/

//Answer
function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 7; i++) {
      let randIndex = Math.floor(Math.random() * chars.length);
      id += chars.charAt(randIndex);
    }
    return id;
}
