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
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.makeNoise = function () {
        console.log("Make noise");
    };
    Animal1.prototype.move = function () {
        console.log("I am moving from ".concat(this.coordX, ",").concat(this.coordY));
    };
    Animal1.prototype.setCoordX = function (x) {
        this.coordX = x;
    };
    Animal1.prototype.setCoordY = function (y) {
        this.coordY = y;
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.makeNoise = function () {
        console.log("Bark bark bark");
    };
    //   New approach like overriding
    Dog1.prototype.move = function () {
        // Getting up on four paws
        console.log("Getting up on four paws");
        // I'm moving from _,_
        _super.prototype.move.call(this);
    };
    return Dog1;
}(Animal1));
var dog1 = new Dog1();
dog1.makeNoise();
dog1.setCoordX(10);
dog1.setCoordY(10);
dog1.move();
