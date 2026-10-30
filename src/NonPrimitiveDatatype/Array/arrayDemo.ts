//! how to create array in type script

let empNames : string[] = ['jatin', 'uday','raj']
console.log(empNames);
empNames.push('kajal')
//empNames.push(101);


empNames.forEach((name)=>{
    console.log(name.toUpperCase());
    
})

// Remove element from array

let removeElement :string|undefined =empNames.pop();
console.log("*".repeat(30));
console.log(`remove element :${removeElement}`);

empNames.forEach((name)=>{
    console.log(name.toUpperCase());
    
})

//create number array, boolean array

let empIds : number[] =[101,130,190];
let empStatus : boolean[] =[true,false,true,true];
console.log("*".repeat(30));
empIds.forEach((ids)=>{
    console.log(ids);
    
})