

//Array in js
const marvel_heros = ["sairaj", "anuj","sahane"] 
const dc_heros = ["superman", "flash", "rohan"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);  //anuj...  0 1 2 3 =>1 flash ahe ..

//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);     // concat naya array return karta hai..

                            //two array ko mearge kiya hai proper tarikese....

                //or 

 const  all_new_heros = [...marvel_heros, ...dc_heros]
 //console.log(all_new_heros);                           



 const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real-another_array);

 //output:::::::
 // [ 1,2,3,4,5,
 //6,7,6,7,4,
 //5]


 console.log(Array.isArray("rohan"))
 console.log(Array.from("rohan")) 

 // ['r' , 'o', 'h','a','n'] array bana dega...
console.log(Array.form ({name: "rohan"})) 

// output::
//   []  MT LIST GEga....


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));

//output:::

// [100,200,300]