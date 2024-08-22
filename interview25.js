//bind 


var obj = { name : "rohan"} ;

//bind kabhi funtion chalata nhi hai ....

//esane aapko funtion bind karke return keya hai 

function abcd (a,b,c,d) {
    console.log(this, );

}
var newfnc = abcd.bind(obj);
newfnc(); 