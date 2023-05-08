/*
Question 1: How many languages are there in the countries object file.
*/

//Answer
import countries from '/countries.js'

const allLang = () => {
    let count = 0;
    for(let i = 0; i < countries.length; i++){
        count++;
    }
    console.log(count);
}
allLang();