interface Print {
  print(): void;
}
interface Scan {
  scan(): void;
}
interface Fax {
  fax(): void;
}

class OldPrinter implements Print {
  print(): void {
    console.log("Printing...");
  }
}

class SmartPrinter implements Print, Scan, Fax {
  fax(): void {
    console.log("Faxing...");
  }
  scan(): void {
    console.log("Scanning...");
  }
  print(): void {
    console.log("Printing...");
  }
}

const oldPrinter=new OldPrinter()
oldPrinter.print()
const smartPrinter=new SmartPrinter()
smartPrinter.print()
smartPrinter.scan()
smartPrinter.fax()