//!create copy of an array

const data : number[] =[1,2,3,4];

const x = data;

console.log(data);
console.log(x);


data.push(5);
console.log(data);
console.log(x);

//to copy in array need to use spread operator

const y : number[] = [...x];
console.log(y);

x.push(80);
console.log(x);
console.log(y);


