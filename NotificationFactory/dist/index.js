"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailNotification {
    send(message) {
        console.log(`Sending Email : ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending SMS : ${message}`);
    }
}
class PushNotification {
    send(message) {
        console.log(`Sending PUSH : ${message}`);
    }
}
class NotificationFactory {
    static CreateNotification(type) {
        switch (type.toLowerCase()) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid notification type");
        }
    }
}
const notifier = NotificationFactory.CreateNotification("Email");
notifier.send("Welcome!"); // Sending EMAIL: Welcome!
const smsNotifier = NotificationFactory.CreateNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456
//# sourceMappingURL=index.js.map