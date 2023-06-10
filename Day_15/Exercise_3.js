/*
Question 1: Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class
*/

//Answer
class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, curr) => acc + curr, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      const sum = this.sum();
      const count = this.count();
      return sum / count;
    }
  
    median() {
      const sortedData = this.data.sort((a, b) => a - b);
      const count = this.count();
      const mid = Math.floor(count / 2);
  
      if (count % 2 === 0) {
        return (sortedData[mid - 1] + sortedData[mid]) / 2;
      } else {
        return sortedData[mid];
      }
    }
  
    mode() {
      const frequencyMap = new Map()
      let maxFrequency = 0
      let modes = [];
  
      this.data.forEach((num) => {
        const frequency = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, frequency);
  
        if (frequency > maxFrequency) {
          maxFrequency = frequency
          modes = [num];
        } else if (frequency === maxFrequency) {
          modes.push(num)
        }
      });
  
      return { mode: modes, count: maxFrequency };
    }
  
    var() {
      const mean = this.mean();
      const squaredDiffs = this.data.map((num) => (num - mean) ** 2);
      const variance = this.sumArray(squaredDiffs) / this.count();
      return variance;
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequencyMap = new Map();
      this.data.forEach((num) => {
        const frequency = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, frequency);
      });
  
      const frequencyDistribution = [...frequencyMap.entries()].sort(
        (a, b) => b[1] - a[1]
      );
  
      return frequencyDistribution;
    }
  
    describe() {
      const count = this.count();
      const sum = this.sum();
      const min = this.min();
      const max = this.max();
      const range = this.range();
      const mean = this.mean();
      const median = this.median();
      const mode = this.mode();
      const variance = this.var();
      const std = this.std();
      const frequencyDistribution = this.freqDist();
  
      return `Count: ${count}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median}\nMode: ${JSON.stringify(
        mode
      )}\nVariance: ${variance}\nStandard Deviation: ${std}\nFrequency Distribution: ${JSON.stringify(
        frequencyDistribution
      )}`;
    }
  }
  
  // Usage example
  let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  
  let statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count());
  console.log('Sum: ', statistics.sum());
  console.log('Min: ', statistics.min());
  console.log('Max: ', statistics.max());
  console.log('Range: ', statistics.range());
  console.log('Mean: ', statistics.mean());
  console.log('Median: ', statistics.median());
  console.log('Mode: ', statistics.mode());
  console.log('Variance: ', statistics.var());
  console.log('Standard Deviation: ', statistics.std());
  console.log('Frequency Distribution: ', statistics.freqDist());
  console.log(statistics.describe());  
