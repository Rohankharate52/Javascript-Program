

var a  = [1, 2, '3'  ,4] ;

//saare bande add karo aur agar unme se koi bhi string 
//nikal jaye  re skop karo ..

var sum =0;
a.forEach(function(val) {
    if(typeof val === "number") {
        sum = sum + val;

    }
})
console.log(sum);