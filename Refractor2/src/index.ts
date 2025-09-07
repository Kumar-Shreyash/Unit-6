// class Shipping {
//     calculate(type: string): number {
//       if (type === "standard") return 50;
//       if (type === "express") return 100;
//       return 0;
//     }
//   }

interface Shipping {
    calculate(): number;
  }

  class Standard implements Shipping{
    calculate():number{
        return 50
    }
  }
  class Express implements Shipping{
    calculate():number{
        return 100
    }
  }
  class Normal implements Shipping{
    calculate():number{
        return 0
    }
  }

  