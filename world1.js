

//How to find duplicate element in array in js
const arrNumber=[1,2,8,2,9,8]
const duplicates=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates)
