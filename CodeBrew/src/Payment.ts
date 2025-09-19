interface IPayment{
    pay(amount:number):void;
}
class CreditCardPayment implements IPayment{
    
    pay(amount:number):void{
        console.log(`${amount} paid by Credit Card`)
    }
}

class DigitalWalletPayment implements IPayment{
    pay(amount:number){
        console.log(`${amount} paid by Digital Wallet`)
    }
}

class UPIPayment implements IPayment{
    pay(amount:number){
        console.log(`${amount} paid by UPI`)
    }
}

class ApplePay implements IPayment{
    pay(amount:number){
        console.log(`${amount} paid by Apple Pay`)
    }
}

const pay=new CreditCardPayment()
pay.pay(200)
const pay1=new DigitalWalletPayment()
pay1.pay(1990)
const pay2=new UPIPayment()
pay2.pay(1500)
const pay3=new ApplePay()
pay3.pay(445)
