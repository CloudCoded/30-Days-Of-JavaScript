/*
Question 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
*/
//first I declared the variable with let keyword and value of string attributed to it
let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
console.log(loveStr.match(/love/gi)); //The match() method takes regEx or substrings as an argument and returns an array if there a match and the g will search the whole text without flag //, i case insensitive.

/*
Quesrtion 2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

let searchWord = 'You cannot end a sentence with because because because is a conjunction';
console.log(searchWord.match(/because/gi)); // The same method is adopted here as used in the first question

/*
Quesrtion 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/

const cleared = sentence.replace(/[^\s\w]/gi, '') // remove non-alphanumeric characters
console.log(cleared)


/*
Quesrtion 4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

const calcu = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const extraction = calcu.match(/\d+/g);
const monthSalary = parseInt(number[0]);
const annualBonus = parseInt(number[1]);
const onlineCourse = parseInt(number[2]);
const annualIncome = (monthSalary * 12) + annualBonus + (onlineCourse * 12);
console.log(annualIncome);

//I extracted the numbers with regEx and use the parseInt() method to change the strings numbers to numbers and lastly, calculated it all together and printed it