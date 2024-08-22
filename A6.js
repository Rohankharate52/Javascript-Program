//for in loop


let student = {
    name : "rohan kumar",
    age: 20 ,
    cgpa : 7.4,
    isPass:  true,

};

for(let  key in student ) 
{
    console.log ("key=",key ,"value=",student [key]);
}