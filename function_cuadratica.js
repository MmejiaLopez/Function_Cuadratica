var a = parseInt(prompt("El valor de a es:"));
var b = parseInt(prompt("El valor de b es:"));
var c = parseInt(prompt("El valor de c es:"));

var e =( b * b);
var f = (4 * a * c);
var g = (2 * a);

var re1 = (e -f);

if(re1>0)
{
    var re2 = Math.sqrt(re1);
    var positivo = (1 * re2 -b);
    var negativo = (-1 * re2 -b);

    var solucion1 = (positivo / g);
    var solucion2 = (negativo / g);
    
    alert(solucion1 + " " + "Y"+ " "+solucion2);
}else {
    alert("Valores erroneos");
}