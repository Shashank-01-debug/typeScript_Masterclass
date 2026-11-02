const employee={
    name : "shashank",
    id:101,
    isActive:true,
    salary:62385


}

console.log(employee.name);
console.log(employee.id);
console.log(employee.isActive);
console.log(employee.salary);
console.log("*".repeat(50));
console.log("Destructuring the Object");

let{name,id,isActive,salary} = employee
console.log(name);
console.log(id);
console.log(isActive);
console.log(salary);

employee.workLocation ="Pune"
employee.salary = "High"

console.log(employee);
