"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    swim() {
        console.log("I Know swimming");
    }
}
class MallardDuck extends Duck {
}
const Duck1 = new MallardDuck();
Duck1.swim();
class Bird {
    fly() {
        console.log("I can fly");
    }
}
class Penguin extends Bird {
    fly() {
        console.log("I cannot fly");
    }
}
const bird1 = new Bird();
bird1.fly();
const penguin = new Penguin();
penguin.fly();
class ToyDuck {
    swim() {
        console.log("Can float on water");
    }
    fly() {
        console.log("Cannot fly");
    }
    sound() {
        console.log("Cannot sound");
    }
}
const toyDuck1 = new ToyDuck();
toyDuck1.swim();
toyDuck1.fly();
toyDuck1.sound();
//# sourceMappingURL=index.js.map