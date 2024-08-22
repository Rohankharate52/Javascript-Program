

function User (email,password) {
    this_email = email;
    this._password = password

    Object.defineProperty(this,'email',{ 
        //                parameter day lagatoy     object sato 

        get: function () {
            return this._email.toUpperCase() 
        },
        set: function(value) {
            this._email = value 
        }


    })
 //copy ban sakate hai.....

    Object.defineProperty(this,'email',{ 
        //                parameter day lagatoy     object sato 

        get: function () {
            return this._email.toUpperCase() 
        },
        set: function(value) {
            this.email = value 
        }
        }) 
    
   
}

const chai = new User ("chai@23", "chai") 
console.log(chai.email);
