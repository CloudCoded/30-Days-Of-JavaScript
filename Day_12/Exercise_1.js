/*
Question 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/

//Answer
const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const extractNums = sentence.match(/\d+/g)
const monthSalary = parseInt(extractNums[0])
const bonus = parseInt(extractNums[1])
const onlineMonie = parseInt(extractNums[2])

const annualIncome = (monthSalary * 12) + bonus + (onlineMonie * 12)
console.log(annualIncome);

/*
Question 2:
*/
/*
Question 3:
*/