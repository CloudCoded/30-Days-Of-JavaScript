/*
Question 1: Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/

/*
Question 2: First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
*/

//Answer
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let removeAllPunctuation = text.replace(/[^\s\w]/gi, ''); //remove all special characters, punctuations
let stringToArr = removeAllPunctuation.split(' '); //string to an array
console.log(stringToArr.length); //count the number of words



/*
Question 3: In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

//Answer
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat'); //Add meat at the beginning
shoppingCart.push('Sugar'); //Add  sugar at the end
shoppingCart.pop('Honey'); //remove honey from array
shoppingCart[3] = 'Green Tea'; //modify tea to green tea


/*
Question 4: In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

//Check main.js => countries,js

/*
Question 5: In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
*/

//Check main.js => web_tech.js

/*
Question 6: Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd);

console.log(fullStack)