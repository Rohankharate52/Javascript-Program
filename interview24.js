//call apply bind kay hota hai .....
 

var obj = { nums: "rohan"};

function abcd () {
    console.log(this);

}
abcd.call(obj);

//call ke help se funtion ko run karte waqt hum decide kar stke hai ke funtion ke andar this ki value kya hogi...



//this mai pahale window hoto hai ....//#



//call   vs   apply don ahe ......


var obj = { nums: "rohan"};

function abcd(a,b,c,d) {
    console.log(this,a,b,c,d);

}
abcd.apply(obj,[1,2,3,4])

//apply bas don hi paramenter magata hai ..
//this value aur sare parameter ki value  jo aap muze o array ke loop mai denge[] [] 


