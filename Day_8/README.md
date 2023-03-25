What I Learned on the 25th Of March 2023

# SCOPE

## GLOBAL SCOPE
<p>A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.</p>  

     //scope.js
        let a = 'JavaScript' // is a global scope it will be found anywhere in this file
        let b = 10 // is a global scope it will be found anywhere in this file
        function letsLearnScope() {
          console.log(a, b) // JavaScript 10, accessible
          if (true) {
             let a = 'Python'
             let b = 100
             console.log(a, b) // Python 100
        }
        console.log(a, b)
    }
    letsLearnScope()
    console.log(a, b) // JavaScript 10, accessible


## LOCAL SCOPE
<p>A variable declared as local can be accessed only in certain block code.</p>

<ul>
  <li>Block Scope</li>
  <li>Function Scope</li>
</ul>


     //scope.js
     let a = 'JavaScript' // is a global scope it will be found anywhere in this file
     let b = 10 // is a global scope it will be found anywhere in this file
     // Function scope
     function letsLearnScope() {
       console.log(a, b) // JavaScript 10, accessible
       let value = false
     // block scope
       if (true) {
         // we can access from the function and outside the function but 
         // variables declared inside the if will not be accessed outside the if block
         let a = 'Python'
         let b = 20
         let c = 30
         let d = 40
         value = !value
         console.log(a, b, c, value) // Python 20 30 true
       }
       // we can not access c because c's scope is only the if block
       console.log(a, b, value) // JavaScript 10 true
     }
     letsLearnScope()
     console.log(a, b) // JavaScript 10, accessible

A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).


# OBJECT
<p>An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.</p>

An example:
     const person = {};


## Getting values from an object
<p>We can access values of object using two methods:</p>

<ul>
  <li>using . followed by key name if the key-name is a one word</li>
  <li>using square bracket and a quote</li>
</ul>

## Setting new key for an object
<p>An object is a mutable data structure and we can modify the content of an object after it gets created.</p>

## Creating object methods
<p>Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:</p>