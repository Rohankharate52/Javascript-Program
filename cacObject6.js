
//object ko destracturing...
//.........


const course = {
    coursename :  "js in hindi",
    price: "999",
    courseInstrucor: "rohan"

}
//

const{courseInstrucor: instructor } = course

console.log(courseInstrucor); 
console.log(instructor) ; 
//rohan
