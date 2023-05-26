/*
Question 1: Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
*/

//Answer
function tenMostFrequentWords(paragraph) {
    const words = paragraph.split(/\s+/);
    const wordFreq = {};
  
    words.forEach((word) => {
      if (wordFreq.hasOwnProperty(word)) {
        wordFreq[word]++;
      } else {
        wordFreq[word] = 1;
      }
    });
  
    const wordFreqArray = Object.entries(wordFreq).map(([word, count]) => ({ word, count }));
  
    wordFreqArray.sort((a, b) => b.count - a.count);
  
    return wordFreqArray.slice(0, 10); // Return only the top 10 entries
}
  
const paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
const mostFrequentWords = tenMostFrequentWords(paragraph);
console.log(mostFrequentWords);
