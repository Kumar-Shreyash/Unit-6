"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OldPrinter {
    print() {
        console.log("Printing...");
    }
}
class SmartPrinter {
    fax() {
        console.log("Faxing...");
    }
    scan() {
        console.log("Scanning...");
    }
    print() {
        console.log("Printing...");
    }
}
const oldPrinter = new OldPrinter();
oldPrinter.print();
const smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
smartPrinter.fax();
//# sourceMappingURL=index.js.map