"use strict";
// Create an interface Vehicle with a method start().
Object.defineProperty(exports, "__esModule", { value: true });
class Bike {
    start() {
        console.log("Bike is starting");
    }
}
class Car {
    start() {
        console.log("Car is starting");
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
const driver = new Driver(new Bike());
const driver1 = new Driver(new Car());
driver.drive();
driver1.drive();
//# sourceMappingURL=index.js.map