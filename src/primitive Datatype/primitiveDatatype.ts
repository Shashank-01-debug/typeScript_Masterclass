//typescript primitive datatype

/*
string
number
boolean
bigint
symbol
*/

let empName : string ="shashank"; //type annotation
empName= empName+ " bundela";

let empAddress = 

`${empName}  //!placeholder
d 404 utsav homes,
pune, Maharashtra
India` //type inference


console.log(empAddress);

let empId : number =101
console.log(empId);



let empSalary : number = 180000
console.log(typeof(empSalary));

let empPercentage: number = 87.2121
console.log(typeof(empPercentage));


let isEmpActive:boolean = false 

if(isEmpActive){
    console.log(`employee ${empName} is active.`);
    
}

else{
    console.log('emp data not available.');
    
}