function Calculator() {
    var args = Array.prototype.slice.call(arguments);
     this.sum =function() {

  return args.reduce(function(prev,cur){return prev+cur});
     }
    this.multiply=function(){
        return args.reduce(function(prev,cur){return prev*cur});

}
}

var calc = new Calculator(2,3,4,5);
alert(calc.multiply()); // 140
alert(calc.sum()); 