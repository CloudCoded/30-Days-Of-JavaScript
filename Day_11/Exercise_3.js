/*
Question 1: Destructure the countries object print name, capital, population and languages of all countries
*/

//Answer
require('./countries_data')

for(const {name, capital, population, languages} of countries){
    console.log({name, capital, population, languages})
}