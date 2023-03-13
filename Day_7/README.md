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

### Unlimited number of parameters in arrow function
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
