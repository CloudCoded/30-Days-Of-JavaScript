/*
Question 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
*/

let base = prompt('Enter the base of the triangle:');
let height = prompt('Enter the height of the rectangle:');
let area = 0.5 * parseInt(base) * parseInt(height);
console.log('The area of the triangle is ' + area);

/*
Question 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
*/
 
let a = prompt('Enter the length of side a:');
let b = prompt('Enter the length of side b:');
let c = prompt('Enter the length of side c:');
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
console.log('The perimeter of the triangle is ' + perimeter);

/*
Question 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/

let length = prompt('Enter the length of a triangle:');
let width = prompt('Enter the width of a triangle:');

let areaOfRect = length * width;
let perimeterOfRect = 2 * (parseInt(length) + parseInt(width));

console.log('The area of a rectangle is ' + areaOfRect);
console.log('The perimeter of a rectangle is ' + perimeterOfRect);

/*
Question 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/

let radius = prompt('Enter the radius of a circle');
const pi = 3.14;

let areaOfCircle = pi * parseInt(radius) * parseInt(radius);
let circumference = 2 * pi * parseInt(radius);

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

let hours = prompt('Enter hours: ');
let ratePerHour = prompt('Enter rate per hour: ');

let weeklyEarning = parseInt(hours) * parseInt(ratePerHour);
console.log('Your weekly earning is ' + weeklyEarning);