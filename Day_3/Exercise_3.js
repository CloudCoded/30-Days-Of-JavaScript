/*
Question 1:Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) 
*/
//Create time format with date object
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

//outputs
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);