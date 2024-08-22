




class User {
    constructor ( email,password) {
        this.email = email;
        this.password = password

    }
    get password() {
        return this.password.toUpperCase() 

    }
    set password (value) {
        this.password = value.toUpperCase()

    }
}

const hitesh = new User("h@hitesh.ai", "224")

console.log(hitesh.password); 
