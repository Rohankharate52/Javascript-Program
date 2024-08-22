

//sync vs  async  

//first sync 
//second async chalta hai 



console.log("1");
console.log("2");    
                       // sync wave
console.log("3");

setTimeout(function() {     // async  
    console.log("4") ;

},5000)                   //sync wave 
console.log("5") ;


/*

synchronous code executes line by line and if 
first line is not resolved the code execution 
will not move to the next line



Asynchronous code waits till synchronous code
is not finished and when the synchronous code finishes executing
then the async code starts its execution as the async code means
it probably can have some delay it also takes someting
called callback..




jab facebook se photo aajaye to chal
 jaana - delay callback


 callback hota hai funtion jo ki chalta hai async code


 async code kuchh der baad chalta hai
 kyuki wo code kuchh der baad chlta hai to
 humein nahi pata hota hai , ke kab chalega 
 to  jab bhi chale hum async code ko ek
 funtion dedete hai ke jab bhi chalna is
 funtion ko chala dena wo jo funtion
 humne diya tha us funtion ko hum kahte hai callback ...

/*