"use strict";
// You are given a tightly coupled Car class that uses an Engine class directly.
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    start() {
        console.log("Car is starting");
    }
}
class Bike {
    start() {
        console.log("Bike is starting");
    }
}
class Driver {
    vehicle;
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
    drive() {
        this.vehicle.start();
        console.log("Driving...");
    }
}
const driver = new Driver(new Car());
driver.drive();
const driver1 = new Driver(new Bike());
driver1.drive();
//# sourceMappingURL=index.js.map