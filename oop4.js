





const user = { 
    username: "rohan",
    loginCount: 8,
    singedIn: true,



getUserDetails: function() {
   // console.log("got user detaisl form database");

   //console.log(`Username: ${this.username}`);
  console.log(this);  //current objecct sara pata hai...

}

}
//global constatom 


console.log(user.username);
//console.log(user.getUserDetails() );  
//console.log(this); //kuch nhi hai lekin ye globla constes change hota hai..



