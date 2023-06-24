/*
Question 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
*/
 // Declare variables and assigned variables
 const firstName = 'John';
 const lastName = 'Doe';
 const country = 'Ukraine';
 const city = 'Shaktar'; 
 let age = 59;
 let isMarried = 'single';
 let year = 2028;

 // Check different data types
 console.log(typeof(firstName));
 console.log(typeof(lastName));
 console.log(typeof(country));
 console.log(typeof(city));
 console.log(typeof(age));
 console.log(typeof(isMarried));
 console.log(typeof(year));

 /*
 Question 2: Check if type of '10' is equal to 10
 */
// data type check
console.log('10' == 10); //This will print true because values are the same
console.log('10' === 10); //This will output false because the data types are the different

 /*
 Question 3: Check if parseInt('9.8') is equal to 10
 */

// check if the floating number is equal to int 10
console.log(parseInt('9.8') === 10) //The parseInt() prototype will convert the floating number to an int 9 and 9 is not equal to 10, so this will print false

 /*
 Question 4: Boolean value is either true or false.
 Write three JavaScript statement which provide truthy value.
 Write three JavaScript statement which provide falsy value.
 */

 //TRUTHY VALUES
        let num = 50;
        
        if(num > 0){
            console.log(true);
        } //1. The variable num is greater than 0, the statement is true

        if(num = 0 || num < 100){
            console.log(true);
        } else {
            console.log(false);
        } //2. The num variable is less than 100 so the statement is true, we jus need one argument to be true when using the  || operator

        if(num > -1) console.log(true) //3. This statement is true because num is greater than negative num


        //FALSY VALUES
        const myName = 'ola';

        if(myName.includes('A')){
            console.log(true);
        } else {
            console.log(false);
        }//1. The includes() check if 'A' is in the string and will returns false because all the chars are smallletters

        if(myName.startsWith('O')){
            console.log(true);
        } else{
            console.log(false);
        }//2. This statment will return false because the string value assigned to const myName are all small chars

        function falStat(getNumber){
            return(getNumber ? true : false)
        }
        console.log(falStat(false));//3. This ternary operator will return false

 /*
 Question 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
 */
 
 let checkNum = 4 > 3; //Checking the comparison expression
 checkNum; //true
 console.log(checkNum);//confirming the result with console.log().

 let checkNum1 = 4 >= 3;
 checkNum1;
 console.log(checkNum1);

 let checkNum2 = 4 < 3;
 checkNum2;
 console.log(checkNum2);

 let checkNum3 = 4 <= 3;
 checkNum3;
 console.log(checkNum3);

 let checkNum4 = 4 == 4 || 4 === 4; //The first comparison will check jus the values while the other comparison will check if the values and data types are the same
 checkNum4; //true because both the value and data types are the same
 console.log(checkNum4); // The console.log() will confirm the result

 let checkNum5 = 4 != 4 && 4 !== 4;
 checkNum5;
 console.log(checkNum5);//The result will be opposite of the comparison expression above

 let numStr = 4 != '4'; //Check the comparison express
 numStr; //true
 console.log(numStr); //confirm the result

 let numStr1 = 4 == '4';
 numStr1; //true because the number str type and number have the same value
 console.log(numStr1); //confirm the result

 let numStr2 = 4 === '4';
 numStr2; // False because the === comparison will check if data types are the same before the value
 console.log(numStr2);

 // Find the length of 'jargon' and 'python' and return a falsy statement
 let str1 = 'jargon', str2 = 'python';
 console.log(str1.length); // 6
 console.log(str2.length); // 6
 if(str1.length != str2.length){
    console.log(true)
 } else {
    console.log(false)
 } // false statement


 /*
 Question 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
 */

let comEx = 4 > 3 && 10 < 12;
comEx; //true
console.log(comEx);

let comEx1 = 4 > 3 && 10 > 12;
comEx1; //false
console.log(comEx1);

let comEx2 = 4 > 3 || 10 < 12;
comEx2; //true
console.log(comEx2);

let comEx3 = 4 > 3 || 10 > 12;
comEx3; //true
console.log(comEx3);

let comExNeg = !(4 < 3) //true => The ! operator negates true to false and false to true
let comExNeg1 = !(4 > 3) //false
let comExNeg2 = !(false) //true
let comExNeg3 = !(4 > 3 && 10 < 12) //false
let comExNeg4 = !(4 > 3 && 10 > 12) //true

// There is no 'on' in both dragon and python
let check = 'python', check2 = 'jargon';

check = !('on'); //false because the ! operator negates true to false.
check2 = !('on'); //false


 /*
 Question 7: Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

const now = new Date() //creating a new time object
console.log(now) //The time object will provide info about time => Tue Feb 21 2023 12:45:07 GMT-0500 (Eastern Standard Time)
console.log(now.getFullYear()); //2023
console.log(now.getMonth()); // 1, the month starts from 0 index
console.log(now.getDate()) // 21
console.log(now.getDay()) // 2
console.log(now.getHours()) // 12
console.log(now.getMinutes()) //45
console.log(now.getTime()) // 1677001507912


