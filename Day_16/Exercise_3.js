/*
Question 1: Parse the txt JSON to object.
*/

import txt from "./utils"
const stringToObj = JSON.parse(txt);
console.log(stringToObj);

/*
Question 2: Find the user who has many skills from the variable stored in txt.
*/

//Initialize variables to keep track of the user with the most skills and the maximum number of skills
let userWithMostSkills;
let maxSkills = 0;

//Iterate over each user in the object using a for...in loop:
for(const user in stringToObj){
    //Access the skills array of the current user and get its length to determine the number of skills
    const skills = stringToObj[user].skills;
    const numOfSkills = skills.length;

    if(numOfSkills > maxSkills){
        userWithMostSkills = user;
        maxSkills = numOfSkills;
    }

    console.log(userWithMostSkills);
}
