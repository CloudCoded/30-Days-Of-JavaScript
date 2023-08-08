/* Question 1: Store you first name, last name, age, country, city in your browser localStorage. */

const myDetails = {
    firstName: 'Abdul',
    lastName: 'Abdul',
    age: 32,
    country: 'Somalia',
    city: 'somali'
}

const stringify = JSON.stringify(myDetails);
localStorage.setItem('myDetails', stringify);
console.log(stringify)