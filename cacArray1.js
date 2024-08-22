

//array method
const newArray = new Array (1,2,3,4)
 const myArr = new Array (0,1,2,3,4)
myArr.push(6)
myArr.push(7)
myArr.pop()



myArr.unshift(9)  //start mai value aa jati hai....

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


const newArr = myArr.join()


console.log(myArr);
console.log(newArr) ;



//slice , splice

console.log("A",myArr);

const  myn1 = myArr.slice(1,3)
//A [0,1,2,3,4,5]
//[1,2]  LAST ranges inlcule nhi hui hai

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1, 3)
//last range include ho gahi hai 
//B [0,12,3,4,5]
//[1,2,3]

console.log(myn2);