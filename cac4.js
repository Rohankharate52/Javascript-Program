
let myDate = new Date()

//let myCreateDate = new Date(2023,0,23)
//console.log(myCreateDate.toDateString());
//  Mon jan 23 2023 ....




//let myCreateDate = new Date ("2024-01-14")
//console.log(myCreateDate.toLocaleString());
//14/1/2024,  5:30:30 am




let myCreateDate = new Date ("01-14-2024")

let myTimeStamp = Date.now() 

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());

//170430487290372
//170523829032903
//console.log(Math.floor(Date.now()/1000));
//167773435

let newDate = new Date() 

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.tolocalString('default',{
    weekday: "long"
    
})






