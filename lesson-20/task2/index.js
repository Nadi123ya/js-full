// eslint-disable-next-line max-classes-per-file
export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}
export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name);
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
}
const ship1 = new Ship("Nadiia", 0, 30);
console.log(ship1);
ship1.stop();
ship1.move();
