


const cading = ["js", "ruby", "java","python"]

cading.forEach( function  ( item ) { 
     
} ) //call back



//arrow function 

//mai hai ...  same hai...

cading.forEach((item) => {
    console.log(item);
})



//function

function printMe (item) 
{
    console.log(item) ;

}
coding.forEach(printMe) //refrence beto 



cading.forEach( (item , index,arr ) => {

    console.log(item ,index,arr); //ky ky hai call back ke undar..

} )


const mycoading = [ 

    {
        langname : "javascipt",
        langfile: "js"
    },

    {
        langname : "java",
        langfile:  "js"

    },

    {
        langname : "python",
        langfile : " py"

    }

    //learn iteration ...


]

mycoading.forEach( (item)  => {

    console.log(item.langname); //access leli ahi 
    
}  )