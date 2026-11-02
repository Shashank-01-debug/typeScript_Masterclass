function printInfo(empData :{
    name:string,
    id:number,
    salary?:number
})
{
let{name,id,salary} = empData; //destructuring
console.log(name);
console.log(id);
console.log(salary);

}


const e:{
    name:string,
    id:number
}={
    name:'Undertaker',
    id:1011
}

printInfo(e)