const express=require("express")
const connectToDb = require("./configs/db.config")
const AuthRouter = require("./routes/auth.routes")
const TodoRouter = require("./routes/todo.routes")
const app=express()

app.use(express.json())
connectToDb()

app.use("/auth",AuthRouter)

app.use("/todo",TodoRouter)

app.listen(3000,()=>{
    console.log("Server Running")
})