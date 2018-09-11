//1-й  вариант решения.Я только не понимаю как сделать,чтобы не конкатанацию делал а сложение
var a =0;
  function getsum(){

var sum = prompt("Введите количество аргументов","***");
for (n=0;n<sum;n++){

    a+=prompt("Введите аргумент","")
} 
var b=a;
return(b);
}
alert(getsum());
//2-й вариант.Решение в лоб.

function sum(a) {

  return function(b) {
     
      return function(c){
          return function(d){
              return a+b+c+d
          }
      }
  };

}
alert(sum(1)(2)(3)(4));
//3-й вариант
function sum (a){
    var counter = a
    function f(b){
        counter+=b
        return f
    }
    f.toString=function(){
        return(counter)
    }
    return f
}
alert(sum(1)(2)(3)(4))