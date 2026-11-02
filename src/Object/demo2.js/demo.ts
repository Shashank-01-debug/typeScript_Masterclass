// Object stores data as key-value pairs, and typescript adds type checking to the properties of those objects.
//? this is object type annotation and its a contract

let employee :{
    name:string,
    id:number,
    salary:number,
    isActive:boolean
} ={
    name:'shashank',
    id: 101,
    salary:65000,
    isActive:true

}

employee.id=20001;
console.log(employee.id);

