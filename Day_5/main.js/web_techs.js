const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let arrCheck = webTechs.includes('Sass') //check if Sass is included in the arr
? console.log('Sass is a CSS preprocess') : console.log(webTechs.push('Sass')); //ternary operator to check the conditions
console.log(webTechs); //prints the arr
