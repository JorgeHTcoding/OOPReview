"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var reto1_1 = require("./reto1");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation(mobiles);
    }
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function (mobiles) {
        var precio = 0;
        for (var i = 0; i < mobiles.length; i++) {
            precio += mobiles[i].getPrice();
        }
        return precio;
    };
    MobileLibrary.prototype.printLibrary = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log(this.mobiles[i].caracteristicas());
        }
        console.log('\uD83D\uDC04 ' + "..." + "\n" +
            '\uD83D\uDC04 ' + "Price Overall: " + this.totalPrice + "\n");
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var Nokia3210 = new reto1_1.Mobile("Nokia", "3210", "Nokia Networks", 10, "Blue", false, 0, 50);
var iPhone3G = new reto1_1.Mobile("IPhone3g", "3G", "Apple", 128, "Silver", true, 3, 600);
var samsungGalaxy10 = new reto1_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 260, "Negro", true, 3, 900);
var huaweiP50pro = new reto1_1.Mobile("Huawei P50 pro", "P50 pro", "Huawei", 182, "Dorado", true, 4, 850);
var arrayMobiles = [Nokia3210, iPhone3G, samsungGalaxy10, huaweiP50pro];
var libreriaMobile = new MobileLibrary("Liberia Móviles", "El Patio de mi Casa", arrayMobiles);
libreriaMobile.printLibrary();
