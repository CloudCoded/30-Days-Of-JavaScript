/*
Question 1: Find a union b
*/

//Answer
let a = [1, 2, 3, 4, 5]
let b =[3, 4, 5, 6]
let union = [...a, ...b] //spread method

let c = new Set(union)

console.log(c);

/*
Question 2: Find a intersection b
*/

//Answer
let A = new Set(a)
let B = new Set(b)
let intersect = a.filter((num) => B.has(num))

console.log(intersect);

/*
Question 3: Find a with b
*/

//Answer
