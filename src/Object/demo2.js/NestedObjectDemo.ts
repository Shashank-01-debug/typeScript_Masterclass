let employee :{
    name:String,
    address:{
        city:String,
        state:String,
        pincode:string
    },
    empId:number|string

}={
    name:'shashank',
    address:{
        city:'Pune',
        state:'Maharashtra',
        pincode: "411057"
    },
    empId: "E_007"

}

console.log(employee.address.pincode);
