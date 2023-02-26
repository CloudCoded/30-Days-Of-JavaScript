/*
Question 1: Use console.log() to print the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
let statement = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.' // I declared a var "statement" with let keyword and in the statement I use back slash to escape special characters
console.log(statement); // I print the statement with console.log() functions and the output is going to be the statement's value, the (\) is used to escape special chars

/*
Question 2: Using console.log() print out the quote by Mother Teresa
*/

const quoteByTeresa = "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
console.log(quoteByTeresa); // I declared the quoteByTeresa with the const keyword because the quote doesn't change and print it out with the console.log() function

/*
Question 3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
 */

//Answer: This is a tricky question, '10' is number string in javascript
let checkNum = '10';
console.log(typeof(checkNum)); //This will output string because the number is inside a quote. I'll change the value in the below function
let typeChange = 10; //Here I change the value from string to a number type 
console.log(typeof(typeChange)); // And this log 10 instead of '10' 

//Or, we could use the Casting method and it is best way to solve the question

let strNum = '10'; // strNum variable is declared with let keyword and assigned a value of string '10'
let intNum = parseInt(strNum); //The parseInt is one of the ways to change a string num to num type
console.log(intNum); // Output will 10  instead of '10'

/*
Question 4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
 */
let floatString = '9.8'; //A Variable is declared to store the floating string
let integerNum = parseInt(floatString); //The prototype parseInt will convert the floating string to number
console.log(integerNum); //This console will log number which is not equal to 10
console.log(integerNum + 1); //This console will add 1 to the number and print 10

//Or
console.log(Math.round(integerNum)); //The math.round() function will round 9.8 to 10
/*
Question 5: Check if 'on' is found in both python and jargon
 */

let checkStr = 'python' && 'jargon'; //I declared a variable checkStr with let keyword and the && logical operator to evaluates both operand from left and right
console.log(checkStr.includes('on')); //The includes() method is used to check if the string 'on' is found in both words

/*
Question 6: I hope this course is not full of jargon. Check if jargon is in the sentence. 
 */

//The includes() method is use to check if the 'jargon' is found in the sentence
let shortStatement = 'I hope this course is not full of jargon';
console.log(shortStatement.includes('jargon'));

/*
Question 7: Generate a random number between 0 and 100 inclusively. 
 */

//The Math.random() will generate a random number between 0 and 100 and the Math.floor() will floor any floating number to an integer.
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum); //The console will log the random num

/*
Question 8: Generate a random number between 50 and 100 inclusively.
 */
//The both methods will perform the same function, just in this case, the number is between 50 and 100.
let randomNum1 = Math.floor(Math.random() * 50) + 51;
console.log(randomNum1); //The console will log the random num

/*
Question 9: Generate a random number between 0 and 255 inclusively.
*/
//The methods will generate and floor any number between 0 and 255 to an int.
let randomNum2 = Math.floor(Math.random() * 256);
console.log(randomNum2); //The console will log the random num

/*
Question 10: Access the 'JavaScript' string characters using a random number.
*/

//The value 'JavaScript' is attributed to the variable accessStr 
let accessStr = 'JavaScript';
let firstStr = accessStr[0]; //The firstStr is declared  and used to access the above value with random number in the [] bracket
console.log(firstStr); //console will print out the accessed char

//Or

let word = 'JavaScript';
let wordLength = word.length;
let randomWord = Math.floor(Math.random() * wordLength);
console.log(randomWord);

/*
Question 11: Use console.log() and escape characters to print the following pattern.
*/
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125'); //The \t(tab) used in this function will create spaces within the letters


/*
Question 12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

let anyWord = 'You cannot end a sentence with because because because is a conjunction'
console.log(anyWord.substr(31, 24));
//I'm not sure about this I think the substr method will slice out all the phrase and print them.