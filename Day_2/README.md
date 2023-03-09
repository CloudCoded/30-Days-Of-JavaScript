What I Learn On The 12th-Feb-2023

# DATA TYPES

## PRIMITIVE DATA TYPES
<p> These data types are immutable. They are as follow: </p>
<ul>
  <li>Number</li>
  <li>String</li>
  <li>Boolean</li>
  <li>Undefined</li>
  <li>Null</li>
  <li>Symbol</li>
</ul>

## NON-PRIMITIVES 
<p> These data types are mutable. They are as follow: </p>
<ul>
 <li>Array</li>
 <li>Object</li>
</ul>
<hr>


## MATH OBJECT
<P>In JavaScript, the math object provides lots of methods to work with  numbers. These methods are: </p> 
<ul>
 <li> Math.random () </li> 
 <li> Math.floor () </li>
 <li> Math.min () </li> 
 <li> Math.ceil ()</li> 
 <li> Math.max ()</li> 
 <li> Math.log ()</li> 
 <li> Math.pow ()</li> 
 <li> Math.sqrt () etc. </li>



## ESCAPE SEQUENCES
<p> In JS, \ followed by some characters is an escape sequence. </p>
 
     for example:

     \n: new line
     \t: Tab, means 8 spaces
     \\: Back slash
     \': Single quote (')
     \": Double quote (")



## STRING METHODS
<p>Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. </p>

<p>Here are the commonly used JavaScript String methods: </p>
<table border="0">
 <tbody>
   <tr>
     <th>Method</th>
     <th>Description</th>
   </tr>
   <tr>
     <th>Method</th>
     <th>Description</th>
   </tr>
   <tr>
     <td>charAt(index)</td>
     <td>returns the character at the specified index</td>
   </tr>
   <tr>
     <td>concat()</td>
     <td>joins two or more strings</td>
   </tr>
   <tr>
     <td>replace()</td>
     <td>replaces a string with another string</td>
   </tr>
   <tr>
     <td>split()</td>
     <td>converts the string to an array of strings</td>
   </tr>
   <tr>
     <td>substr(start, length)</td>
     <td>returns a part of a string</td>
   </tr>
   <tr>
     <td>substring(start, end)</td>
     <td>returns a part of a string</td>
   </tr>
   <tr>
     <td>slice(start, end)</td>
     <td>returns a part of a string</td>
   </tr>
   <tr>
     <td>toLowerCase()</td>
     <td>returns the passed string in lower case</td>
   </tr>
   <tr>
     <td>toUpperCase()</td>
     <td>returns the passed string in upper case</td>
   </tr>
   <tr>
     <td>trim()</td>
     <td>removes whitespace from strings</td>
   </tr>
   <tr>
     <td>includes()</td>
     <td>searches for a string and returns a boolean value</td>
   </tr>
   <tr>
     <td>search()</td>
     <td>searches for a string and returns a position of a match. check out https://developer.mozilla.org/ for more information on string methods</td>
   </tr>
 </tbody>
</table>



## DATA TYPES CASTING
<p>Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.</p>

##### STRING TO INT
<p>We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:</p>

<ul>
 <li>parseInt ()</li>
 <li>Number ()</li>
 <li>Plus sign(+)</li>
</ul>

     
     
     let num = '10'
     let numInt = parseInt(num)
     console.log(numInt) // 10

     let num = '10'
     let numInt = Number(num)

     console.log(numInt) // 10

     let num = '10'
     let numInt = +num

     console.log(numInt) // 10


##### STRING TO FLOAT
<p>We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods: </p>

<ul>
 <li>parseFloat ()</li>
 <li>Number ()</li>
 <li>Plus sign(+)</li>
</ul>

    

     let num = '9.81'
     let numFloat = parseFloat(num)

     console.log(numFloat) // 9.81

     let num = '9.81'
     let numFloat = Number(num)

     console.log(numFloat) // 9.81

     let num = '9.81'
     let numFloat = +num

     console.log(numFloat) // 9.81


##### FLOAT TO INT
<p>We can convert float numbers to integers. We use the following method to convert float to int: </p>

<ul>
 <li>parseInt</li>
</ul>

     

     let num = 9.81
     let numInt = parseInt(num)

     console.log(numInt) // 9