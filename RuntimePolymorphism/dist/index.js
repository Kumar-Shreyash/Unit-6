"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Some sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark!");
    }
}
function makeSound(animal) {
    animal.makeSound();
}
const animal = new Animal();
animal.makeSound();
const dog = new Dog();
dog.makeSound();
makeSound(dog);
//# sourceMappingURL=index.js.map