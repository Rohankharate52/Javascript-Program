//array usko loop lagana hai uski original property ko display karana hai...





Array.prototype.extraProperty = "rohan";
"rohan"

const myNewArray = {1,2,3,4,5}
undefined

for(let v in myNewArray){
    console.log(v)

}











for(let v in myNewArray)
{
    if(myNewArray.hasOwnProperty(v)) 
    {
        console.log(v) 
    }
}