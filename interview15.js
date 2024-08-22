

// diff between var let and const ....

//var    ---> es5  funtion scoped ,window
// let and const --> es6 ,braces scoped,doesn't add

var a =12;
let b = 22; 


//1 

function abcd () {
    if (true ) {
        var a =12;

    }
    console.log(a) ;

}
abcd() ; 

