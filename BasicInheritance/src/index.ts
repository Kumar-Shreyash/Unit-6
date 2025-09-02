class Duck{
    swim():void{
        console.log("I Know swimming")
    }
}
class MallardDuck extends Duck{

}
const Duck1=new MallardDuck()
Duck1.swim()

class Bird{
    fly():void{
        console.log("I can fly")
    }
}
class Penguin extends Bird{
    fly():void{
        console.log("I cannot fly")
    }
}
const bird1=new Bird()
bird1.fly()
const penguin=new Penguin()
penguin.fly()

interface IDuck{
    swim():void

    fly():void

    sound():void
}
class ToyDuck implements IDuck{
    swim():void{
        console.log("Can float on water")
    }

    fly():void{
        console.log("Cannot fly")
    }
    sound():void{
        console.log("Cannot sound")
    }
}
const toyDuck1=new ToyDuck()
toyDuck1.swim()
toyDuck1.fly()
toyDuck1.sound()

