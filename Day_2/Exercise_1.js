/*
Question 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
*/

var challenge = '30 Days Of Javascript'; // A variable "challenge" was declared by var keyword of a value of string was assigned to it

/*
Question 2: Print the string on the browser console using console.log()
*/

console.log(challenge); // The console.log() function is used to print the variable on the browser console

/*
Question 3: Print the length of the string on the browser console using console.log()
*/

console.log(challenge.length); // The length method is used to print the number of characters in a string


/*
Question 4: Change all the string characters to capital letters 
*/

console.log(challenge.toUpperCase()); // I use the toUpperCase method to change the characters to upperCase.

/*
Question 5: Change all the string characters to lowercase letters
*/

console.log(challenge.toLowerCase()); // All the characters are converted to lowcase with toLowerCase() method.

/*
Question 6: Cut (slice) out the first word of the string using substr() or substring() method
*/

console.log(challenge.substring(2)); // The substring method is used in this task to slice out the first word, we can also use slice() or substr() method

/*
Question 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
*/

console.log(challenge.slice(2)); // The slice() method is used to cut out Days Of Javascript from the string

/*
Question 8: Check if the string contains a word Script using includes() method
*/

console.log(challenge.includes('Script')); // I use the includes() method to check if the string have a substring of Script, it will output a boolean!

/*
Question 9: Split the string into an array using split() method
*/

console.log(challenge.split()); // This method will convert the string to an array 

/*
Question 10: Split the string 30 Days Of JavaScript at the space using split() method
*/

console.log(challenge.split(' ')); // I added space to the split() method, this change the length of the array from 1 to 4.

/*
Question 11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
*/

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; // I declared a string variable with let keyword with value of strings
console.log(string.split(',')); // This method will add comma and change the string to array.

/*
Question 12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
*/

console.log(challenge.replace('JavaScript', 'Python')); // The replace method in this function will change the substring JavaScript to Python

/*
Question 13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
*/

console.log(challenge.charAt(15)); // I used the charAt method to identify the index 15 in the string

/*
Question 14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
*/

console.log(challenge.charCodeAt(11)); //The charCodeAt will identify the ASCII code of "j" in the string

/*
Question 15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
*/

console.log(challenge.indexOf('a')); //In this function, the indexOf will identify the index of the first a in '30 Days Of JavaScript' string

/*
Question 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
*/

console.log(challenge.lastIndexOf('a')); //This is opposite to question 15 function, the lastIndexOf will identify the last occurence of 'a'

/*
Question 17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

let anyWord = 'You cannot end a sentence with because because because is a conjunction'; //I declared a var 'anyWord' with let keyword and with a string of characters
console.log(anyWord.indexOf('because')); // And the characters, I used the indexOf to find the first appearance of the 'because'

/*
Question 18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log(anyWord.lastIndexOf('because')); //The lastIndexOf is used to find the last occurrence of the word "because" in the above sentence

/*
Question 19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log(anyWord.search('because')); //similar to the indexOf function above, the search method in this function will find the first position of the 'because'

/*
Question 20: Use trim() to remove any trailing whitespace at the beginning and the end of a string
*/

let updateChallenge = ' 30 Days Of JavaScript '; //I declared a var 'updateChallenge' with let keyword and attributed to it a value of string that has whitespaces
console.log(updateChallenge.trim(' ')); //I used the trim function in this function to trim out any trailing whitespaces in the string

/*
Question 21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
*/

console.log(challenge.startsWith('30')); //I used the startsWith method to check if the string starts with '30', this output true because the string starts with '30'

/*
Question 22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
*/

console.log(updateChallenge.endsWith(' ')); //I used the endsWith method to check if the string starts with ' ', this output true because the string starts with ' '

/*
Question 23: Use match() method to find all the a’s in 30 Days Of JavaScript
*/

console.log(updateChallenge.match(/a/gi)); //The match method in this function will output how many times the char 'a' occur in the sentence

/*
Question 24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
*/

let string1 = '30 Days Of';
console.log(string1.concat('JavaScript')); // The concat() function will concate the string1 value and the string in the concat() function to make a full sentence

/*
Question 25: Use repeat() method to print 30 Days Of JavaScript 2 times
*/

console.log(challenge.repeat(2)); // The repeat() function with the value of 2, indicates that the value of challenge variable will be printed 2 times.