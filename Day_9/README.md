What I Learned On The 6th April 2023

# HIGHER ORDER FUNCTION
<p>Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.</p>

## Callback
<p>A callback is a function which can be passed as parameter to other function. See the example below.</p>

     // a callback function, the name of the function could be any name
     const callback = (n) => {
       return n ** 2
     }
​
     // function that takes other function as a callback
     function cube(callback, n) {
       return callback(n) * n
     }
​
     console.log(cube(callback, 3))