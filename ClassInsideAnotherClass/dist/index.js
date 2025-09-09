"use strict";
// Create two classes:
Object.defineProperty(exports, "__esModule", { value: true });
// Engine with method start() that logs "Engine started".
// Car that contains an object of Engine and a method drive() which first calls engine.start() and then logs "Car is driving".
// Task: Demonstrate how one class using another's functionality directly is an example of tight coupling.
// Expected Output:
// Engine started
// Car is driving
class Engine {
    start() {
        console.log("Engine started");
    }
}
class Car {
    engine;
    constructor() {
        this.engine = new Engine();
    }
    drive() {
        this.engine.start();
        console.log("Car is driving");
    }
}
const car1 = new Car();
car1.drive();
//# sourceMappingURL=index.js.map