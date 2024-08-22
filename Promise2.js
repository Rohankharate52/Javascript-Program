
//fetch('https://somthjing.com').then().catch().findlay();


const promiseOne = new promise(function (reslove,reject){

    //do an async task..

    //DB calls,cryptography,network


    setTimeout(function (){
        console.log('Async task is complete');
         reslove() 

    } ,1000 ) 

})


//create kiya hai resolve
//  .then  he reslove ch ahe purn  
promiseOne.then( function() {
    console.log("promise consumed");

})


//Output : Async task is complecedd   1
         // promise consumed...       2 
         
//#########################################################################



 new Promise(function (reslove,reject){
    setTimeout(function(){
   

        console.log("Async task 2" );
        reslove() 

    },1000)  

 }).then(function(){
    console.log("Async 2 resloved");

 })
          // Async task 2
 // Output:  Async 2 resloved
            


 //########################################################################################333


 const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){

     reslove({username: "chai", email: "chai@example.com"})

    },1000)


 })


 promiseThree.then(function(user){
    console.log(user);

 })
 //OP Io

 // "chai", eamil: "chai@example.com"  
 


 //data canjamtin hota hai ...