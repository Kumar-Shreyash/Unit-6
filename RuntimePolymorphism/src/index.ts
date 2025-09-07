class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

function makeSound(animal: Animal) {
  animal.makeSound()
}

const animal=new Animal()
animal.makeSound()
const dog=new Dog()
dog.makeSound()
makeSound(dog)