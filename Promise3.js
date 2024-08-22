



const promiseFour = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true 
        if(!error ) {
            reslove({username: "hitesh",password: "123"})

        }else {
            reject('ERROR: Something went wrong')

        }
        
    },1000)

})
 // chaining hoti ahe...
 promiseFour

 .then((user) => {
    console.log(user);
    return user.username
})

.then((username) => {
    console.log(username);
})

.then(function(error){
    console.log(error); 
})

.finally(() => console.log("The promise is either  resloved or reject  "))

//promise reject ho resloved ho ye to execudte hota hi hai...
