interface Vehicle{
    getDetails():void;
}
class Bike implements Vehicle{
    private brand:string
    constructor(brand:string){
        this.brand=brand
    }
    getDetails():void{
        console.log(`Bike : ${this.brand}`)
    }
}
class Car implements Vehicle{
    private brand:string
    constructor(brand:string){
        this.brand=brand
    }
    getDetails():void{
        console.log(`Car : ${this.brand}`)
    }
}
class VehicleFactory{
    static createVehicle(type:string,brand:string):Vehicle{
        if(type==="Bike"){
            return new Bike(brand)
        }else if(type==="Car"){
            return new Car(brand)
        }else{
            throw new Error("Invalid vehicle type")
        }
    }
}

const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
myBike.getDetails(); // Bike: Yamaha

const myCar = VehicleFactory.createVehicle("Car", "Toyota");
myCar.getDetails(); // Car: Toyota