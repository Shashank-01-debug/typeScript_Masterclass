let empId : string|number
empId ="Emp101"

empId="210"
//empId=true gives me compilation error

console.log(empId);

function findEmployee(employeeId:string|number){
    console.log('searching employee',empId);
    
}

findEmployee(empId);

function getEmployeeId(empID:string):string|null{
     if(empID==="E101"){
        return "jatin"
     }

     return null;
}

console.log(getEmployeeId("E101"));
console.log(getEmployeeId('E503'));

