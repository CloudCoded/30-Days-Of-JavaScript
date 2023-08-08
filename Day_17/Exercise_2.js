/* Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage. */

const student = {
    firstName: 'az',
    lastName: 'cc',
    age: 32,
    skills: ['Html', 'css', 'JavaScript', 'RJ'],
    enrolledKeys: ['ID', 'st12345'],
}

const studentJson = JSON.stringify(student)
localStorage.setItem('studentJson', studentJson)

const getStrInfo = localStorage.getItem('studentJson')
const toObject = JSON.parse(getStrInfo)

console.log(toObject)


