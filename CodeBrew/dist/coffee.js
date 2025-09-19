"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Espresso {
    get() {
        console.log(`Espresso ordered`);
    }
}
class Latte {
    get() {
        console.log(`Latte ordered`);
    }
}
class Milk {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
    get() {
        console.log(`${this.coffee} ordered`);
    }
}
class CaramelSyrup {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
    get() {
        console.log(`${this.coffee} ordered`);
    }
}
class WhippedCream {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
    get() {
        console.log(`${this.coffee} ordered`);
    }
}
const coffee1 = new WhippedCream(new CaramelSyrup(new Milk(new Latte)));
coffee1.get();
//# sourceMappingURL=coffee.js.map