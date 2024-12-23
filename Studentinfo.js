const dateofBirth = "14/06/2005"

const getStudentName = () =>{
    return "Write your name here"
}
const getCampusName = () => {
    return ("UEL Campus")
}
// Exporting functions and variables outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth
//Exporting functions with parameters
exports.Studentgrade=(marks)=> {
    if (marks>50 && marks <70) return ("B grade")
        else
            return ("A grade")
}