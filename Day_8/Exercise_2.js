/*
Question 1: Find the person who has many skills in the users object.
*/

//Answer
let maxSkills = 0;
let skillfulPerson = '';

for (const user in users) {
  const numOfSkills = users[user].skills.length;
  if (numOfSkills > maxSkills) {
    maxSkills = numOfSkills;
    skillfulPerson = user;
  }
}

console.log(`The person with the most skills is ${skillfulPerson} with ${maxSkills} skills.`);

/*
Question 2: Count logged in users, count users having greater than equal to 50 points from the following object.
*/

//Answer
// Initializing the variables
let loggedInCount = 0;
let highPointsCount = 0;

// Looping through the users object
for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

// Output the results
console.log("Logged-in users: ", loggedInCount); // Output: Logged-in users: 2
console.log("Users with 50+ points: ", highPointsCount); // Output: Users with 50+ points: 3


/*
Question 3: 
*/

//Answer
// Initializing an empty array to store MERN stack developers
let mernStackDevelopers = [];

// Looping through the users object
for (let user in users) {
  if (
    users[user].skills.includes("MongoDB") &&
    users[user].skills.includes("Express") &&
    users[user].skills.includes("React") &&
    users[user].skills.includes("Node")
  ) {
    mernStackDevelopers.push(user);
  }
}

// Output the MERN stack developers
console.log("MERN stack developers: ", mernStackDevelopers); // Output: MERN stack developers: ['Asab', 'Paul']


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