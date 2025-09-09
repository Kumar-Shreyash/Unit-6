"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MySQLService {
    save(data) {
        console.log("Saving to MySQL:", data);
    }
}
class UserService {
    db;
    constructor(db) {
        this.db = db;
    }
    register(user) {
        this.db.save(user);
    }
}
const sql = new MySQLService();
const userService = new UserService(sql);
userService.register("Alice");
//# sourceMappingURL=index.js.map