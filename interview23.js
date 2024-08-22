

/* 

filter ka bhi exact structure map ki tarah hai
iska matlab filter bhi return karega 
ab return jo hoga  wo har haalat main ek boolean hona chahiye
map jo return karta tha wo hi direct save hota tha imaginary
array main 

par filter kyuki boolean return kar raha hai boolean save
nahi hota balki boolean ki jagah jo us waqt value chal rahi hoti 
hai wo save hoti hai ...


*/

//esa array ke wo sare member us array mai peast karo

// jo 2 se divisible ho...


var arr = [ 1,2,3,4,5,6];

arr.filter(function (val) {
    if(val % 2 === 0 ){
        return true;

    }
})

  //2 4 6 