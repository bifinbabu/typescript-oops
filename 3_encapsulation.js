var PlayerEncapsulation = /** @class */ (function () {
    function PlayerEncapsulation() {
    }
    PlayerEncapsulation.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("You can't set the health below 0");
            return;
        }
        this.health = health;
    };
    PlayerEncapsulation.prototype.getHealth = function () {
        return this.health;
    };
    PlayerEncapsulation.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    PlayerEncapsulation.prototype.getSpeed = function () {
        return this.speed;
    };
    return PlayerEncapsulation;
}());
var marioP = new PlayerEncapsulation();
marioP.setHealth(-3);
marioP.setHealth(10);
marioP.setSpeed(1);
console.log(marioP.getHealth(), marioP.getSpeed());
