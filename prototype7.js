



//inheritance########################################################################################



//prototype......................................

//let myName = "rohan  "
//let myChannel = "chai  " 

//console.log(myName,trueLength); 


let myHeros = ["rohan", "patil"]

let heroPower = { 
    rohan: "jamin",
    patil: "coading",

    getpatilPower: function(){
        console.log(`spidy power is ${this.patil}`);

    }
}

Object.prototype.rohan = function () {
    console.log(`rohan is present in all objc`);

}


Array.prototype.heyHitesh = function() {
    console.log( `rohan say hello ` );
}

myHeros.rohan()
myHeros.heyrohan()
heroPower.heyrohan()



//heroPower.rohan()
//myHeros.rohan() 

//object ke anadar property inject kr de ......

//inheritance##################################################################################################
//inheritance prototype  kisi dusare ki property ko acces karana hai...


const user = {
    name: "chai",
    email: "chai@gogole.com"

}
const teacher = {
    makeVedio: true 


}

const techinsupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssigment: `js assigment `,
    fulltime: true,
    __proto__:  techinsupport
}

teacher.__proto__ = user
//teacher bhi user ki sari property acces kr sakta hai...
