








//const obj1 = {1: "a",2: "b"}
//const obj2 = {3:"a",4:"b"}

//const obj3 = { obj1,obj2 }
//console.log(obj3);

//obje1: {'1': 'a','2': 'b'},obje2: {'3': 'a','4':'b'}}




const obj1 = {1: "a",2: "b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = { obj1,obj2 }
//const obj3 = Object.assign(obj1,obj2)//#
//console.log(obj3);



//{'1': 'a','2': 'b','3':'a','4':'b'} 

const obj31 = Object.assign({},obj1,obj2)//#
//same ahe fakt grarindi dete fakt bas....
//  { } ahe na 
//{'1': 'a','2': 'b','3':'a','4':'b'} 



// spred operatoer...
const obj3 = {...obj1,...obj2}
//console.log(obj3); 

















const tinderUser = {}   //non singleturn object hai..

tinderUser.id = "abc123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser); 


const users = [
    {
        id: 1,
        email: "rohan@1234"

    },
    {
        id: 1,
        email:"rohangmaol.com"

    },

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 

//'id','name','isLoggedIn'] ....



