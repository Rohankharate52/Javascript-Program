


//array - map filter ................

//map 

// jab aapko array ke har member par koi operation perfrom
//karna ho,aur har member par operation perfrom karne 
//ke baad usey ek naye array main daalna hai tab hum use karte hai map ko ..



//quntion 1 

var arr = ["hello", "a","apple", "guava","harsh","nishi"];


//ek array se ek naya array banoo jismain agar word ki length
//5 akshar ho to p tag main daalo nahito word ko span tag main daalo

var ans = arr.map(function (val) {
    
    if(val.length === 5 ) return `<p> ${val} </p>`;

    else return `<span> ${val}</span>`;

})

