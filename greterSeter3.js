




class User {
    constructor ( email,password) {
        this.email = email;
        this.password = password

    }
    get password() {
        return `${this._password}hitesh`
         

    }
    set password (value) {
        this._password = value

    }
}

const hitesh = new User("h@hitesh.ai", "abc")

console.log(hitesh.password);

//output : capital mai aayega...  


