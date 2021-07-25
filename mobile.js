"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    ;
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    ;
    Mobile.prototype.getName = function () {
        var result = this.name;
        return result;
    };
    ;
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    ;
    Mobile.prototype.getModel = function () {
        var result = this.model;
        return result;
    };
    ;
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    ;
    Mobile.prototype.getTrademark = function () {
        var result = this.trademark;
        return result;
    };
    ;
    Mobile.prototype.setSdSize = function (newSdSize) {
        this.sdSize = newSdSize;
    };
    ;
    Mobile.prototype.getSdSize = function () {
        var result = this.sdSize;
        return result;
    };
    ;
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    ;
    Mobile.prototype.getColor = function () {
        var result = this.color;
        return result;
    };
    ;
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    ;
    Mobile.prototype.getIs5G = function () {
        var result = this.is5G;
        return result;
    };
    ;
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    ;
    Mobile.prototype.getCameraNumber = function () {
        var result = this.cameraNumber;
        return result;
    };
    ;
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    ;
    Mobile.prototype.getPrice = function () {
        var result = this.price;
        return result;
    };
    ;
    Mobile.prototype.printFeatures = function () {
        console.log('\nThe features of the mobile', this.name, 'are:\n\tName:', this.name, '\n\tModel:', this.model, '\n\tTrademark:', this.trademark, '\n\tSD Size(GB):', this.sdSize, '\n', '\tColor:', this.color, '\n\tIs 5G?:', this.is5G, '\n', '\tNumber of Cameras:', this.cameraNumber);
    };
    ;
    return Mobile;
}());
exports.Mobile = Mobile;
;
