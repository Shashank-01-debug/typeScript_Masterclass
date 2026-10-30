/* //!special datatype


any
unknown
never
null
void 
undefined


*/
//!Null

let managerId : number|null= null
console.log(managerId);

let employeeLWD : null|string= null //there is no exit date
console.log(`the employee exit date is set to be ${employeeLWD}`);


let empContactNumber : undefined|string
console.log(empContactNumber);





//!unknown
//* we are supposed to do the explicitly typeCheck using typeof method.

let empData: unknown
empData = 'jatin'
empData = 101
empData = true

if(typeof empData === 'string'){    //?explicitly type check
   console.log(empData.toUpperCase());
    
}
else if(typeof empData === 'number'){

    console.log(empData*1000);
    
}


//void : It doesn't return any thing
// it uses in function.

function printEmpInfo():void{

    console.log("Employee Info");
    console.log(empData);
    console.log(employeeLWD);
    console.log(empContactNumber);
    
    
}
printEmpInfo()

//!never
function throwEmpError():never{

    throw new Error ('Emp data not found')
    

}

//throwEmpError()


function demo():never{
    while (true){
        console.log(1);
        
    }
}

//demo()