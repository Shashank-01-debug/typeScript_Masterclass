let employee :{

    name:string,
    readonly id: number,
    email?:string,
    isActive:boolean,
    salary:number

}
=
{

    name :"shashank",
    id: 101,
    salary:65000,
    isActive:true,
    email:'jatin312@GMAIL.com'



}

console.log(employee.email?.toLowerCase());
