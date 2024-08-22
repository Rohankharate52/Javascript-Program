


//call                      This  


//call          ####################################################


//This          #####################################################



function SetUserName (username) 
{
    this.username = username 
    console.log("called");

}


function createrUser(username,email,password) 
{
    SetUserName.call(this,  username) 
    this.email = email
    this.password = password

}

const chai = new createrUser("chai", "chai@123","123")
console.log(chai); 
