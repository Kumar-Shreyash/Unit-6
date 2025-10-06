const express=require("express")
const {addTodo, getTodo,updateTodo,deleteTodo } = require("../controllers/todo.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const TodoRouter=express.Router()

TodoRouter.post("/",authMiddleware(["member","admin"]),addTodo)

TodoRouter.get("/",authMiddleware(["member","admin"]),getTodo)

TodoRouter.patch("/:id",authMiddleware(["admin"]),updateTodo)

TodoRouter.delete("/",authMiddleware(["admin"]),deleteTodo)

module.exports=TodoRouter