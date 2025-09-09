class Bird {
   
  }

  interface Fly{
    fly(): void; 
  }

  class Flying implements Fly{
    fly():void{
        console.log("Flying...")
    }
  }
  
  class Ostrich extends Bird {
    
  }
  
  class Sparrow extends Bird{
    flying:Fly

    constructor(flying:Fly){
        super()
        this.flying=flying
    }
    fly():void{
        this.flying.fly()
    }
  }
  const sparrow1=new Sparrow(new Flying())
  sparrow1.fly()