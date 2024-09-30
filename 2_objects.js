var Player2 = /** @class */ (function () {
    function Player2() {
    }
    // does
    Player2.prototype.greet = function () {
        console.log("Hello my name is ".concat(this.name));
    };
    return Player2;
}());
var marioPlayer = new Player2();
marioPlayer.name = "Mario";
marioPlayer.health = 10;
marioPlayer.isInvincible = true;
var peach = new Player2();
peach.name = "Peach";
peach.health = 8;
peach.isInvincible = false;
//
marioPlayer.crush = peach;
console.log(marioPlayer.crush.name);
marioPlayer.greet();
peach.greet();
