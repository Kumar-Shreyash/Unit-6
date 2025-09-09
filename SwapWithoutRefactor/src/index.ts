// You are given:

// class PetrolEngine {
//   start(): void {
//     console.log("Petrol engine started");
//   }
// }

// class Car {
//   engine: PetrolEngine = new PetrolEngine();
//   drive(): void {
//     this.engine.start();
//     console.log("Driving car");
//   }
// }

// Task: Explain why you cannot easily switch to a DieselEngine without modifying Car.

// Then refactor it using an interface to show loose coupling.

interface IEngine {
  start(): void;
}

class PetrolEngine implements IEngine {
  start(): void {
    console.log("Petrol engine started");
  }
}
class DieselEngine implements IEngine {
  start(): void {
    console.log("Diesel engine started");
  }
}

class Car {
  private engine: IEngine;

  constructor(engine: IEngine) {
    this.engine = engine;
  }
  drive(): void {
    this.engine.start();
    console.log("Driving car");
  }
}

let car=new Car(new PetrolEngine())
let car1=new Car(new DieselEngine())
car.drive()
car1.drive()


// Task: Explain why you cannot easily switch to a DieselEngine without modifying Car.
// Switcing to diesel engine is not easy as Car is directly dependent on PetrolEngine which violates Open/Closed Principle
