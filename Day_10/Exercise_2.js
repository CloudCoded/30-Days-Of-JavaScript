const a = [1, 2, 3, 4, 5]
const b =[3, 4, 5, 6]

/*
Question 1: Find a union b
*/

//Answer
const union = [...a, ...b] //spread method

const c = new Set(union)

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
const aB = a.concat(b);
console.log(aB)
