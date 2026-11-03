type TestStatus ="Pass"|"Fail"|"Skipped"|"Blocked"

function handleTestResult(testStatus:TestStatus){

    if(testStatus==="Pass"){
        console.log('test got executed successfully');
        
    }
    else if(testStatus ==="Fail"){
        console.log('test failed!');
        
    }

    else if(testStatus ==="Skipped"){
        console.log('test got skipped');
        
    }

    else{
        console.log('test got Blocked');
        
    }

}

handleTestResult("Blocked");

