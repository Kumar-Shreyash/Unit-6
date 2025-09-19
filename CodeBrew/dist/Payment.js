"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCardPayment {
    pay(amount) {
        console.log(`${amount} paid by Credit Card`);
    }
}
class DigitalWalletPayment {
    pay(amount) {
        console.log(`${amount} paid by Digital Wallet`);
    }
}
class UPIPayment {
    pay(amount) {
        console.log(`${amount} paid by UPI`);
    }
}
class ApplePay {
    pay(amount) {
        console.log(`${amount} paid by Apple Pay`);
    }
}
const pay = new CreditCardPayment();
pay.pay(200);
const pay1 = new DigitalWalletPayment();
pay1.pay(1990);
const pay2 = new UPIPayment();
pay2.pay(1500);
const pay3 = new ApplePay();
pay3.pay(445);
//# sourceMappingURL=Payment.js.map