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
var CharacterClass = /** @class */ (function () {
    function CharacterClass(hunger, health) {
        this.hunger = hunger;
        this.health = health;
    }
    CharacterClass.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    CharacterClass.prototype.setHealth = function (health) {
        this.health = health;
    };
    CharacterClass.prototype.getHunger = function () {
        return this.hunger;
    };
    CharacterClass.prototype.getHealth = function () {
        return this.health;
    };
    CharacterClass.characterCount = 0;
    return CharacterClass;
}());
var jeff = new CharacterClass(100, 100);
console.log(jeff.getHunger());
console.log(jeff.getHealth());
var HeroClass = /** @class */ (function (_super) {
    __extends(HeroClass, _super);
    function HeroClass(heroId, hunger, health) {
        var _this = this;
        CharacterClass.characterCount += 1;
        console.log("I am the ".concat(CharacterClass.characterCount, " character created"));
        _this = _super.call(this, hunger, health) || this;
        _this.heroId = heroId;
        return _this;
    }
    HeroClass.prototype.setHeroId = function (heroId) {
        this.heroId = heroId;
    };
    HeroClass.prototype.getHeroId = function () {
        return this.heroId;
    };
    return HeroClass;
}(CharacterClass));
var jeff1 = new HeroClass(123, 100, 100);
var jeff2 = new HeroClass(123, 100, 100);
var jeff3 = new HeroClass(123, 100, 100);
// CharacterClass.characterCount
