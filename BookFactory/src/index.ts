// Problem Statement:

// Create a BookFactory that returns either a PremiumBook or a RegularBook based on the price. If price > 1000 → return PremiumBook, else RegularBook.

// Expected Output Example:

// const b1 = BookFactory.createBook("Design Patterns", 1500);
// console.log(b1.getCategory()); // Premium Book

// const b2 = BookFactory.createBook("JavaScript Guide", 500);
// console.log(b2.getCategory()); // Regular Book

interface Book{
    getDetails():void;
}
class RegularBook implements Book{
    private title:string
    constructor(title:string){
        this.title=title
    }
    getDetails(): string {
        return `Regular Book`
    }
}
class PremiumBook implements Book{
    private title:string
    constructor(title:string){
        this.title=title
    }
    getDetails(): string {
        return `Premium Book`
    }
}

class BookFactory{
    static createBook(title:string,price:number){
        if(price>1000){
            return new PremiumBook(title)
        }else{
            return new RegularBook(title)
        }
    }
}

const b1 = BookFactory.createBook("Design Patterns", 1500);
console.log(b1.getDetails()); // Premium Book

const b2 = BookFactory.createBook("JavaScript Guide", 500);
console.log(b2.getDetails()); // Regular Book
