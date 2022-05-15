"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        var xString = this.x.toString();
        var yString = this.y.toString();
        return "(" + xString + "," + yString + ")";
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt((Math.pow((this.x - 0), 2)) + (Math.pow((this.y - 0), 2)));
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt((Math.pow((this.x - otroPunto.x), 2)) + (Math.pow((this.y - otroPunto.y), 2)));
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        if (this.x > 0 && this.y > 0) {
            return 1;
        }
        if (this.x < 0 && this.y > 0) {
            return 2;
        }
        if (this.x < 0 && this.y < 0) {
            return 3;
        }
        if (this.x > 0 && this.y < 0)
            return 4;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var masCercaAun;
        for (var i = 1; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < this.calcularDistancia(puntos[i - 1])) {
                masCercaAun = puntos[i];
            }
        }
        return masCercaAun;
        // let closestPoint;
        // if(puntos.length > 0){
        //     let firstPoint = this.calcularDistancia(puntos[0])    
        //     closestPoint = puntos[0]      
        // for(let i = 0; i < puntos.length; i++){
        //     let closerPoint = this.calcularDistancia(puntos[i])
        // if(closerPoint < firstPoint){
        //     closerPoint = closestPoint;
        //     closestPoint = puntos[i]
    };
    return Punto;
}());
exports.Punto = Punto;
//         }
//     }
// }
