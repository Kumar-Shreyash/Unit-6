"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FastFly {
    fly() {
        console.log("Flying fast like a rocket!");
    }
}
class NoFly {
    fly() {
        console.log("I cannot fly");
    }
}
class Duck {
    flyStrategy;
    constructor(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }
    performFly() {
        this.flyStrategy.fly();
    }
    setFlyStrategy(newStrategy) {
        this.flyStrategy = newStrategy;
    }
}
const duck = new Duck(new FastFly());
duck.performFly(); // Fast flying
duck.setFlyStrategy(new NoFly());
duck.performFly(); // Cannot fly
//# sourceMappingURL=index.js.map