

//ek array of object hai aur us array main hum logo ke pass
//kaafi data hai usse ek array bnao jismain sirf name ho


var arr = [
    
    { name: "harsh",age: 24},
    { name: "harshita",age: 22},
    { name: "harshita ka bf", age: 25 } 
    

] 
var ans = arr.map(function (val) {
    return val.name; 
    // return { name : val.name }

});