/*
Question 1: Declare a function fullName and it print out your full name.
*/

//Answer
function fullName (){
    const firstName = 'Ali '
    const lastName = 'Baba'
    const name = firstName.concat(lastName);

    console.log(name);
}

fullName();

/*
Question 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
*/

//Answer
function fullName (firstName, lastName){
    let name = `${firstName}  ${lastName}`
    console.log(name);
}
fullName('Asabeneh', 'Peter')

/*
Question 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
*/

//Answer
function addNumbers (num1, num2) {
    return num1 + num2;
}
addNumbers(10, 20);

/*
Question 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
*/

//Answer
function areaOfRectangle (length, width) {
    let area = length * width;
    console.log(area);
}
areaOfRectangle(10, 7)
 
/*
Question 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
*/

//Answer
const perimeterOfRectangle = (length, width) => {
    const perimeter = 2 * (length + width)
    console.log(perimeter)
}
perimeterOfRectangle(10, 7);

/*
Question 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism
*/

//Answer
const volumeOfRectPrism = (length, width, height) => {
    const volume = length *  width * height;
    return volume
}
volumeOfRectPrism(10, 7, 8);

/*
Question 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
*/

//Answer
const areaOfCircle = (pi, r1, r2) => {
    const area = pi * r1 * r2;
    return area
}
areaOfCircle(3.14, 7, 7);

/*
Question 8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
*/

//Answer
function circumOfCircle(pi, radius){
    const circum = 2 * pi * radius
    return circum
}
circumOfCircle(3.14, 7);

/*
Question 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
*/

//Answer
(function(mass, volume){
    const density = mass / volume
    console.log(density)
})(10, 5);

/*
Question 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
*/

//Answer
(function(distance, time){
    const speed = distance / time
    return speed
})(20, 5);

/*
Question 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
*/

//Answer
(function(mass, gravity){
    const weight = mass * gravity;
    return weight;
})(5, 12)

/*
Question 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/

//Answer
function convertCelsToFahren(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(convertCelsToFahren(25));
  

/*
Question 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

//Answer
const BodyMaxedIndex = (weight, height) => {
    const bmi = weight / (height * height)
    return bmi;
}
BodyMaxedIndex();

/*
Question 14: Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/

//Answer
const checkSeason = (month) => {
    const checkMonth = prompt('Enter current month: ')
    if(checkMonth === 'September' || checkMonth === 'October' || checkMonth === 'November') {
        console.log('Autumn')
    } else if(checkMonth === 'December' || checkMonth === 'January' || checkMonth === 'February') {
        console.log('Winter')
    } else if(checkMonth === 'March' || checkMonth === 'April' || checkMonth === 'May') {
        console.log('Spring')
    } else if(checkMonth === 'June' || checkMonth === 'July' || checkMonth === 'August'){
        console.log('Summer')
    } else{
        console.log('Enter a valid month');

        return checkMonth;
    }
}
checkSeason()

/*
Question 15: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
*/

//Answer
const findMax = (a, b, c) => {
    if(a > b && a > c){
        console.log(a)
    } else if(b > a && b > c){
        console.log(b)
    } else{
        console.log(c)
    }
}
findMax(10, 100, 500)
findMax(10, -100, -500)
