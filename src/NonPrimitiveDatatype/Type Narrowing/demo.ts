function formatEmpID(id:string|number){

    if(typeof id=== "string"){ //type narrowing.

      id =  id.toUpperCase();
      console.log(id);
      
    return id;
    }

    else if( typeof id==='number'){
        console.log(`EMP-${id}`);
        
    }



}

formatEmpID("emp-101");
formatEmpID(111);