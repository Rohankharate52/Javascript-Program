




//object 


//singleton....

//object literals...


//constotor term ke undar 
//Object.create     //Singleton bola jata hai ...


//object literals

const mySym = Symbol("Key1") 
const JsUser = {
    name: "rohan",
    "full name ": "rohan kharate",

   [mySym ]: "myKey1",   //symboal ki taraha use karan hai to sqare braket mai laga...
    age: 19,
    location : "pune",
    email: "rohan@234",
    isLoggdIn: false,
    lastLogginDays: ["monday","saturday"]


}
///console.log(JsUser.email)
//console.log(JsUser["email"]) //access karne ke liye...
//console.log(typeof JsUser.mySym)  // accesss  string aathi hai...

console.log(JsUser[mySym])


JsUser.email = "rohan@charght.com"
//Object.freeze(JsUser) 
JsUser.email = "rohan@chargpt.com"
console.log(JsUser);





JsUser.greeting = function () {
    console.log("Hello JS user ");

}
JsUser.greetingTwo = function() {
    console.log(`HEllo js user,${this.name}`) //convert string backstrik mai stirng interpolution ...


}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
