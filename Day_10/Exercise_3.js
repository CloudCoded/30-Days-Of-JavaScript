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
const mostSpokenLanguages = (arr, num) => {
    const lanCount = new Map();
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

    const sorted = [...lanCount.entries()].sort((a, b) => b[1] - a[1]);
    console.log(sorted.slice(0, num));
    return sorted.slice(0, num);
};

mostSpokenLanguages(countries, 10);
mostSpokenLanguages(countries, 3);