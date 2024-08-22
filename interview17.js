

var obj = { name: "rohan"} ;

function abcd () {
    console.log(this);

}
abcd.call(obj)  


//call ke help se funtion ko run karte waqt hum
//decide kar skte hai ke funtion ke andar this ki 
//value kya hogi...


