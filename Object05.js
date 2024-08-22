

const descriper = Object.getOwnPropertyDesciptor(Math,"PI")

console.log(descriper); 



//console.log(Math.PI); 
//Math.PI = 5 
//console.log(Math.PI) 

const chai = {
    name: 'ginger chai ',
    price: 244,
    isAvailable: true,

    orderChai: function() {  //fat gaya codee............................................

        console.log("chai nhi bni");

    }

}



console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//access beti hai..
//Object.defineProperty(chai,'name',{
  ///  writable:false,
   // enumerable:false

//})
//console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//##################################################################################################################################3


for (let [key,value] of Object.entries(chai)){
    if (typeof value !== 'function'){

    
    console.log(`${key} : {value}`);

    } 
}