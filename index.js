function sum (a){
    var counter = a;
    function f(b){
        counter+=b;
        return f;
    };
    f.toString=function(){
        return(counter);
    };
    return f;
};
alert(sum(1)(2)(3)(4));