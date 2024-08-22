//arrow function 


//redece js .......methodddd.........


//const myNumber = [1,2,3,4]
//const mytotal = myNumber.reduce( function (acc,currva) 

//{ 
 //  console.log ( `acc: ${acc} and currva : ${currval}`);

 //  return acc + currva 

//} , 0 )



const mytotal = myNumber.reduce( (acc,curr) => acc+curr,0 )

console.log(mytotal) ;  

const shoppingcart = [


    {
        itemname:   "js course",
        price: 2000

    },

    {
        itemname:  "mobile develp"
        price:  3545 

    },

    {
        itemname:  "python dev"
        price: 463463

    },


]

const pricetopay = shoppingcart.reduce((acc,item) =>acc+ item.price ,0)

console.log(pricetopay);