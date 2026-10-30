//creating hetrogenous array in TS

let empData :(string|number|boolean)[]=['jatin',101,true]

let empID : number[] =[101,102,103];
let empInfo :[string,number,number,boolean] = ['jatin',101,75000,true]
//empInfo[0]=true

let empInfo4: readonly [string,number,...string[],number] = ['jatin',101,'JS','TS','PW',101];

let [empid,empName,skill,skill2,skill3,no]=empInfo4
console.log(empid);
console.log(empName);
console.log(skill);
console.log(skill2);
console.log(skill3);
console.log(no);





