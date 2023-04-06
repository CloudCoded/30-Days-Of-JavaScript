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

## Returning function
<p>Higher order functions return function as a value​</p>

     // Higher order function returning an other function
     const higherOrder = n => {
       const doSomething = m => {
         const doWhatEver = t => {
           return 2 * n + 3 * m + t
         }
         return doWhatEver
       }
       return doSomething
     }
     console.log(higherOrder(2)(3)(10))

Let us see were we use call back functions. For instance the forEach method uses call back.

     const numbers = [1, 2, 3, 4, 5]
     const sumArray = arr => {
       let sum = 0
       const callback = function(element) {
         sum += element
       }
       arr.forEach(callback)
       return sum

     }
     console.log(sumArray(numbers)) //15

## Setting time
<p>In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.</p>

<ul>
 <li>setInterval</li>
 <li>setTimeout</li>
</ul>

<i><b>Setting Interval using a setInterval function</b></i>

<p>In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.</p>

     // syntax
     function callback() {
       // code goes here
     }
     setInterval(callback, duration)

     function sayHello() {
       console.log('Hello')
     }
     setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

<i><b>Setting a time using a setTimeout</i></b>

<p>In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.</p>

     // syntax
     function callback() {
       // code goes here
     }
     setTimeout(callback, duration) // duration in milliseconds

     function sayHello() {
       console.log('Hello')
     }
     setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.


## Functional Programming

<p>Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.</p>

## forEach

<p>forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.</p>

     arr.forEach(function (element, index, arr) {
       console.log(index, element, arr)
     })
     // The above code can be written using arrow function
     arr.forEach((element, index, arr) => {
       console.log(index, element, arr)
     })
     // The above code can be written using arrow function and explicit return
     arr.forEach((element, index, arr) => console.log(index, element, arr))

     let sum = 0;
     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach(num => console.log(num))
     console.log(sum) //1 2 3 4 5

     let sum = 0;
     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach(num => sum += num)

     console.log(sum) //15

     const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
     countries.forEach((element) => console.log(element.toUpperCase())) //All to uppercase


## map
<p>map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.</p>

     /*Arrow function and explicit return
     const modifiedArray = arr.map((element,index) => element);
     */
     //Example
     const numbers = [1, 2, 3, 4, 5]
     const numbersSquare = numbers.map((num) => num * num)

     console.log(numbersSquare) //[1 4 9 16 25]

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     const namesToUpperCase = names.map((name) => name.toUpperCase())
     console.log(namesToUpperCase) //['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

     const countries = [
       'Albania',
       'Bolivia',
       'Canada',
       'Denmark',
       'Ethiopia',
       'Finland',
       'Germany',
       'Hungary',
       'Ireland',
       'Japan',
       'Kenya',
     ]
     const countriesToUpperCase = countries.map((country) => country.toUpperCase())
     console.log(countriesToUpperCase)

    
     // Arrow function
     const countriesToUpperCase = countries.map((country) => {
       return country.toUpperCase();
     })
     //Explicit return arrow function
     const countriesToUpperCase = countries.map(country => country.toUpperCase());


     const countriesFirstThreeLetters = countries.map((country) =>
       country.toUpperCase().slice(0, 3)
     )

      ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]

## filter
<p>Filter: Filter out items which full fill filtering conditions and return a new array.</p>

     //Filter countries containing land
     const countriesContainingLand = countries.filter((country) =>
       country.includes('land')
     )
     console.log(countriesContainingLand) //['Finland', 'Ireland']

     const countriesHaveFiveLetters = countries.filter(
       (country) => country.length === 5
     )
     console.log(countriesHaveFiveLetters) // ['Japan', 'Kenya']


     const scores = [
       { name: 'Asabeneh', score: 95 },
       { name: 'Lidiya', score: 98 },
       { name: 'Mathias', score: 80 },
       { name: 'Elias', score: 50 },
       { name: 'Martha', score: 85 },
       { name: 'John', score: 100 },
     ]

     const scoresGreaterEighty = scores.filter((score) => score.score > 80)
     console.log(scoresGreaterEighty)

     [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

## reduce
<p>reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.</p>

     arr.reduce((acc, cur) => {
       // some operations goes here before returning a value
      return 
     }, initialValue)

     const numbers = [1, 2, 3, 4, 5]
     const sum = numbers.reduce((acc, cur) => acc + cur, 0)

     console.log(sum) //15

## every
<p>every: Check if all the elements are similar in one aspect. It returns boolean</p>

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

     console.log(areAllStr) //true


## find
<p>find: Return the first element which satisfies the condition</p>

     const ages = [24, 22, 25, 32, 35, 18]
     const age = ages.find((age) => age < 20)

     console.log(age) //18

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     const result = names.find((name) => name.length > 7)
     console.log(result) //Asabeneh

     const scores = [
       { name: 'Asabeneh', score: 95 },
       { name: 'Mathias', score: 80 },
       { name: 'Elias', score: 50 },
       { name: 'Martha', score: 85 },
       { name: 'John', score: 100 },
     ]

     const score = scores.find((user) => user.score > 80)
     console.log(score) //{ name: "Asabeneh", score: 95 }

## findIndex
<p>findIndex: Return the position of the first element which satisfies the condition</p>

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     const ages = [24, 22, 25, 32, 35, 18]

     const result = names.findIndex((name) => name.length > 7)
     console.log(result) // Asabeneh

     const age = ages.findIndex((age) => age < 20)
     console.log(age) // 18

## some
<p>some: Check if some of the elements are similar in one aspect. It returns boolean</p>

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     const bools = [true, true, true, true]

     const areSomeTrue = bools.some((b) =>  b === true)

     console.log(areSomeTrue) //true

     const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
     console.log(areAllStr) // false

## sort
