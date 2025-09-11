"use strict";
// Problem Statement:
Object.defineProperty(exports, "__esModule", { value: true });
class RegularBook {
    title;
    constructor(title) {
        this.title = title;
    }
    getDetails() {
        return `Regular Book`;
    }
}
class PremiumBook {
    title;
    constructor(title) {
        this.title = title;
    }
    getDetails() {
        return `Premium Book`;
    }
}
class BookFactory {
    static createBook(title, price) {
        if (price > 1000) {
            return new PremiumBook(title);
        }
        else {
            return new RegularBook(title);
        }
    }
}
const b1 = BookFactory.createBook("Design Patterns", 1500);
console.log(b1.getDetails()); // Premium Book
const b2 = BookFactory.createBook("JavaScript Guide", 500);
console.log(b2.getDetails()); // Regular Book
//# sourceMappingURL=index.js.map