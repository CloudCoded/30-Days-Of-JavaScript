/*
Question 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
*/

//Answer
const userIdGeneratedByUser = () => { //This line declares a function named userIdGeneratedByUser using arrow function syntax.
    /*
    These following two lines prompt the user to enter two integers: the number of IDs to generate (id) and the length of each ID (num). The parseInt function is used to convert the user input to integers.
    */
    let id = parseInt(prompt('Enter id: '))
    let num = parseInt(prompt('Enter num: '))
    let ids = [];  // create an array to store the generated IDs
    for (let i = 0; i < id; i++) { //This line starts a for loop that will execute id times. In each iteration of the loop, a new ID will be generated.
        let randId = Math.random().toString(16).substring(2, num);
        /*
        This line generates a new random string of characters using the Math.random() function. The string is converted to base 36 using the .toString(36) method and it must be noted that to use base 36 is not compulsory,you can use base 16 or higher base depending on the specific requirement of the application, and then the first two characters are removed using the .substring(2) method to ensure that the string starts with an alphabetic character.
        */
        ids.push(randId); // push each new ID to the array
    }
    return ids.toString();  // convert the array to a string and return it
}

userIdGen(); // call the function to generate the IDs

// The below programs will generate just one id and while the latter will generate an array of Id numbers

const userIdGen = () => {                     // Declare a constant variable `userIdGen` as an arrow function that takes no arguments
    let id = parseInt(prompt('Enter id: '))  // Declare a variable `id` and set its value to the integer returned from the user prompt for entering an id
    let num = parseInt(prompt('Enter num: '))// Declare a variable `num` and set its value to the integer returned from the user prompt for entering a number
    let ranId = '';                          // Declare a variable `ranId` and initialize its value to an empty string
    for (let i = 0; i < id; i++) {            // Start a for loop that will execute `id` number of times, incrementing `i` by 1 each time
        ranId = Math.random().toString(36).substring(2, num);  // Generate a random string using `Math.random()` method, convert it to base 36 using `toString()`, and remove the first two characters using `substring()` and then assign the result to the `ranId` variable
    }
    return ranId                              // Return the final value of `ranId`
}

userIdGen()                                   // Call the `userIdGen()` function


//Generate an array ids



/*
Question 2: 
*/
/*
Question 3: 
*/
/*
Question 4: 
*/
/*
Question 5: 
*/
/*
Question 6: 
*/
/*
Question 7: 
*/
/*
Question 8: 
*/
/*
Question 9: 
*/
/*
Question 10: 
*/
/*
Question 11: 
*/
/*
Question 12: 
*/
/*
Question 13: 
*/
/*
Question 14: 
*/
/*
Question 15: 
*/
/*
Question 16: 
*/
/*
Question 17: 
*/
/*
Question 18: 
*/
/*
Question 19: 
*/
/*
Question 20: 
*/