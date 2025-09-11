interface Notification{
    send(message:string):void;
}

class EmailNotification implements Notification{
    send(message:string):void{
        console.log(`Sending Email : ${message}`)
    }
}

class SMSNotification implements Notification{
    send(message:string):void{
        console.log(`Sending SMS : ${message}`)
    }
}

class PushNotification implements Notification{
    send(message:string):void{
        console.log(`Sending PUSH : ${message}`)
    }
}

class NotificationFactory{
    static CreateNotification(type:string):Notification{
        switch(type.toLowerCase()){
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type")
        }
    }
}

const notifier = NotificationFactory.CreateNotification("Email");
notifier.send("Welcome!"); // Sending EMAIL: Welcome!

const smsNotifier = NotificationFactory.CreateNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456