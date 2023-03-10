What I Learned On 27th Feb 2023

# ARRAYS
# METHODS TO MANIPULATES APP
# ARRAY OF ARRAYS

<p><b><i>Why working on the task I learned about Math.min.apply(Math, arr) or Math.min(...arr) // Math.max.apply(Math, arr) or Math.max(...arr) to print the min and max number in an array respectively. The Math.abs() static method returns the absolute value of a number e.g -5 will return 5</i></b></p>


## METHODS TO MANIPULATE ARRAY
<p>There are different methods to manipulate an array. These are some of the available methods to deal with arrays: <br> Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift</p>

<ul><li> Fill:
 <p>Fill all the array elements with a static value</p>
  </li>
    
     const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
     console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']


<li> concat:
<p>To concatenate two arrays.</p>
</li>

     const firstList = [1, 2, 3]
     const secondList = [4, 5, 6]
     const thirdList = firstList.concat(secondList)

     console.log(thirdList) // [1, 2, 3, 4, 5, 6]


<li> Length:
<p>To know the size of the array</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     console.log(numbers.length) // -> 5 is the size of the array


<li> indexOf:
<p>To check if an item exist in an array. If it exists it returns the index else it returns -1.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]

     console.log(numbers.indexOf(5)) // -> 4
     console.log(numbers.indexOf(0)) // -> -1
     console.log(numbers.indexOf(1)) // -> 0
     console.log(numbers.indexOf(6)) // -> -1


<p> Check items in a list</p>

     // let us check if a banana exist in the array

     const fruits = ['banana', 'orange', 'mango', 'lemon']
     let index = fruits.indexOf('banana')  // 0

     if(index === -1){
     console.log('This fruit does not exist in the array')  
     } else {
     console.log('This fruit does exist in the array')
     }
     // This fruit does exist in the array

     // we can use also ternary here
     index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')


<li> lastIndexOf:
<p> It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.</p>
</li>

     const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

     console.log(numbers.lastIndexOf(2)) // 7
     console.log(numbers.lastIndexOf(0)) // -1
     console.log(numbers.lastIndexOf(1)) //  6
     console.log(numbers.lastIndexOf(4)) //  3
     console.log(numbers.lastIndexOf(6)) // -1



<li> includes:
<p>To check if an item exist in an array. If it exist it returns the true else it returns false.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]

     console.log(numbers.includes(5)) // true
     console.log(numbers.includes(0)) // false
     console.log(numbers.includes(1)) // true
     console.log(numbers.includes(6)) // false



<li> Array.isArray:
<p>To check if the data type is an array</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     console.log(Array.isArray(numbers)) // true

     const number = 100
     console.log(Array.isArray(number)) // false


<li> toString:
<p>Converts array to string</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     console.log(numbers.toString()) // 1,2,3,4,5

     const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
     console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook



<li> join:
<p> It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     console.log(numbers.join()) // 1,2,3,4,5



<li> Splice method in array
<p>Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     numbers.splice()
     console.log(numbers)                // -> remove all items

     const numbers = [1, 2, 3, 4, 5]
	   numbers.splice(0,1)
     console.log(numbers)            // remove the first item

     const numbers = [1, 2, 3, 4, 5, 6]
	   numbers.splice(3, 3, 7, 8, 9)
     console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items



<li> Push: 
<p>Adding item in the end. To add item to the end of an existing array we use the push method.</p>
</li>

     // syntax
     const arr  = ['item1', 'item2','item3']
     arr.push('new item')
     console.log(arr)
     // ['item1', 'item2','item3','new item']



<li> pop:
<p> Removing item in the end.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     numbers.pop() // -> remove one item from the end
     console.log(numbers) // -> [1,2,3,4]



<li> shift: 
<p>Removing one array element in the beginning of the array.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     numbers.shift() // -> remove one item from the beginning
     console.log(numbers) // -> [2,3,4,5]



<li> unshift:
<p> Adding array element in the beginning of the array.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     numbers.unshift(0) // -> add one item from the beginning
     console.log(numbers) // -> [0,1,2,3,4,5]



<li> Reversing array order
<p>Reverse: reverse the order of an array.</p>
</li>

     const numbers = [1, 2, 3, 4, 5]
     numbers.reverse() // -> reverse array order
     console.log(numbers) // [5, 4, 3, 2, 1]



<li> Sort:
<p>Arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.</p>
</li>

     const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
     ]

     webTechs.sort()
     console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

     webTechs.reverse() // after sorting we can reverse it
     console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

     Another Example 
     const aages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
     ages.sort(function(a, b) {
     return a - b; (or b - a to reverse it)
     });

<li>isArray
<p> Array can store different data types including an array itself. Let us create an array of arrays</p>
</li>

      const firstNums = [1, 2, 3]
      const secondNums = [1, 4, 9]

      const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
      console.log(arrayOfArray[0]) // [1, 2, 3]

      const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
      const backEnd = ['Node','Express', 'MongoDB']
      const fullStack = [frontEnd, backEnd]
      console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
      console.log(fullStack.length)  // 2
      console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
      console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]