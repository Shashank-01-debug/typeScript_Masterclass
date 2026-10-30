let empNames : string[] = ['raj','uday','Rohit']
let emp = empNames[5];

console.log(emp);

//?Map function --> perform an operation on all the values/elements which is present in the array and those individual result
//? i want to store in another array.


//*map--> high order function.

const empName_Map_Result=empNames.map((name)=>{
    return name.toUpperCase();
})

console.log(empName_Map_Result);

let empNamesSet2 : string[] = ['raj','uday','Rohit','Aman','Amit','Ajit','Kajal'];

const aNameStart = empNamesSet2.filter((name)=>{
    return name.startsWith("A");
})

console.log(aNameStart);
