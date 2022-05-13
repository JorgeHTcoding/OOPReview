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
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getTrademakr = function () {
        return this.trademark;
    };
    Mobile.prototype.setsdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setis5g = function (is5g) {
        this.is5g = is5g;
    };
    Mobile.prototype.getis5g = function () {
        return this.is5g;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setNokia = function (is5g, camaraNumber) {
        this.is5g = is5g;
        this.cameraNumber = camaraNumber;
    };
    Mobile.prototype.caracteristicas = function () {
        "The characteristics of the mobile name are: " + "\n" + "\n"
            + '\uD83D\uDC04 ' + "Name: " + this.name + "\n"
            + '\uD83D\uDC04 ' + "Model: " + this.model + "\n"
            + '\uD83D\uDC04 ' + "Trademark: " + this.trademark + "\n"
            + '\uD83D\uDC04 ' + "SD Size (GB): " + this.sdSize + "\n"
            + '\uD83D\uDC04 ' + "Color: " + this.color + "\n"
            + '\uD83D\uDC04 ' + "Is 5g: " + this.is5g + "\n"
            + '\uD83D\uDC04 ' + "Number of Cameras: " + this.cameraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
