/*
Question 1: Create an empty object called dog
*/

//Answer
const dog = {};

/*
Question 2: Print the the dog object on the console
*/

//Answer
console.log(dog);

/*
Question 3: Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
*/

//Answer
const dogg = {
    nameOfDog: 'Ghost',
    legs: 'paw print',
    color: 'brown',
    bark: 'woof'
}
console.log(dogg);

/*
Question 4: Get name, legs, color, age and bark value from the dog object
*/

//Answer
const value = Object.values(dogg);
value;

/*
Question 5: Set new properties the dog object: breed, getDogInfo
*/

//Answer
dogg.breed = 'German shepherd'
dogg.getDogInfo = function (){
    return `${this.nameOfDog} is a ${this.color} ${this.breed} dog with ${this.legs} footprint, he ${this.bark} when everywhere is good`
}
console.log(dogg.getDogInfo());

