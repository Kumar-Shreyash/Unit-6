"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bike {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    getDetails() {
        console.log(`Bike : ${this.brand}`);
    }
}
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    getDetails() {
        console.log(`Car : ${this.brand}`);
    }
}
class VehicleFactory {
    static createVehicle(type, brand) {
        if (type === "Bike") {
            return new Bike(brand);
        }
        else if (type === "Car") {
            return new Car(brand);
        }
        else {
            throw new Error("Invalid vehicle type");
        }
    }
}
const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
myBike.getDetails(); // Bike: Yamaha
const myCar = VehicleFactory.createVehicle("Car", "Toyota");
myCar.getDetails(); // Car: Toyota
//# sourceMappingURL=index.js.map