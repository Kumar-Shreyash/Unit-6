"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PolyDuck {
    fly() {
        console.log("I can fly");
    }
}
class DesiDuck extends PolyDuck {
    fly() {
        console.log("DesiDuck flies at 10kmph");
    }
}
class VidesiDuck extends PolyDuck {
    fly() {
        console.log("VidesiDuck flies at 20kmph");
    }
}
class SmartDuck extends PolyDuck {
    fly() {
        console.log("SmartDuck flies at 50kmph");
    }
}
function makeDuckFly(duck) {
    return duck.fly();
}
makeDuckFly(new DesiDuck);
makeDuckFly(new VidesiDuck);
makeDuckFly(new SmartDuck);
class User {
    name;
    orgCode = "DuckCorp";
    role;
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    introduce() {
        console.log(`I am ${this.name} from ${this.orgCode}`);
    }
}
class Manager extends User {
    getRole() {
        console.log(this.role);
    }
}
const user1 = new User("Daffy", "Manager");
user1.introduce();
const user2 = new Manager("Alice", "Manager");
user2.getRole();
//# sourceMappingURL=index.js.map