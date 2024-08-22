// write a js fun that reverse a number


function reverseKaro (num) {
    Number(num.toStirng().split("").reverse().join(""))

}





//#

function reverseKaro(num) {
    var rev = 0;
    while (num>0){
        var rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);

    }
    return rev;

}
console.log(reverseKaro(1234));
