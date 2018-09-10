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