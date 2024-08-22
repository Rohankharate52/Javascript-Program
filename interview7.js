

//preparation 1

//first wave to check array is input or not


//write a js funtion to chek 
//whether an 'input' is an array or not


function chekArray(inp) {
    return Array.isArray(inp) ;

}

console.log(chekArray(1));
console.log(chekArray({}));
console.log(chekArray([1,2,3]));
//false
//false
//true 

