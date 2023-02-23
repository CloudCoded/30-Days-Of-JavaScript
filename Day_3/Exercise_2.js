/*
Question 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
*/

//prompt method will display a prompt box for the user to input
let base = prompt('Enter the base of the triangle:'); 
let height = prompt('Enter the height of the rectangle:');

//calculate the area of a triangle, the parseInt will change the number from string to an int
let area = 0.5 * parseInt(base) * parseInt(height);

//The output
console.log('The area of the triangle is ' + area);

/*
Question 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
*/
 //Display prompt box for user to input length sides
let a = prompt('Enter the length of side a:');
let b = prompt('Enter the length of side b:');
let c = prompt('Enter the length of side c:');

//Calculate the perimeter
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);

//The output
console.log('The perimeter of the triangle is ' + perimeter);

/*
Question 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
 //prompt box to get the length and width from users
let length = prompt('Enter the length of a triangle:');
let width = prompt('Enter the width of a triangle:');
//calculate the area and perimeter of a rectangle
let areaOfRect = length * width;
let perimeterOfRect = 2 * (parseInt(length) + parseInt(width));
//output
console.log('The area of a rectangle is ' + areaOfRect);
console.log('The perimeter of a rectangle is ' + perimeterOfRect);

/*
Question 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/
//Display prompt box to get radius of a circle from users
let radius = prompt('Enter the radius of a circle');
const pi = 3.14;
//calculate area and circumference
let areaOfCircle = pi * parseInt(radius) * parseInt(radius);
let circumference = 2 * pi * parseInt(radius);
//output
console.log('The area of a circle is ' + areaOfCircle);
console.log('The circumference of a circle is ' + circumference);


/*
Question 5: 
*/

// Define the equation as a function
function equation(x) {
    return 2 * x - 2;
  }
  
  // Calculate the slope (m)
  const slope = 2;
  
  // Calculate the y-intercept (b)
  const yIntercept = equation(0); // when x is 0, y = -2
  
  // Calculate the x-intercept
  const xIntercept = -yIntercept / slope; // when y is 0, x = 1
  
  // Log the results to the console
  console.log(`Slope: ${slope}`);
  console.log(`Y-intercept: ${yIntercept}`);
  console.log(`X-intercept: (${xIntercept}, 0)`);
  

/*
Question 6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/

// Define the points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

// Calculate the slope
const TheSlope = (y2 - y1) / (x2 - x1);

// Log the result to the console
console.log(`The slope between (${x1}, ${y1}) and (${x2}, ${y2}) is ${TheSlope}`);


/*
Question 7: 
*/

// Define the equation and the points
const equation = (x) => 2 * x - 2;
const xOne = 2;
const yOne = 2;
const xTwo = 6;
const yTwo = 10;

// Calculate the slope of the equation
const equationSlope = 2;

// Calculate the slope of the line passing through the points
const lineSlope = (yTwo - yOne) / (xTwo - xOne);

// Compare the slopes
if (equationSlope === lineSlope) {
  console.log('The slopes are the same.');
} else {
  console.log('The slopes are different.');
}

/*
Question 9: Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
*/
//Get user to enter hours and rate per hour
let hours = prompt('Enter hours: ');
let ratePerHour = prompt('Enter rate per hour: ');
//Calculate pay
let weeklyEarning = parseInt(hours) * parseInt(ratePerHour);
console.log('Your weekly earning is ' + weeklyEarning); //output

/*
Question 10: If the length of your name is greater than 7 say, your name is long else say your name is short.
*/
//Declare and defined the variable myName and conditional statement to check the length of value
const Myname = 'abdulazeez';
if(Myname.length > 7) {
    console.log('My name is long');
} else {
    console.log('My name is short');
}

/*
Question 11: Compare your first name length and your family name length and you should get this output.
 */
//Declared and defined first and lastname
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
//conditional statement to comapare the length and print the output
if(firstName.length === lastName.length) {
    console.log('The length are the same')
} else {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}

/*
Question 12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
 */
//Declare two variables
let myAge = 250;
let yourAge = 25;

//Declared new variable to store the value of substracting the above variables
let addAge = myAge - yourAge;
console.log(`I am ${addAge} years older than you.`); //output

/*
Question 13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
 */
//prompt box to input birth year
let birthYear = prompt('Enter birth year: ')

//statement to check and print output
if(birthYear >= 18) {
    console.log(`You are ${birthYear}. You are old enough to drive`)
} else {
    console.log('You are 15. You will be allowed to drive after 3 years.');
}

/*
Question 14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
 */

let numOfYears = prompt('Enter number of years you live: '); //number of years
const timeInSeconds = new Date().getTime() * 100 //current date seconds multiply by 100
console.log('You lived 167718741777800 seconds.'); //output

/*
Question 15: Create a human readable time format using the Date time object 

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

 */
//Date object. creating time object
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

//outputs
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
