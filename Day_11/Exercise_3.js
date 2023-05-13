/*
Question 1: Destructure the countries object print name, capital, population and languages of all countries
*/

//Answer
require('./countries_data')

for(const {name, capital, population, languages} of countries){
    console.log({name, capital, population, languages})
}

/*
Question 2: A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
*/

//Answer
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [, ,jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore);

/*
Question 3: Write a function called convertArrayToObject which can convert the array to a structure object.

    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
*/

//Answer
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (array) => {
    const object = {};
    for(const [name, skills, scores] of array){
        object[name] = {
            skills,
            scores
        };
    }
    return object;
}
const studentsObject = convertArrayToObject(students);
console.log(studentsObject);

