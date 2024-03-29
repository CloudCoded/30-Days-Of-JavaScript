/*
Question 2: Override the method you create in Animal class
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

    makeSound(){
        console.log('The animal makes a sound.')
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, pet1){
        super(name, age, color, legs)
        this.pet1 = pet1
    }
    
    //Ovverride 
    makeSound(){
        console.log('The dog bark');
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, pet2){
        super(name, age, color, legs)
        this.pet2 = pet2;
    }
    
    //Override
    makeSound(){
        console.log('The cat meow');
    }
}

const myDog = new Dog('Ghost', 4, 'black', 4, 'German Shepherd');
console.log(myDog.name)
console.log(myDog.age)
console.log(myDog.color)
console.log(myDog.legs)
console.log(myDog.pet1)
myDog.makeSound();


const myCat = new Cat('Kim', 4, 'goldish', 4, 'leo');
console.log(myCat.name)
console.log(myCat.age)
console.log(myCat.color)
console.log(myCat.legs)
console.log(myCat.pet2)
myCat.makeSound();