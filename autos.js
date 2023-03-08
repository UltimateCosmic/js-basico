function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
var cantidad = 30;

for (var i=0; i<cantidad; i++) {
    var marca = prompt(`Ingresa la marca del auto ${i}`);
    var modelo = prompt(`Ingresa el modelo del auto ${i}`);
    var annio = prompt(`Ingresa el año del auto ${i}`);
    autos.push = new auto(marca, modelo, annio);
}

for (var i=0; i<cantidad; i++) {
    console.log(autos[i]);
}