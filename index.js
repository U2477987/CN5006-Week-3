// Defining EmployeeInfo function
function EmployeeInfo(name,Salary)
{
    console.log("Welcome " + name+ ", Your monthly Salary is "+ Salary)
}

console.log("This is my first program")

var EmpName="Josh"
var EmpSalary= 30000

// Calling the EmployeeInfo function
EmployeeInfo(EmpName,EmpSalary)

// Code for the 2nd task
const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
}
EmpSkills("java")

// Exercise 3
const student= require('./Studentinfo')
const person = require('./Person')

console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55))

// Creating a new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Program ended")