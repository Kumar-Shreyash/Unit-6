interface Product{
    getDescription():void;
}
class Laptop implements Product{
    private name:string;
    private price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    }
    getDescription(): string {
        return `Laptop : ${this.name}, Price : ${this .price}`
    }
}
class Mobile implements Product{
    private name:string;
    private price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    }
    getDescription(): string {
        return `Mobile : ${this.name}, Price : ${this .price}`
    }
}
class Tablet implements Product{
    private name:string;
    private price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    }
    getDescription(): string {
        return `Tablet : ${this.name}, Price : ${this .price}`
    }
}
type ProductConstructor = new (name: string, price: number) => Product;

const productMap: Record<string, ProductConstructor> = {
  Laptop: Laptop,
  Mobile: Mobile,
  Tablet: Tablet
};

class ProductFactory {
  static createProduct(type: string, name: string, price: number): Product {
    const ProductClass = productMap[type];
    if (!ProductClass) throw new Error("Unknown product type");
    return new ProductClass(name, price);
  }
}
const t = ProductFactory.createProduct("Tablet", "Galaxy Tab", 1100);
console.log(t.getDescription()); // Tablet: Galaxy Tab, Price: $1100

