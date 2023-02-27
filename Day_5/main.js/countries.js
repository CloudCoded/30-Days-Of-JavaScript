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