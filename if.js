var edad = 18;

if (edad===18) {
    console.log("Puedes votr, será tu primera votación");
} else if (edad>18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

// Operador Ternario - Genera 'if' y 'else' en una sola linea
// Sintaxis: condition ? true:false

var numero = 1;
var resultado = numero===1? "Sí soy un uno" : "No, no soy un uno";