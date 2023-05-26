/*
Question 1: 
*/

//Answer
function tenMostFrequentWords(text) {
    const words = text.split(/\s+/);
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
  