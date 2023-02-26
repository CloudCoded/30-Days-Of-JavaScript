/*
Question 1: Write a program which tells the number of days in a month.

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

//Answer
const inputMonth = prompt('Enter current month: ').toLowerCase();
const month = inputMonth[0].toUpperCase() + inputMonth.slice(1);

if(inputMonth === 'January'.toLowerCase() || inputMonth === 'March'.toLowerCase() || inputMonth === 'May'.toLowerCase() || inputMonth === 'July'.toLowerCase() || inputMonth === 'August'.toLowerCase() || inputMonth === 'October'.toLowerCase() || inputMonth === 'December'.toLowerCase()){
    console.log(`${month} has 31 days`)
} else if(inputMonth === 'April'.toLowerCase() || inputMonth === 'June'.toLowerCase() || inputMonth === 'September'.toLowerCase() || inputMonth === 'November'.toLowerCase()){
    console.log(`${month} has 30 days`)
} else if(inputMonth === 'February'.toLowerCase()){
    console.log(`${month} has 28 days`)
} else{
    console.log('Not a valid month')
}

/*
Question 2: Write a program which tells the number of days in a month, now consider leap year 
*/

const currentMonth = prompt('Enter current month: ').toLowerCase();
const daysInMonth = currentMonth[0].toUpperCase() + currentMonth.slice(1);

if(currentMonth === 'January'.toLowerCase() || currentMonth === 'March'.toLowerCase() || currentMonth === 'May'.toLowerCase() || currentMonth === 'July'.toLowerCase() || currentMonth === 'August'.toLowerCase() || currentMonth === 'October'.toLowerCase() || currentMonth === 'December'.toLowerCase()){
    console.log(`${daysInMonth} has 31 days`)
} else if(currentMonth === 'April'.toLowerCase() || currentMonth === 'June'.toLowerCase() || currentMonth === 'September'.toLowerCase() || currentMonth === 'November'.toLowerCase()){
    console.log(`${daysInMonth} has 30 days`)
} else if(currentMonth === 'February'.toLowerCase()){
    console.log(`${daysInMonth} has 28 days and 29 in a leap year`)
} else{
    console.log('Not a valid month')
}