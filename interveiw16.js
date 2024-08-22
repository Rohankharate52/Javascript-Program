

//this - haramazada keywordd

//global - window
//funtion - window




//1 
console.log(this) ;

//2 
function abcd () {
    console.log(this) ;    //windos ahe ssss

}
abcd () ; 

//3 
var obj = {
    name : "harsh" ,
    age : 24 ,
    sayName: function () {
        console.log(this);

    }
};
obj.sayName(); 



//method = object 
//fnct es5 inside method = window

//es6 fnc inside 
