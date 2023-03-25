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

