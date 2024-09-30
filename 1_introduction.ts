class Player {
  // knows
  health!: number;
  speed!: number;

  // does
  greet() {
    console.log("Hello world");
  }
}

const mario = new Player();
mario.health = 10;
mario.speed = 1;
mario.greet();
