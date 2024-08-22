
//life 
var ans = (function () {
    var a = 12 ;

    return {
        getter: function() {
            console.log(a) ;

        },
        setter: function (prm) {
            a = prm;

        }
    }

}) () ;
ans.setter(32);
ans.getter(); 
