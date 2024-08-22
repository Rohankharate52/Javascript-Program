

//array 

var arr = [] ;
for( var i=0; i<10; i++) {
    arr.push(function() {
        setTimeout(function() {
            console.log(i);

        },1000) 

    }) 

}

for (var i=0; i<10; i++) {
    arr[i]();

}

//ans

//10 aayega 10 bar .........

//var global hai is liye
//let kardo resolve ho jayega 10 

