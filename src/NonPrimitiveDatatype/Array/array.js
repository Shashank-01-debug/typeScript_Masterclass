// create array that stores the employee name
// In Javascript --> array is an object


let employees = ['raj','uday','jatin'];
console.log(typeof employees);

employees.push('kajal');
employees.push(101);

console.log(employees);
employees.forEach((name=>{

    console.log(name.toUpperCase());
    


}))

//! run time error as 101 can't be converted to uppercase.