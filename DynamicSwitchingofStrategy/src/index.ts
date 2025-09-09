// Create an interface Vehicle with a method start().

// Implement Bike and Car classes that log appropriate start() messages.
// Create a Driver class that receives a Vehicle in its constructor and calls drive().
// Then: Add a setVehicle() method in Driver to switch between vehicles at runtime.

// Expected Output:

// Bike is starting
// Driving...
// Car is starting
// Driving...

interface Vehicle{
    start():void;
}

class Bike implements Vehicle{
    start():void{
        console.log("Bike is starting")
    }
}

class Car implements Vehicle{
    start():void{
        console.log("Car is starting")
    }
}

class Driver{
    private vehicle:Vehicle;

    constructor(vehicle:Vehicle){
        this.vehicle=vehicle
    }
    drive():void{
        this.vehicle.start()
        console.log("Driving...")
    }
}

const driver=new Driver(new Bike()) 
const driver1=new Driver(new Car()) 
driver.drive()
driver1.drive()
