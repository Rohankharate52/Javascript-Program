
var obj = { name : "rohan"} ;
function abcd (a,b,c,d) {
    console.log(this, a,b,c,d);

}
abcd.bind(obj);


//bind ne funtion abcd ko bind kar diya hai 
//kisake satha object abcd ke is calld as bind ...


//bind kabhi funtion ko chalata nhi hai ...


//funtion abcd mai obj ko bind keya aur chipaka diya aur return kiya ha ..



var obj = { name : "rohan"} ; 

function abcd (a,b,c,d) {
    console.log(this, );

}
var newfnc = abcd.bind(obj);  //save kar  na 
newfnc(); 