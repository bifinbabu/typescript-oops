class Hero {
  hunger!: number;
  health!: number;

  attack() {
    console.log("Attacking");
  }
  move() {
    console.log("moving");
  }
  eat() {
    console.log("eating");
  }
}

class Archer extends Hero {
  arrows!: number;

  attack(): void {
    super.attack();
    console.log("Firing an arrow");
    this.arrows -= 1;
  }
}
class Mage extends Hero {
  mana!: number;

  attack(): void {
    super.attack();
    console.log("Throwing a potion");
    this.mana -= 1;
  }
}
class Knight extends Hero {
  shield!: number;

  attack(): void {
    super.attack();
    console.log("I am swinging with a sword");
  }
}

class Wizard extends Mage {}
class Witch extends Mage {}

class Tribe {
  private heros!: Hero[];

  setHeros(heros: Hero[]) {
    this.heros = heros;
  }

  attack() {
    for (let hero of this.heros) {
      hero.attack();
    }
  }
}

const archer: Hero = new Archer();
const mage: Hero = new Mage();
const knight: Hero = new Knight();
const wizard: Mage = new Wizard();
const witch: Hero = new Wizard();

// archer.attack();
// mage.attack();
// knight.attack();
const heros: Hero[] = [archer, mage, knight];
const tribe = new Tribe();
tribe.setHeros(heros);

tribe.attack();

// New ask: Thieves
class Thief extends Hero {
  attack(): void {
    super.attack();
    console.log("Pick pocket");
  }
}

const thief = new Thief();
const heros2 = [knight, thief, mage];
const tribe2 = new Tribe();
tribe2.setHeros(heros2);
tribe2.attack();
