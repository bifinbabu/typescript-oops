class Animal {
  hunger!: number;
  health!: number;
  protected coordX!: number;
  protected coordY!: number;

  setCoordX(x: number) {
    this.coordX = x;
  }
  setCoordY(y: number) {
    this.coordY = y;
  }

  eat() {
    console.log("I am eating");
  }
  sleep() {
    console.log("I am sleeping");
  }
  move() {
    console.log("I am moving");
  }
  makeNoise() {
    console.log("I am making noise");
  }
}

// Dog IS-A Animal
class Dog extends Animal {
  // Dog HAS-A owner
  owner!: string;

  makeNoise(): void {
    console.log("Bark");
  }

  returnToOwner() {
    console.log(`I am at ${this.coordX}, ${this.coordY} (Returning to owner)`);
  }
}
class Cat extends Animal {}

const dog = new Dog();
const cat = new Cat();
dog.setCoordX(10);
dog.setCoordY(10);
dog.makeNoise();
cat.makeNoise();

dog.returnToOwner();

class Canine extends Animal {
  makeNoise() {
    console.log("Bark Bark Bark");
  }
}

class NewDog extends Canine {
  owner!: string;

  returnToOwner() {
    console.log(`Returning to ${this.owner}`);
  }
}

class wolf extends Canine {}
