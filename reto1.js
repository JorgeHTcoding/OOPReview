"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5g = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.setNokia = function (is5g, camaraNumber) {
        this.is5g = is5g;
        this.cameraNumber = camaraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
