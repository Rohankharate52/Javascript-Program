

//funtions 2 .....

function calculatecartPrice (val1,val2,...num1) //rest operator and spried operator 
{
   return num1 
}
console.log(calculatecartPrice(200,400,600,3000)) 

//val1 = 200 val2 = 400 num1 = 600 3000  ...

const user = {
    username : "rohan",
    price: 199

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);

}

//handleobject(user) 

//
handleobject({
    username: "sam",
    price: 399
})



const myNewArray = [200,400,100,600] 

function returnSecondvalue(getArray) {
    return getArray[1] 

}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue(200,400,500,1000));