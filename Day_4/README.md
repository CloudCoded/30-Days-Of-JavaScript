What I learned on 25th of feb 2023

# CONDITIONALS 
## (conditional/repetitve execution)
<p>Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. <br>
There are multiple different types of conditionals in JavaScript including
</p>
<ul>
 <li><i>if</i> Statement</li>
 <li><i>else</i> Statement</li>
 <li><i>else if</i> Statement</li>
 <li><i>switch</i> Statement</li>
 <li><i>ternary operator<i></li>
</ul>

## if
<p>In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code.</p>

     // syntax
     if (condition) {
          //this part of code runs for truthy condition
     }

## if else
<p>If condition is true the first block will be executed, if not the else condition will be executed.</p>

     // syntax
     if (condition) {
          // this part of code runs for truthy condition
     } else {
          // this part of code runs for false condition
     }

## if, else if, else
<p>On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.</p>

     // syntax
     if (condition) {
           // code
     } else if (condition) {
           // code
     } else {
          //  code

     }

## switch
<p>Switch statement is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.</p>

     switch(caseValue){
        case 1:
          // code
          break
        case 2:
          // code
          break
        case 3:
          // code
          break
        default:
         // code
     }

## ternary operator
<p>Another way to write conditionals is using ternary operators. We have covered this in other sections, but we should also mention it here.</p>

     let isRaining = true
     isRaining
       ? console.log('You need a rain coat.')
       : console.log('No need for a rain coat.')