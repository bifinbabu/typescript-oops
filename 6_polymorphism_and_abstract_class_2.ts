abstract class Hero2 {
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

abstract class Mage1 extends Hero2 {
  mana!: number;
}

class Wizard1 extends Mage1 {
  attack(): void {
    this.mana -= 1;
    console.log("Wizard attacks");
  }
}
class Witch1 extends Mage1 {
  attack(): void {
    this.mana -= 1;
    console.log("Witch attacks");
  }
}

const wizard1 = new Wizard1();
const witch1 = new Witch1();

wizard1.attack();
witch1.attack();
