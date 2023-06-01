/*
Question 1: Create an Animal class. The class will have name, age, color, legs properties and create different methods
*/

//Answer
class Animal {
    constructor(name, age, color, legs){
        console.log(this)
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}

const dog = new Animal('Ghost', 6, 'Black', 'transparent');
console.log(dog);