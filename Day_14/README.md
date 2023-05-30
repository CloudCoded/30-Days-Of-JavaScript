What I learnt on 29th of May 2023

# Error Handlings And Types
<p>JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc <br> 

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.</p>

     try {
       // code that may throw an error
     } catch (err) {
        // code to be executed if an error occurs
     } finally {
        // code to be executed regardless of an error occurs or not
     }

<p><b>try</b>: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

<br>

<b>catch</b>: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

<br>

<b>finally</b>: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.</p>

     try {
           let lastName = 'Yetayeh'
           let fullName = fistName + ' ' + lastName
         } catch (err) {
            console.error(err) // we can use console.log() or console.error()
         } finally {
           console.log('In any case I will be executed')
         }

         ReferenceError: fistName is not defined
            at <anonymous>:4:20
         In any case it  will be executed


<p><b>throw</b>: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:</p>

     throw 'Error2' // generates an exception with a string value
     throw 42 // generates an exception with the value 42
     throw true // generates an exception with the value true
     throw new Error('Required') // generates an error object with the message of Required

     const throwErrorExampleFun = () => {
       let message
       let x = prompt('Enter a number: ')
       try {
         if (x == '') throw 'empty'
         if (isNaN(x)) throw 'not a number'
         x = Number(x)
         if (x < 5) throw 'too low'
         if (x > 10) throw 'too high'
       } catch (err) {
         console.log(err)
       }
     }
     throwErrorExampleFun()

## Erro Types
~ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

~SyntaxError: A syntax error has occurred

~TypeError: A type error has occurred


