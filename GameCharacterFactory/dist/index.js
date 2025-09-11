"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warrior {
    name;
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Warior ${this.name} - Strength: 90, Defense: 70`;
    }
}
class Archer {
    name;
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Archer ${this.name} - Agility: 80, Strength: 40`;
    }
}
class Mage {
    name;
    constructor(name) {
        this.name = name;
    }
    getStats() {
        return `Mage ${this.name} - Intelligence: 90, Mana: 100`;
    }
}
class CharacterFactory {
    static createCharacter(type, name) {
        switch (type.toLocaleLowerCase()) {
            case "warrior":
                return new Warrior(name);
            case "archer":
                return new Archer(name);
            case "mage":
                return new Mage(name);
            default:
                throw new Error("Invalid character type");
        }
    }
}
const archer = CharacterFactory.createCharacter("Archer", "Eldrin");
console.log(archer.getStats());
// Output: Archer Eldrin - Agility: 80, Strength: 40
const mage = CharacterFactory.createCharacter("Mage", "Gandalf");
console.log(mage.getStats());
// Output: Mage Gandalf - Intelligence: 90, Mana: 100
//# sourceMappingURL=index.js.map