class PlayerEncapsulation {
  private health!: number;
  private speed!: number;

  setHealth(health: number) {
    if (health < 0) {
      console.log("You can't set the health below 0");
      return;
    }
    this.health = health;
  }

  getHealth() {
    return this.health;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }
}

const marioP = new PlayerEncapsulation();

marioP.setHealth(-3);
marioP.setHealth(10);
marioP.setSpeed(1);

console.log(marioP.getHealth(), marioP.getSpeed());
