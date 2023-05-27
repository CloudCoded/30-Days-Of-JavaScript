/*
Question 1: Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
*/

//Answer
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = sentence.replace(/[^\s\w]/gi, '')
console.log(cleanText)

/*
2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
*/

//Answer
const threeMostFrequentWords = (cleanText) => {
    const words = cleanText.split(/\s+/);
    const wordFrequency = {};

    words.forEach((word) => {
        if(wordFrequency.hasOwnProperty(word)){
            wordFrequency[word]++;
        } else{
            wordFrequency[word] = 1;
        }
    });

    const wordFreqArray = Object.entries(wordFrequency).map(([word, count]) => ({word, count}))
    wordFreqArray.sort((a, b) => b.count - a.count);
    
    return wordFreqArray.slice(0, 3);
}

const mostFrequentWords = threeMostFrequentWords(cleanText);
console.log(mostFrequentWords);