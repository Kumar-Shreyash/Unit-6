// You are building a notification system where a NotificationCenter must notify multiple devices (Smartphone, Tablet) of updates.

// Create Observer interface with update() method
// Implement Smartphone and Tablet classes that log a message in update()
// Create a NotificationCenter class with:
// attach(), detach(), and notify() methods
// A list of Observer objects
// Allow devices to subscribe or unsubscribe and automatically get updates
// Expected Output:

// Observer added: Smartphone
// Observer added: Tablet
// Smartphone received notification
// Tablet received notification

interface Observer{
    update():void;
}
class Smartphone implements Observer{
    update():void{
        console.log("Smartphone received notification")
    }
}
class Tablet implements Observer{
    update():void{
        console.log("Tablet received notification")
    }
}
class NotificationCenter{
    private observers:Observer[]=[]
    
    attach(observer:Observer):void{
        this.observers.push(observer)
        const name=observer.constructor.name
        console.log(`Observer added : ${name}`)
    }
    detach(observer:Observer):void{
        this.observers=this.observers.filter((ele)=>ele!==observer)
    }
    notify():void{
        for(const observer of this.observers){
            observer.update()
        }
    }
}
const smartphone=new Smartphone()
const tablet=new Tablet()
const notificationCenter=new NotificationCenter()
notificationCenter.attach(smartphone)
notificationCenter.attach(tablet)
notificationCenter.notify()

