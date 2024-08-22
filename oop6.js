






//consttructor function ##########################################################################################



//const promiseone = new Promise() 



function User(username,loginCount,isLoggedIn) {
    this.username = username  
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this 

}

const userone = user("rohan" ,12, true ) 
const usertwo = user("chaiaurcode",11,false) 
console.log(userone ); //. acces bhi kr sataka hai tu ..



//sari ki sari value overwrite hoo gahi hai ....

