//var msg = "Hello Typescript !"; // Type Inferencing
// msg = 100; // Error
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var msg = "Hello Typescript !"; // Type annotation
console.log(msg);
var age = 18;
var isRaining; // declaration
isRaining = true; // definition
var x;
x = 10;
x = "Hi";
x = [10, 20];
x = false;
function Add(x, y) {
    if (x == 0) {
        return "X must be greater than 0 !";
    }
    return x + y;
}
// Add("Hello", "Typescript"); // Error !
var result = Add(10, 20);
// Optional parameters
// function PrintBook(author?: string, title?: string, numOfPages?: number) {
//   console.log(author, title, numOfPages);
// }
// PrintBook();
// PrintBook("XYZ");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
// Default parameters
// function PrintBook(author: string, title: string, numOfPages: number = 100) {
//   console.log(author, title, numOfPages);
// }
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 400);
// var cars = ["BMW", "AUDI", "Merc"];
// var cars: string[] = ["BMW", "AUDI", "Merc"];
// Rest Parameters
function PrintBook(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "India 2020");
// class
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.id = 1;
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running at " + this.speed + " kmph !";
    };
    return Car;
}());
// var carObj = new Car();
// console.log(carObj.accelerate());
var carobj2 = new Car("David Putri", 400);
console.log(carobj2.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly, canSubmerge) {
        var _this = _super.call(this, name, speed) || this;
        _this.canFly = canFly;
        _this.canSubmerge = canSubmerge;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Can it fly ? " + this.canFly;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 300, true, true);
console.log(jbc.accelerate());
