




//ES6...


class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password

    } 

    encryptPassword() {
        return `${this.password}abc`

    }
     changeUsername(){
        return `${this.username.toUppercase()}`
     }

}

const chai = new User("chai", "chai@2.com","123")
console.log(chai.encryptPassword());

console.log(chai.changeUsername());


//bihind the scene


function User(username,email,password){
    this.username= username;
    this.email= email;
    this.password = password

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`

}


User.prototype.changeUsername = function(){
    return `${this.password}abc`

}


const tea = new User ("tea", "tea@agd.com","234")

console.log(tea.encryptPassword())
console.log(tea.changeUsername());
