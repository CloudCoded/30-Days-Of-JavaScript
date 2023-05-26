/*
Question 1: Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
*/

//Answer
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = sentence.replace(/[^\s\w]/gi, '')
console.log(cleanText)