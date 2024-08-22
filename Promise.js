
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
         
