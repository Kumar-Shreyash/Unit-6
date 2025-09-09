"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
}
class Flying {
    fly() {
        console.log("Flying...");
    }
}
class Ostrich extends Bird {
}
class Sparrow extends Bird {
    flying;
    constructor(flying) {
        super();
        this.flying = flying;
    }
    fly() {
        this.flying.fly();
    }
}
const sparrow1 = new Sparrow(new Flying());
sparrow1.fly();
//# sourceMappingURL=index.js.map