




function getter (inp, get=1) {
    var cloned = [] ;
    for(var i = 0; i<get; i++) {
        cloned.push(inp[i]);

    }
    return cloned;

}
console.log(getter([1,2,3,4,5,6]) ,3 
);   

