var Player = /** @class */ (function () {
    function Player() {
    }
    // does
    Player.prototype.greet = function () {
        console.log("Hello world");
    };
    return Player;
}());
var mario = new Player();
mario.health = 10;
mario.speed = 1;
mario.greet();
