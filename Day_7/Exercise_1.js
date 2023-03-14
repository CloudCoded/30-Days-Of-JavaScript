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
Question 9: 
*/
/*
Question 10: 
*/
/*
Question 11: 
*/
/*
Question 12: 
*/