interface Coffee{
    get():void;
}

class Espresso implements Coffee{
    get():void{
        console.log(`Espresso ordered`)
    }
}

class Latte implements Coffee{

    get():void{
        console.log(`Latte ordered`)
    }
}

class Milk implements Coffee{
    coffee:Coffee
    constructor(coffee:Coffee){
        this.coffee=coffee
    }
    get():void{
        console.log(`${this.coffee} ordered`)
    }
}

class CaramelSyrup implements Coffee{
    coffee:Coffee
    constructor(coffee:Coffee){
        this.coffee=coffee
    }
    get():void{
        console.log(`${this.coffee} ordered`)
    }
}


 class WhippedCream implements Coffee{
    coffee:Coffee
    constructor(coffee:Coffee){
        this.coffee=coffee
    }
    get():void{
        console.log(`${this.coffee} ordered`)
    }
}

const coffee1=new WhippedCream(new CaramelSyrup(new Milk(new Latte)))
coffee1.get()