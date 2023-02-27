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

if(inputMonth === 'january' || inputMonth === 'march' || inputMonth === 'may' || inputMonth === 'july' || inputMonth === 'august' || inputMonth === 'october' || inputMonth === 'december'){
    console.log(`${month} has 31 days`)
} else if(inputMonth === 'april' || inputMonth === 'june' || inputMonth === 'september' || inputMonth === 'november'){
    console.log(`${month} has 30 days`)
} else if(inputMonth === 'february'){
    console.log(`${month} has 28 days`)
} else{
    console.log('Not a valid month')
}

/*
Question 2: Write a program which tells the number of days in a month, now consider leap year 
*/

const currentMonth = prompt('Enter current month: ').toLowerCase();
const daysInMonth = currentMonth[0].toUpperCase() + currentMonth.slice(1);

if(currentMonth === 'january' || currentMonth === 'march' || currentMonth === 'may' || currentMonth === 'july' || currentMonth === 'august' || currentMonth === 'october' || currentMonth === 'december'){
    console.log(`${daysInMonth} has 31 days`)
} else if(currentMonth === 'april' || currentMonth === 'june' || currentMonth === 'september' || currentMonth === 'november'){
    console.log(`${daysInMonth} has 30 days`)
} else if(currentMonth === 'february'){
    console.log(`${daysInMonth} has 28 days and 29 in a leap year`)
} else{
    console.log('Not a valid month')
}