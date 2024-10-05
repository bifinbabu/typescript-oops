class Animal1 {
  private coordX!: number;
  private coordY!: number;

  makeNoise() {
    console.log("Make noise");
  }

  move() {
    console.log(`I am moving from ${this.coordX},${this.coordY}`);
  }

  setCoordX(x: number) {
    this.coordX = x;
  }
  setCoordY(y: number) {
    this.coordY = y;
  }
}

class Dog1 extends Animal1 {
  makeNoise(): void {
    console.log("Bark bark bark");
  }

  //   New approach like overriding
  move() {
    // Getting up on four paws
    console.log("Getting up on four paws");
    // I'm moving from _,_
    super.move();
  }
}

const dog1 = new Dog1();
dog1.makeNoise();
dog1.setCoordX(10);
dog1.setCoordY(10);
dog1.move();
