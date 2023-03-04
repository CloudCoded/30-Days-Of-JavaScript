/*
Question 1: Develop a small script which generate any number of characters random id:
*/

let id = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// specify the desired minimum and maximum length of the ID here
const minLength = 5;
const maxLength = 15;
const idLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

for (let i = 0; i < idLength; i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log(id);

/*
Question 2: Write a script which generates a random hexadecimal number.
*/

let hex = Math.floor(Math.random() * 16777215).toString(16); //The number 16,777,215 is the total possible combinations of RGB(255,255,255) && Hexadecimal is base 16

console.log("#" + hex);

/*
Question 3: Write a script which generates a random rgb color number.
*/

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let color = `rgb(${r}, ${g}, ${b})`;

console.log(color);

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