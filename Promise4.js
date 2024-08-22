



const promiseFive = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true 
        if(!error) {
            reslove({username: "javascript",password: "123"})

        } else {
            reject('ERROR: JS went wrong')

        }

    },1000) 

})


//wait karat hai kam hone tak usake bad he jata hai

//async  ..

//evention completion object hai 
//promise object hota hai 

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);

}

//#####################################################################################
//he to try catch ho gaya... 

async function getAllusers() {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() 
        console.log(data);

    } catch (error) {
        console.log("E: ",error);

    }

}
getAllusers() 

//##############################################################################################

fetch ('https:jsonplaceholder.typicode.com/user')
.then((response) => {
    return response.json() 

})
.then((data) => { 
    console.log(data);


})
.catch((error) => console.log(error)) 
