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
}

class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.pet1 = pet1
    }
    
    //Ovverride the color property
    get color(){
        return 'brown';
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.pet2 = pet2;
    }
    
    //Override the color property
    get color(){
        return 'white';
    }
}

const myDog = new Dog('Ghost', 4, 'black', 4, 'German Shepherd');
console.log(myDog.name)
console.log(myDog.age)
console.log(myDog.color)
console.log(myDog.legs)
console.log(myDog.pet1)


const myCat = new Cat('Kim', 4, 'goldish', 4, 'leo');
console.log(myCat.name)
console.log(myCat.age)
console.log(myCat.color)
console.log(myCat.legs)
console.log(myCat.pet2)