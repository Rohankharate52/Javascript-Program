








class User {
    constructor(username) {
        this.username = username
    }
    logMe () {  
        console.log(`USERNAME is ${this.username}`);

    }

}


class Teacher extends User{
    constructor (username,email,password){
        super(username) //automatic karte set no problem..

        this.email = email
        this.password = password
     
        
            

        }
     

        addCoser(){
            console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher ("chai ","chao@13.com","234")
chai.addCoser()

const masalachai = new User("masalachai")

masalachai.logMe()  

//quction  

 //console.log(chai === masalachai);//Teacher ..

console.log(chai instanceof User );
