"use strict";
// You are building a notification system where a NotificationCenter must notify multiple devices (Smartphone, Tablet) of updates.
Object.defineProperty(exports, "__esModule", { value: true });
class Smartphone {
    update() {
        console.log("Smartphone received notification");
    }
}
class Tablet {
    update() {
        console.log("Tablet received notification");
    }
}
class NotificationCenter {
    observers = [];
    attach(observer) {
        this.observers.push(observer);
        const name = observer.constructor.name;
        console.log(`Observer added : ${name}`);
    }
    detach(observer) {
        this.observers = this.observers.filter((ele) => ele !== observer);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}
const smartphone = new Smartphone();
const tablet = new Tablet();
const notificationCenter = new NotificationCenter();
notificationCenter.attach(smartphone);
notificationCenter.attach(tablet);
notificationCenter.notify();
//# sourceMappingURL=index.js.map