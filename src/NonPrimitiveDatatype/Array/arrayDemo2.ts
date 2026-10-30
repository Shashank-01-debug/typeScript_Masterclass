//use array as return type as well as a parameter

console.log('Array as a parameter');


const empsId : number[] =[101,102,103];

function displayEmpData(arr :number[]){

    arr.forEach((data)=>{

        console.log(data);
        
    })

}

displayEmpData(empsId)

//! array as a return type
console.log('array as return type in function');

function getEmpIds():number[]{
    const empsId : number[] =[901,902,903];
    return empsId;
}

const x = getEmpIds();
console.log(x);


