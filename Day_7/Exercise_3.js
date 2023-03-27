/*
Question 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
*/

//Answer
const userIdGeneByUser = () => { //This line declares a function named userIdGeneratedByUser using arrow function syntax.
    /*
    These following two lines prompt the user to enter two integers: the number of IDs to generate (id) and the length of each ID (num). The parseInt function is used to convert the user input to integers.
    */
    const numberOfId = parseInt(prompt('Enter number ids: '))
    const numberOfChar = parseInt(prompt('Enter number of characters: '))
    const ids = [];  // create an array to store the generated IDs
    for (let i = 0; i < numberOfId; i++) { //This line starts a for loop that will execute id times. In each iteration of the loop, a new ID will be generated.
        const randId = Math.random().toString(16).substring(2, numberOfChar);
        /*
        This line generates a new random string of characters using the Math.random() function. The string is converted to base 16 using the .toString(36) method and it must be noted that to use base 16 is not compulsory,you can also use higher base depending on the specific requirement of the application, and then the first two characters are removed using the .substring(2) method to ensure that the string starts with an alphabetic character.
        */
        ids.push(randId); // push each new ID to the array
    }
    return ids.toString();  // convert the array to a string and return it
}

userIdGeneByUser(); // call the function to generate the IDs

// The below programs will generate just one id and while the latter will generate an array of Id numbers

const userIdGenByUser = () => {                     // Declare a constant variable `userIdGen` as an arrow function that takes no arguments
    let id = parseInt(prompt('Enter id: '))  // Declare a variable `id` and set its value to the integer returned from the user prompt for entering an id
    let num = parseInt(prompt('Enter num: '))// Declare a variable `num` and set its value to the integer returned from the user prompt for entering a number
    let ranId = '';                          // Declare a variable `ranId` and initialize its value to an empty string
    for (let i = 0; i < id; i++) {            // Start a for loop that will execute `id` number of times, incrementing `i` by 1 each time
        ranId = Math.random().toString(36).substring(2, num);  // Generate a random string using `Math.random()` method, convert it to base 36 using `toString()`, and remove the first two characters using `substring()` and then assign the result to the `ranId` variable
    }
    return ranId                              // Return the final value of `ranId`
}

userIdGenByUser()                                   // Call the `userIdGen()` function


//Generate an array ids

const userIdGenByUsers = () => {
    let id = parseInt(prompt('Enter id: '))
    let num = parseInt(prompt('Enter num: '))
    let ids = [];  // create an array to store the generated IDs
    for (let i = 0; i < id; i++) {
        let ranId = Math.random().toString(36).substring(2, num);
        ids.push(ranId); // push each new ID to the array
    }
    return ids;  // return the array of generated IDs
}

userIdGenByUsers(); // call the function to generate the IDs


/*
Question 2: Write a function name rgbColorGenerator and it generates rgb colors.
*/

//Answer
function rgbColorGenerator () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const color = `rgb(${r}, ${g}, ${b})`;
    return color
}
rgbColorGenerator();

/*
Question 3: Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
*/

//Answer
function arrayOfHexaColors(num){
    const randomHexaNumber = [];
    for (let i = 0; i < num; i++) {
    let hex = Math.floor(Math.random() * 16777215).toString(16); //The number 16,777,215 is the total possible combinations of RGB(255,255,255) && Hexadecimal is base 16
    randomHexaNumber.push(hex)
    }
    
    return randomHexaNumber;
  }
  arrayOfHexaColors(3)

/*
Question 4: Write a function arrayOfRgbColors which return any number of RGB colors in an array. 
*/

//Answer
function arrayOfRgbColors(num){
    const arrRgb = [];
    for (let i = 0; i < num; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
      
        arrRgb.push(`${r}, ${g}, ${b}`)
    }
    return arrRgb;
}
arrayOfRgbColors(2)

/*
Question 5: Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
*/

//Answer
function hexToRgb(hex) {
    // Remove the "#" character if present
    hex = hex.replace("#", "");
    
    // Extract the red, green, and blue components
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // Combine the components into an RGB color value
    let rgb = `rgb(${r}, ${g}, ${b})`;
    
    return rgb;
}
hexToRgb('#FF0000')  

/*
Question 6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
*/

//Answer
function convertRgbToHexa(rgbColor) {
    // Split the RGB color string into its individual red, green, and blue values
    const rgbValues = rgbColor.substring(4, rgbColor.length - 1).split(", ");
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
  
    // Convert the RGB values to their equivalent hexadecimal representation
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
  
    // Combine the hexadecimal values to form the final hexadecimal color string
    const hexColor = `#${hexR}${hexG}${hexB}`;
  
    return hexColor;
}
convertRgbToHexa()

/*
Question 7: Write a function generateColors which can generate any number of hexa or rgb colors.
*/

//Answer
function generateColors(numColors, colorFormat) {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
      if (colorFormat === "hex") {
        // generate a random hex color code
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(color);
      } else if (colorFormat === "rgb") {
        // generate a random RGB color tuple
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b})`;
        colors.push(color);
      } else {
        throw new Error("Invalid color format. Choose 'hex' or 'rgb'.");
      }
    }
    return colors;
}
generateColors();
  

/*
Question 8: Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
*/

//Answer
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomInt = Math.floor(Math.random() * (i + 1)); //This line generates a random integer between 0 and i (inclusive) using the Math.random() and Math.floor() functions
      [arr[i], arr[randomInt]] = [arr[randomInt], arr[i]];
    }
    return arr;
}
shuffleArray([1, 2, 3, 4, 5])
  

/*
Question 9: Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
*/

//Answer
const factorial = (num) => {
    if (num === 0 || num === 1) // If num = 0 OR num = 1, the factorial will return 1
      return 1;

    // We start the FOR loop with i = 4
    // We decrement i after each iteration
    for (let i = num - 1; i >= 1; i--) {
      // We store the value of num at each iteration
      num *= i;
    }
    return num; //120
  }
  factorial(5);

/*
Question 10: Call your function isEmpty, it takes a parameter and it checks if it is empty or not
*/

//Answer
const isEmpty = (val) => {
    if(val === null || val === ''){
        console.log('This is empty')
    } else{
        console.log('This is value')
    }
}
isEmpty()

/*
Question 11: Call your function sum, it takes any number of arguments and it returns the sum.
*/

//Answer
const sum = (...arg) => {
    let sum = 0
    for(let i = 0; i < arg.length; i++){
        sum += arg[i];
    }
    return sum;
}
sum(5, 10, 15, 20,);

/*
Question 12: Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
*/

//Answer
function sumOfArrayItems(arr) {
    // Check if all array items are numbers
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "Error: All array items must be numbers.";
      }
    }
    // Calculate sum of array items
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
sumOfArrayItems([2.5, 3.75, 1.25, 7, 10]);
  

/*
Question 13: Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
*/

//Answer
const average = (arr) => {
    //check if arr items are number types
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Error: Array must be number'
        }
    }

    //find average
    let sum = 0
    for(let i = 0; i < arr.length; i++){
       sum += arr[i]
    }
    const findAverage = sum / arr.length;
    return findAverage;
}
average([1, 2, 3, 4, 5]);

/*
Question 14: Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
*/

//Answer
const modifyArray = (arr) => {
    if(arr.length < 5){
        return 'item not found'
    }

    if(typeof arr[4] === 'string'){
        arr[4] = arr[4].toUpperCase()
    }
    return arr;
}
modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])
modifyArray(['Google', 'Facebook','Apple', 'Amazon']);

/*
Question 15: Write a function called isPrime, which checks if a number is prime number.
*/

//Answer
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    // Check if n is divisible by any number from 2 to sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
}
isPrime(17) 

/*
Question 16: Write a functions which checks if all items are unique in the array.
*/

//Answer
const areAllItemsUnique = (arr) => {
    const set = new Set(arr);
    return set.size === arr.length;
    //This function first creates a Set from the input array arr. A Set is a collection of unique values, so any duplicates in arr will be automatically removed.
    //Next, the function checks if the size of the Set is equal to the length of the original array. 
}
areAllItemsUnique([1, 2, 3, 4, 5]); //finally, the function will return a boolean if there's a duplicate number or not
  

/*
Question 17: Write a function which checks if all the items of the array are the same data type.
*/

//Answer
function allSameType(arr) {
    // Get the type of the first item in the array
    const type = typeof arr[0];
    
    // Iterate over the rest of the array and check if each item has the same type as the first item
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== type) {
        // If any item has a different type, then the array contains items of different types
        return false;
      }
    }
    
    // If we made it through the loop, then all items are of the same type
    return true;
}
allSameType(['hello', 'the', 'universe'])
  

/*
Question 18: JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
*/

//Answer

/*
Question 19: Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
*/

//Answer
const generateUniqueNumbers = () => {
    let nums = [];
    while(nums.length < 7){
        let num = Math.floor(Math.random() * 10);
        if(!nums.includes(num)){ //If the generated number is not already in nums, it is added to the array using the push() method.
            nums.push(num)
        }
    }
    return nums
}
generateUniqueNumbers();

/*
Question 20: Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
*/

//Answer
const reverseCountries = () => {
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ].slice()

    return countries.reverse()
}
reverseCountries();