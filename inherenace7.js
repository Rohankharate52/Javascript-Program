

class User {
    constructor(username){
        this.username = username

    }
    logMe() {
        console.log(`Username: ${this.username}`);

    }
    static createId(){  //statoc ky karta hai method and property ko access hone se rok deta hai ....
        
        return `123`

    }
 }

 const hitesh = new User (hitesh)
 
 //console.log (hitesh.createId()) 

 class Teacher extends User {
    
    constructor (username, email) {
        super(username) 
        this.email = email 

    }
 }

 const iphone  = new Teacher ("iphone", "i@phone.com")
 iphone.logMe(); 