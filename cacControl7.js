

const userLoggeIn = true 
const  debitcard = true 

const loggedInFromGoogle = false 
const loggedInFromEmail = true 



if (userLoggeIn && debitcard ) {
    console.log("Allow to buy course") ;

}
if (loggedInFromGoogle || loggedInFromEmail ) {
   
    console.log( "user loogged in ");
    
}