"use strict";
exports.__esModule = true;
var reto1_1 = require("./reto1");
var punto1 = new reto1_1.Punto(1, 5);
var punto2 = new reto1_1.Punto(2, 8);
var punto3 = new reto1_1.Punto(1, -5);
var punto4 = new reto1_1.Punto(15, 5);
var arrayPuntos = [punto1, punto2, punto3];
// console.log(punto1)
// console.log(punto1.distanciaAlOrigen());
// console.log(punto1.calcularDistancia(punto2));
// console.log(punto1.calcularCuadrante());
// console.log(arrayPuntos)
console.log(punto4.calcularMasCercano(arrayPuntos));
