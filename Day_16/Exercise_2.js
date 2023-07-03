/*
Question 1: Stringify the students object with only firstName, lastName and skills properties
*/

import student from "./utils"
const txt = JSON.stringify(student,['firstName', 'lastName', 'skills'],3)
console.log(txt)