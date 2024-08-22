





function multipleBy5 (num) {
    this.num = num 
    return num*5 

}
multipleBy5.power = 2; 
console.log(multipleBy5(5));  
console.log(multipleBy5.power); 

console.log(multipleBy5.prototype); 

function createrUser(username,score){
    this.username = username 
    this.score = score 
}

createrUser.prototype.increment = function() {
    this.score++

}


const chai = createrUser("chai ",25) 
const tea = createrUser ("tea",250) 

