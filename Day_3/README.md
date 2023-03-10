On The 17th Of February 2023 I Learned The Following:

# BOOLEAN 
<p> A boolean data type represent one of two values (TRUE OR FALSE)</p>

## TRUTHY VALUES
<ul>
 <li>All numbers(positive and negative) are true except zero</li>
 <li>All strings are true except empty string('')</li>
 <li>The boolean true</li>
</ul>

## FALSY VALUES
<ul>
 <li> 0</li>
 <li> 0n</li>
 <li> Undefined, NaN, The boolean false, '' etc.</li>
</ul>
<hr>

## OPERATORS  
<p>Assignment, Arithmetic, Comparison, Logical, Increment, Ternary Operators</p>
<ol>
 <li>Assignment Operator: Example of assignment operators are(=, +=, -=, *=, /=, %=, **=). These are used to assign values</li>
 <li>Arithmetic Operator: These are mathematical operator(+, -, *, /, %, **)</li>
 <li>Comparison Operator: This operator is used to compare values(==, ===, !=, >, <, =>, <=)</li>
 <li>Logical Operator: The following symbols are the common logical operators, &&(ampersand), ||(pipe, or), & !(negation). The && operator gets true only if the two operands are true. The || operator gets true if one of the operand is true. The ! operator negates true to false and false to true.</li>
 <li>Increment Operator: In Js, this operator is used to increase value stored in a variable while decrement operator is the opposite (count++, count--)</li>
 <li>Ternary Operator: It allows us to write a conditional statement instead of using if/else statement.</li>
 <li>Operator Precedence: It determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence. e.g console.log(3 + 4 * 5), the higher precedence here is (4 * 5).</li>
</ol>

<hr>


## WINDOWS METHOD
<ol>
 <li>Window alert() 
 <p> It display an alert box with a specified message and an OK button. It is a builtin method, e.g alert(message)</p>
 </li>
 <li>Window prompt() 
 <p>It display a prompt box with an input on the browser to take input values & data stored in a variable.</p>
 </li>
 <li>Window confirm()
 <p> It displays a dialog box with a specified message, along with an OK and CANCEL button. It is often used to ask permission from a user to execute something.</p>
 </li>
</ol>

<hr>


## DATA OBJECT

<p>In JavaScript, current time & date is created using JavaScript Date Object. The methods we use to get date & time info from a date object values are started with a word (get) because it provide the info: </p>
<ul>
<li>getFullYear()</li>
<li> getMonth()</li>
<li>getDate()</li>
<li>getHour()</li>
<li> getDay()</li>
<li>getTime()</li>
<li> getSeconds()</li>
<li> getMinutes()</li>
<li> getMilliseconds()</li>
<li> Creating a time: </li> 

         const now = new Date()
         console.log(now)
</ul>