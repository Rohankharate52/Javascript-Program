
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
console.log("C",myArr);
//[0,4,5] spice porsion nikal gaya..
console.log(myn2);