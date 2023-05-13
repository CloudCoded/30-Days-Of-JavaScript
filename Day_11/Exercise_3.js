/*
Question 1: Destructure the countries object print name, capital, population and languages of all countries
*/

//Answer
require('./countries_data')

for(const {name, capital, population, languages} of countries){
    console.log({name, capital, population, languages})
}

/*
Question 2: A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
*/