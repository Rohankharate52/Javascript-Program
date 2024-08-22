

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance,toString().length);
console.log(balance , toFixed(2));   



const otherNumber = 23.8966 //23.9
//123.8966      123.9 toPrecision

console.log(otherNumber.toPrecision(3)); //round figer ...

const hundreds = 1000000  //  india 10,00,000
console.log(hundreds.toLocaleString('en-IN'));