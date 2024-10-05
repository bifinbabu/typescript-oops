abstract class Hero1 {
  hunger!: number;
  health!: number;

  abstract attack(): void;
  move(): void {
    console.log("moving");
  }
  eat(): void {
    console.log("eating");
  }
}

class Archer1 extends Hero1 {
  arrows!: number;

  attack(): void {
    console.log("Firing an arrow");
    this.arrows -= 1;
  }
}
class Knight1 extends Hero1 {
  shield!: number;

  attack(): void {
    console.log("I am swinging with a sword");
  }
}

const archer1: Hero1 = new Archer1();
const knight1: Hero1 = new Knight1();

// const bob: Hero1 = new Hero1();

const heros1: Hero1[] = [archer1, knight1];

for (let hero of heros1) {
  hero.attack();
}
