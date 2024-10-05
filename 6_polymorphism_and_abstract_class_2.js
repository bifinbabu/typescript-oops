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
var Hero2 = /** @class */ (function () {
    function Hero2() {
    }
    Hero2.prototype.move = function () {
        console.log("moving");
    };
    Hero2.prototype.eat = function () {
        console.log("eating");
    };
    return Hero2;
}());
var Mage1 = /** @class */ (function (_super) {
    __extends(Mage1, _super);
    function Mage1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage1;
}(Hero2));
var Wizard1 = /** @class */ (function (_super) {
    __extends(Wizard1, _super);
    function Wizard1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard1.prototype.attack = function () {
        this.mana -= 1;
        console.log("Wizard attacks");
    };
    return Wizard1;
}(Mage1));
var Witch1 = /** @class */ (function (_super) {
    __extends(Witch1, _super);
    function Witch1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Witch1.prototype.attack = function () {
        this.mana -= 1;
        console.log("Witch attacks");
    };
    return Witch1;
}(Mage1));
var wizard1 = new Wizard1();
var witch1 = new Witch1();
wizard1.attack();
witch1.attack();
