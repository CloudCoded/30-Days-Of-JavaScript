What I Learn On The 8th-Feb-2023

# INTRODUCTION TO JAVASCRIPT

<p>JavaScript was initially created to "make web pages alive". JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).</p>
   <ul>
    <li> Node.js: To install node click visit www.node.js   
     How to create javascript code on google chrome console
    </li>
     <li>Console.log() function: To write our first JavaScript code, we used a built-in function console.log(). We passed an argument as input data, and the function displays the output. </li>
   <li> The console.log() function can take multiple parameters separated by commas.</li>
   
          
          The syntax looks like as follows:
          console.log(param1, param2, param3)
          
   </ul>
   
   # COMMENTS IN JAVASCRIPT

<p>We can add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. In JavaScript, any text line starting with // in JavaScript is a comment, and anything enclosed like this // is also a comment.</p>

  # WAYS OF ADDING JAVASCRIPT TO THE WEBPAGE
  <ul>
    <li> INLINE SCRIPT: An inline script is a script that is not loaded from an external file, but embedded inside HTML. A script tag without a src (ie. with code directly in the HTML document) is referred to as an inline script. 
    </li>
    <li> INTERNAL SCRIPT: The internal script can be written in the head or the body, but it is preferred to put it on the body of the HTML document.
    </li>
    <li> External Script: Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body. First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files.
    </li>
    <li>Multi-External Script => It means we can link more than .js extension to our html page</li>
  </ul>


   # VARIABLES
     
<p> Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.</p>

<p>For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const.</p>

     The following are examples of valid JavaScript variables.

     firstName
     lastName
     country
     city
     capitalCity
     age
     isMarried

     first_name
     last_name
     is_married
     capital_city

     num1
     num_1
     _num_1
     $num1
     year2020
     year_2020

 
# INTRODUCTION TO DATA TYPES:

<p>In JavaScript and also other programming languages, there are different types of data types. The following are JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol.</p>

     Numbers
     Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
     Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

     Strings
     A collection of one or more characters between two single quotes, double quotes, or backticks.

     Example:


     'Asabeneh'
     "Asabeneh" 
     `We can also create a string using a backtick`
     'A string could be just as small as one character or as big as many pages'
     'Any data type under a single quote, double quote or backtick is a string'

     Booleans
     A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

     A boolean data type is either a true or false value.

     Example:

     true // if the light is on, the value is true
     false // if the light is off, the value is false
     Undefined
     In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

     let firstName
     console.log(firstName) // undefined, because it is not assigned to a value 
     
     Null
     Null in JavaScript means an empty value.

     let emptyValue = null


     CHECKING DATA TYPES
     To check the data type of a certain variable, we use the typeof operator. See the following example.

     console.log(typeof 'Asabeneh') // string
     console.log(typeof 5) // number
     console.log(typeof true) // boolean
     console.log(typeof null) // object type
     console.log(typeof undefined) // undefined
