function printEmpName(name:string|null){

    if(name!=null && typeof name ==="string"){

        console.log(name);
        
    }
    else{
        console.log("name is null !");
        
    }

}

printEmpName('shashank')
printEmpName(null)
console.log("**".repeat(20));

function printToken(token:string|undefined){
    if(token!=undefined && typeof token ==="string"){
        console.log(`token is valid: ${token}`);
        
    }

    else {

        console.log('token value is Undefined !');
        
    }
}

printToken("1werqqqw238211");
printToken(undefined)