class CharacterClass {
  static characterCount = 0;

  private hunger!: number;
  private health!: number;

  constructor(hunger: number, health: number) {
    this.hunger = hunger;
    this.health = health;
  }

  setHunger(hunger: number): void {
    this.hunger = hunger;
  }

  setHealth(health: number): void {
    this.health = health;
  }

  getHunger(): number {
    return this.hunger;
  }

  getHealth(): number {
    return this.health;
  }
}

const jeff = new CharacterClass(100, 100);
console.log(jeff.getHunger());
console.log(jeff.getHealth());

class HeroClass extends CharacterClass {
  // readonly items only works inside the constructor
  private heroId!: number;

  constructor(heroId: number, hunger: number, health: number) {
    CharacterClass.characterCount += 1;
    console.log(`I am the ${CharacterClass.characterCount} character created`);

    super(hunger, health);
    this.heroId = heroId;
  }

  setHeroId(heroId: number): void {
    this.heroId = heroId;
  }

  getHeroId(): number {
    return this.heroId;
  }
}

const jeff1 = new HeroClass(123, 100, 100);
const jeff2 = new HeroClass(123, 100, 100);
const jeff3 = new HeroClass(123, 100, 100);
// CharacterClass.characterCount
