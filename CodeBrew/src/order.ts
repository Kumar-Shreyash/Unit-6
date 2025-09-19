class Order{
    state:string=""

    constructor(state:string){
        this.state=state
    }

    proceedToNextState():void{
        if(this.state===""){
            this.state="Pending"
            console.log(this.state)
        }
        else if(this.state==="Pending"){
            this.state="Prepared"
            console.log(this.state)

        }
        else if(this.state==="Prepared"){
            this.state="Ready"
            console.log(this.state)

        }
        else if(this.state==="Ready"){
            this.state="Order delievered"
            console.log(this.state)

        }else if(this.state==="Order Cancelled"){
        console.log("Order Cancelled")
        }
        else{
            console.log("Order Delievered")
        }
    }
    
    cancelOrder():void{
        console.log("Order Cancelled")
        this.state="Order Cancelled"
    }
}
const order=new Order("")
order.proceedToNextState()
order.proceedToNextState()
order.cancelOrder()
order.proceedToNextState()
order.proceedToNextState()
order.proceedToNextState()
order.proceedToNextState()

