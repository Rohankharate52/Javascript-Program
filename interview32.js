






var ans =  (function () { 
    var a = 12;
    return {
        getter : function () {
            console.log(a); 

        }, 
        setter: function(prm) {  
            a = prm;
        }
    }
})


ans.getter();
ans.setter(42); 
//ans. return 

// getter setter yetana... 


//that why i create private varibale ...
