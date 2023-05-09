/*
Question 1: How many languages are there in the countries object file.
*/

//Answer
import countries from '/countries.js'

// Initialize an empty object to store the languages
const languages = {};

// Loop through each object in the countries array
countries.forEach(country => {
     // Loop through each language in the current country's languages array
     country.languages.forEach(language => {
        // Add the language to the languages object if it doesn't exist
        if (!languages[language]) {
            languages[language] = true;
        }
  
     })
})

/*
Question 2: *** Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/

//Answer
const mostSpokenLanguages = (arr, num) => { //This line declares a function called mostSpokenLanguages that takes two parameters: an array arr and a number num.
    const lanCount = new Map(); //This line initializes a new Map object called lanCount, which will be used to count the number of occurrences of each language in the arr array.
    arr.forEach(country => { 
        country.language.forEach(lang => {
            if(!lanCount.has(lang)){
                lanCount.set(lang, 1);
            }
            else{
                lanCount.set(lang, lanCount.get(lang) + 1);
            }
        });
    });

    /*
    This code uses nested forEach loops to iterate through each country object in the arr array, and then through each language in the language array of that country. It then checks whether the lanCount Map already has an entry for that language. If not, it sets the count for that language to 1. If it does, it increments the count for that language.
    */

    const sorted = [...lanCount.entries()].sort((a, b) => b[1] - a[1]); 

    /*
    This line converts the lanCount Map into an array of [key, value] pairs using the entries() method of the Map object, spreads it into a new array using the spread syntax (...), and then sorts the array in descending order based on the second element (value) of each pair.
    */

    console.log(sorted.slice(0, num)); // This line logs the first num elements of the sorted array to the console, which represents the num most frequently spoken languages.
    return sorted.slice(0, num); //This line returns the first num elements of the sorted array as the output of the mostSpokenLanguages function.


};

mostSpokenLanguages(countries, 10);
mostSpokenLanguages(countries, 3);