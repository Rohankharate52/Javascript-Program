

const User = {

    _email: 'h@424.com',
    _password: "abc",

    get email(){
        return this_email.toUpperCase() 

    },

    set email (value) {
    this._email = value
    }
}

const tea = Object.create( User )

console.log(tea.email);
