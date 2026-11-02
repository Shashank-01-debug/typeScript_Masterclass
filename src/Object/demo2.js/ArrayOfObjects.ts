const names : string[] =['jatin','rohit','raj']
const ids : number[] = [10,31,188]

const empDataArray : {name:string,id:number,salary:number} []=
[
    {name:'shashank', id:7,salary:1888800},
    {name:'Rishabh', id:17,salary:92000},
    {name:'Rajeev', id:18,salary:1800}
]


empDataArray.push({name:'radha',id:55,salary:30000});
   
console.log(empDataArray[1]?.name);


const result=empDataArray.filter((data)=>{

   return data.salary>50000

    
})

console.log(result);
