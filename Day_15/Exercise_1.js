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

const newAnimal = new Animal('Ghost', 6, 'Black', 'transparent');
console.log(newAnimal);

/*
Question 2: Create a Dog and Cat child class from the Animal Class.
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

class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.pet1 = pet1
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.pet2 = pet2;
    }
}

const myDog = new Dog('Ghost', 4, 'black', 4, 'German Shepherd');
console.log(myDog.name)
console.log(myDog.age)
console.log(myDog.color)
console.log(myDog.legs)
console.log(myDog.pet1)
