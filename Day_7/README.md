What I Learned On 13th of March 2023

<h1 style="text-align: center;"> FUNCTION </h1>
<p>A function is a reusable block of code or programming statements designed to perform a particular task. A function is declared by a function keyword followed by a name, followed by parenthesis(). A parenthesis can take a parameter and if so, it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value, we call or invoke a function.<br>

A function can be declared or created in couple ways: </p>

<ul>
 <li>Declaration function</li>
 <li>Expression function</li>
 <li>Anonymous function</li>
 <li>Arrow function</li>
</ul>

## FUNCTION DECLARATION
<p>How to declare and how to call a function</p>
     //declare a function without a parameter
     function functionName() {
        //code goes here
     }
     functionName() // calling a function by its name and parenthesis

<p>In a function we also pass function with parameter(s) or unlimited parameters with an arrow function or loop

     //syntax
     function concatName(first, last) {
        let fullName = first + last
        return fullName
     }
     console.log(concatName('Ali ', 'Baba'));

     // Many parameters
     function addSums(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum
     }
     const arrNumbers = [1, 2, 3, 4] //To add arr numbers
     console.log(addSums(10, 20 , 30));
     console.log(addSums(arrNumbers));

<b>Unlimited number of parameters in arrow function</b>
<p>To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function.<br> Let us see an example: </p>

     //Let's access the arguments object
     const sumAllNums = (...args) => {
     // console.log(arguments), arguments object not found in arrow function
     // instead we use a parameter followed by spread operator (...)
     console.log(args)
    }

     sumAllNums(1, 2, 3, 4)
     // [1, 2, 3, 4]

     // function declaration

     const sumAllNums = (...args) => {
     let sum = 0
     for (const element of args) {
     sum += element
     }
     return sum
     }

     console.log(sumAllNums(1, 2, 3, 4)) // 10
     console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
     console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

## ANONYMOUS FUNCTION
<p>An anonymous function in javascript is not accessible after its initial creation. Therefore, we need to assign it to a variable, so that we can use its value later. They are always invoked (called) using the variable name. Also, we create anonymous functions in JavaScript, where we want to use functions as values.</p>

     const anonymousFun = function() {
     console.log(
       'I am an anonymous function and my value is stored in anonymousFun'
     )
    }


     //1
     let variableName = function () {
          //your code here
     }

     variableName();     //Can call the anonymous function through this
<hr>

     //2
     let demo = function (){
     console.log("Example of anonymous functions");
     }
     demo();

     //Output
     "Example of anonymous functions"
 <hr>

     let area = function(length, breadth){
     return length * breadth 
     }
     let x = area(10,5) 
     console.log("Area of the rectangle is = ", x);

     //Output
      "Area of the rectangle is = " 50
<hr>

     button.addEventListener('click', 
         function(event) {
         alert('Button is clicked!')
    })


## EXPRESSION FUNCTION
<p>Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.</p>

     // Function expression
     const square = function(n) {
       return n * n
    }

     console.log(square(2)) // -> 4

## SELF INVOKING FUNCTIONS
<p>Self invoking functions are anonymous functions which do not need to be called to return a value.</p>

     (function(n) {
       console.log(n * n)
     })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

     let squaredNum = (function(n) {
       return n * n
     })(10)

     console.log(squaredNum)

## ARROW FUNCTION
<p>Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.</p>

     // This is how we write normal or declaration function
     // Let us change this declaration function to an arrow function
     function square(n) {
      return n * n
     }

     console.log(square(2)) // 4

     const square = n => {
       return n * n
     }

     console.log(square(2))  // -> 4

     // if we have only one line in the code block, it can be written as follows, explicit return
     const square = n => n * n  // -> 4

     Another example
     const changeToUpperCase = arr => {
       const newArr = []
       for (const element of arr) {
         newArr.push(element.toUpperCase())
       }
       return newArr
     }

     const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
     console.log(changeToUpperCase(countries))

     // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

## FUNCTION WITH DEFAULT PARAMETERS
<p> Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.</p>

<b>Example: </b>

     function greetings(name = 'Peter') {
       let message = `${name}, welcome to 30 Days Of JavaScript!`
       return message
     }

     console.log(greetings())
     console.log(greetings('Asabeneh'))

     //Example in arrow function
     // syntax
     // Declaring a function
     const functionName = (param = value) => {
        //codes
     }

     // Calling function
     functionName()
     functionName(arg)


     const greetings = (name = 'Peter') => {
        let message = name + ', welcome to 30 Days Of JavaScript!'
        return message
     }

     console.log(greetings())
     console.log(greetings('Asabeneh'))







