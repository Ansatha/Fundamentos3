"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    ;
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    ;
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    ;
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    ;
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    ;
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    ;
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles.push(mobiles);
    };
    ;
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    ;
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    ;
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var totalPrice = 0;
        for (var mobile in this.mobiles) {
            totalPrice += this.mobiles[mobile].getPrice();
        }
        ;
        return totalPrice;
    };
    ;
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
;
