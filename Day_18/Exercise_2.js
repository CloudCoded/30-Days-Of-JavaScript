/*
Question 2: Print out all the cat names in to catNames variable.
*/

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch (catsAPI).then(response => response.json())
.then(data => {
    data.forEach((cat) => {
        console.log(`Cat Name is ${cat.name}`)
    })
})
.catch((error) => {
    console.log('Error:', error)
})