const mynum = [1,2,3,4,4,5,5,6,6,6,6]

const  newnum = []
mynum.forEach((num) => {
    if (num > 4 ) {
        newnum.push (num) 

    }
})
console.log(newnum) ;
