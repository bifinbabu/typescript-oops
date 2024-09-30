class Player2 {
  // knows
  name!: string;
  health!: number;
  isInvincible!: boolean;
  crush!: Player2;

  // does
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const marioPlayer = new Player2();
marioPlayer.name = "Mario";
marioPlayer.health = 10;
marioPlayer.isInvincible = true;

const peach = new Player2();
peach.name = "Peach";
peach.health = 8;
peach.isInvincible = false;

//
marioPlayer.crush = peach;
console.log(marioPlayer.crush.name);

marioPlayer.greet();
peach.greet();
