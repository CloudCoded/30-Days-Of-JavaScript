const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let countryCheck = countries.indexOf('Ethiopia');

  if(countryCheck === -1){
    console.log(countries.push('Ethiopia')); //Add Ethiopia if it does not exist in arr
  } else{
    console.log('ETHOPIA') // print ETHIOPIA if it exist in arr
  }

  //Exercise 3
  // 1.Slice the first ten countries from the countries array
  console.log(countries.slice(0, 9))

  // 2.Find the middle country(ies) in the countries array
  const length = countries.length; //gives the length of the array
  const middle = Math.floor(length / 2) //divides the array into two and return the absolute num 

  if(length % 2 === 0){
    const middleCountry = (countries[middle - 1] + countries[middle]) 
    console.log(middleCountry.toString(' ')); //if the lengths divided doesn't have a reminder, it will add the last country in the first array and first country in the second array together, turn it into string and print the two countries
  } else{
    const middleCountry = countries[middle]
    console.log(middleCountry); // else if there's a reminder then that will be the middle country and will print it
  }

  //3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
  const lengthOfArr = countries.length; //gives the length of the array
  const divide = Math.round(length / 2) //divides the array into two and return the absolute num 

  if(length % 2 === 0){ 
    console.log('countries are even');
  } else{
    const addCountry = countries.push('Qatar')
    console.log(addCountry);
  }
  console.log(countries);
