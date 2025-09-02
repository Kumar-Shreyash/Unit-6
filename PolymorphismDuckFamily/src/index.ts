class PolyDuck{
    fly():void{
        console.log("I can fly")
    }
}

class DesiDuck extends PolyDuck{

    fly():void{
        console.log("DesiDuck flies at 10kmph")
    }
} 
class VidesiDuck extends PolyDuck{
    fly():void{
        console.log("VidesiDuck flies at 20kmph")
    }
} 
class SmartDuck extends PolyDuck{
    fly():void{
        console.log("SmartDuck flies at 50kmph")
    }
}
function makeDuckFly(duck: PolyDuck):void{
    return duck.fly()
}
makeDuckFly(new DesiDuck)
makeDuckFly(new VidesiDuck)
makeDuckFly(new SmartDuck)

class User{
    public name:string;
    private orgCode:string= "DuckCorp";
    protected role:string;

    constructor(name:string,role:string){
        this.name=name;
        this.role=role;
    }

    introduce():void{
        console.log(`I am ${this.name} from ${this.orgCode}`)
    }
}

class Manager extends User{
    getRole():void{
        console.log(this.role)
    }
}

const user1=new User("Daffy","Manager")
user1.introduce()
const user2=new Manager("Alice","Manager")
user2.getRole()