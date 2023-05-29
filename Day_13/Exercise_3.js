/*
Question 1: Check the speed difference among the following loops: while, for, for of, forEach
*/

//Answer
const lagosCities = ['mushin', 'maryland', 'ilupeju', 'isolo', 'surulere', 'ikoyi']

console.time('for loop')
for(let i = 0; i < lagosCities.length; i++){
    console.log(lagosCities[i])
}
console.timeEnd('for loop')

console.time('for of loop')
for(const [city] of lagosCities){
    console.log(city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
lagosCities.forEach(([city]) => {
    console.log(city)
})
console.timeEnd('forEach loop');