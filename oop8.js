















//consttructor function ##########################################################################################

// new keyworld impointace paha chala hai ... #new ..................................


//const promiseone = new Promise() 



function User(username,loginCount,isLoggedIn) {
    this.username = username  
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


///method bhi call kr satake ..............................................................................

    this.grreting = function () {
        console.log (`welcome ${this.username}`);

    }
// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

    return this //by default return hota hi hai likhae ya nhi 
    

}

const userone = new  user("rohan" ,12, true ) 
const usertwo = new user("chaiaurcode",11,false) 
console.log(userone ); 
console.log(usertwo ); 



//sari ki sari value overwrite hoo gahi hai ....
