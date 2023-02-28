/*
Question 1: Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

//Answer
const score = prompt('Enter your score: ')
if(score > 80 && score <= 100){
    console.log('A')
} else if(score >= 70 && score < 80 ){
    console.log('B')
} else if(score >= 60 && score < 70){
    console.log('C')
} else if(score >= 50 && score < 60){
    console.log('D')
} else{
    console.log('F')
}

/*
Question 2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

//Answer
let checkSeason = prompt('Enter current month: ')
if(checkSeason === 'September' || checkSeason === 'October' || checkSeason === 'November'){
    console.log('The season is Autumn');
} else if(checkSeason === 'December' || checkSeason === 'January' || checkSeason === 'February'){
    console.log('The season is Winter');
} else if(checkSeason === 'March' || checkSeason === 'April' || checkSeason === 'May'){
    console.log('The season is Spring');
} else if(checkSeason === 'June' || checkSeason === 'July' || checkSeason === 'August'){
    console.log('The season is summer')
} else{
    console.log('Enter a valid month');
}

/*
Question 3:Check if a day is weekend day or a working day. Your script will take day as an input. 

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

//Answer
let day = prompt('What is the day today: ').toLowerCase();
let today = day[0].toUpperCase() + day.slice(1);
if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
    console.log(today + ' is a working day');
} else if(day === 'saturday' || day === 'sunday'){
    console.log(`${today} is a weekend`);
} else {
    console.log('Day is not valid');
}

//Or

let whatDay = prompt('Enter day: ').toLowerCase(); //INPUT DAY CONVERTED TO LOWERCASE
let dayy = whatDay[0].toUpperCase() + whatDay.slice(1); //THE FIRST INDEX OF INPUT DAY CONVERTED TO UPPERCASE AND THE LOWERCASE CHARACTERS, THE FIRST ONE SLICED FROM THE CHARACTERS

switch (whatDay){ //THE SWITCH TAKES THE INPUT DAY AS AN ARGUMENT FOLLOW BY THE CASE BLOG. 
    case 'monday':
        console.log(`${dayy} is a working day`);
        break; //THE BREAK STATEMENT IS TO TERMINATE EXECUTION IF THE CODE IS TRUE AND DOES NOT GO BEYOND
    case 'tuesday':
        console.log(`${dayy} is a working day`);
        break;
    case 'wednesday':
        console.log(`${dayy} is a working day`);
        break;
    case 'thursday':
        console.log(`${dayy} is a working day`);
        break;
    case 'friday':
        console.log(`${dayy} is a working day`);
        break;
    case 'saturday':
        console.log(`${dayy} is a working day`);
        break;
    case 'sunday':
        console.log(`${dayy} is a weekend`)
        break;
    default:
        console.log(`${dayy} is not valid`);
}



