const express=require("express")
const addTodo = require("../controllers/todo.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const TodoRouter=express.Router()

TodoRouter.post("/",authMiddleware(["member","admin"]),addTodo)

module.exports=TodoRouter