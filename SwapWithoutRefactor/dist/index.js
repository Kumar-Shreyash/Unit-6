"use strict";
// You are given:
Object.defineProperty(exports, "__esModule", { value: true });
class PetrolEngine {
    start() {
        console.log("Petrol engine started");
    }
}
class DieselEngine {
    start() {
        console.log("Diesel engine started");
    }
}
class Car {
    engine;
    constructor(engine) {
        this.engine = engine;
    }
    drive() {
        this.engine.start();
        console.log("Driving car");
    }
}
let car = new Car(new PetrolEngine());
let car1 = new Car(new DieselEngine());
car.drive();
car1.drive();
// Task: Explain why you cannot easily switch to a DieselEngine without modifying Car.
// Switcing to diesel engine is not easy as Car is directly dependent on PetrolEngine which violates Open/Closed Principle
//# sourceMappingURL=index.js.map