"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(puntoA, puntoB, puntoC) {
        this.puntoA = puntoA;
        this.puntoB = puntoB;
        this.puntoC = puntoC;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var resultadoLongitud = [];
        var distanciaAB = this.puntoA.calcularDistancia(this.puntoB);
        var distaciaAC = this.puntoA.calcularDistancia(this.puntoC);
        var distanciaBC = this.puntoB.calcularDistancia(this.puntoC);
        return resultadoLongitud = [distaciaAC, distanciaAB, distanciaBC];
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
