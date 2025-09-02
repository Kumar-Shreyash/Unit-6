interface FlyStrategy{
    fly():void;
}
class FastFly implements FlyStrategy{
    fly():void{
        console.log("Flying fast like a rocket!")
    }
}
class NoFly implements FlyStrategy{
    fly():void{
        console.log("I cannot fly")
    }
}

class Duck{
    flyStrategy:FlyStrategy
    constructor(flyStrategy:FlyStrategy){
        this.flyStrategy=flyStrategy
    }
    performFly():void{
        this.flyStrategy.fly()
    }
    setFlyStrategy(newStrategy:FlyStrategy):void{
        this.flyStrategy=newStrategy
    }
}

const duck = new Duck(new FastFly());
duck.performFly(); // Fast flying
duck.setFlyStrategy(new NoFly());
duck.performFly(); // Cannot fly