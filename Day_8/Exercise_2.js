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