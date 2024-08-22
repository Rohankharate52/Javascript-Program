

//pure funtion


//aap koi bhi value do arguments main agar
//har baar same value doge to same output 
//aayega


//aisa koi funtion jo ki global variable 
//ki value ko change naa kare..


var global = 12;
function abcd(a) {          // pure funtion hai....
    console.log(a + 3 ) ;


}




//konsa pure function nhi hai...............

//inpure funtion...




function abcd2() {
    global++;
    
}




function abcd3(a) {
    console.log(Math.random() *a); 

}