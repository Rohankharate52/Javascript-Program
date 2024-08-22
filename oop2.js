
const user = { 
    username: "rohan",
    loginCount: 8,
    singedIn: true,



getUserDetails: function() {
   // console.log("got user detaisl form database");

   console.log(`Username: ${this.username}`);

}

}
console.log(user.username);
console.log(user.getUserDetails() );  

