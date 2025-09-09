interface Database {
  save(data: string): void;
}

class MySQLService implements Database {
  save(data: string): void {
    console.log("Saving to MySQL:", data);
  }
}

class UserService {
  db: Database;

  constructor(db: Database) {
    this.db = db;
  }
  register(user: string) {
    this.db.save(user);
  }
}

const sql=new MySQLService()
const userService=new UserService(sql)
userService.register("Alice")

