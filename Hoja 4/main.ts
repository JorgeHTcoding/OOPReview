import { Punto } from "./reto1";
import { Triangulo } from "./reto13";

let punto1 = new Punto(-15,-2)
let punto2 = new Punto(-15,-6)
let punto3 = new Punto(25,2)
let punto4= new Punto(15,5)

let arrayPuntos:Punto[] = [punto1,punto2,punto3]
let triangulo = new Triangulo(punto4,punto2,punto3)


// console.log(punto1)

// console.log(punto1.distanciaAlOrigen());
// console.log(punto1.calcularDistancia(punto2));

// console.log(punto1.calcularCuadrante());

// console.log(arrayPuntos)
console.log(punto4.calcularMasCercano(arrayPuntos))
//console.log(triangulo.calcularLongitudLados())


