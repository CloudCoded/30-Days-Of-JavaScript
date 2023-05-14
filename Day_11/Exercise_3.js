/*
Question 1: Destructure the countries object print name, capital, population and languages of all countries
*/

//Answer
require('./countries_data');

for(const {name, capital, population, languages} of countries){
    console.log({name, capital, population, languages});
}

/*
Question 2: A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
*/

//Answer
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
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

/*
Question 4: Copy the student object to newStudent without mutating the original object. In the new object add the following ?

Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/

//Answer
const studentss = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  const newStudent = {...studentss};
   newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8});
   newStudent.skills.backEnd.push({ skill: 'Express', level: 9});
   newStudent.skills.dataBase.push({ skill: 'SQL', level: 8});
   newStudent.skills.dataScience.push({ skill: 'SQL'})

   console.log(newStudent);
