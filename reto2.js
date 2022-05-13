"use strict";
exports.__esModule = true;
var reto1_1 = require("./reto1");
var Nokia3210 = new reto1_1.Mobile("Nokia", "3210", "Nokia Networks", 10, "Blue", false, 0, 50);
var iPhone3G = new reto1_1.Mobile("IPhone3g", "3G", "Apple", 128, "Silver", true, 3, 600);
var samsungGalaxy10 = new reto1_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 260, "Negro", true, 3, 900);
console.log(Nokia3210);
Nokia3210.setNokia(true, 4);
iPhone3G.caracteristicas();
