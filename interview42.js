

//quc ..

//1 given a string , reverse each word in the sentence....


var str = "saare jaha se accha hindustaan humara";

var savedStr = str.split( " ")
    .map(function (word) {
        return word.split("").reverse().join("")

    })

    console.log(savedStr.join(""));


