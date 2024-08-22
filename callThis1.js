



function SetUserName (username){
    //complex DB calls ... 
    this.username = username 
}


function createrUser (username,email,password ) {
    
    SetUserName (username) //#
    this.email  = email 
    this.password = password 
}

const chai = new createrUser("chai", "chai@234.com","123");

console.log(chai); 

