abstract class Character {
  hunger!: number;
  health!: number;

  abstract eat(): void;
}

interface HeroCharacter extends Character {
  heroId: number;
}

interface Enemy extends Character {
  enemyId: number;
}

// Spy IS-A HeroCharacter, IS-A Enemy
class Spy implements HeroCharacter, Enemy {
  hunger!: number;
  health!: number;
  heroId!: number;
  enemyId!: number;

  eat(): void {
    this.hunger -= 1;
  }
}

const hero: HeroCharacter = new Spy();
const enemy: Enemy = new Spy();
