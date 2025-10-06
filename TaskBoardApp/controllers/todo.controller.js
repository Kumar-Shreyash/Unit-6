const TodoModel = require("../models/todo.model")

const addTodo=async(req,res)=>{
    try {
        const todo=await TodoModel.create(req.body)
        res.status(201).json({message:"Todo created",todo})
    } catch (error) {
     res.status(500).json({message:"Something went wrong"})   
    }
}

const getTodo=async(req,res)=>{
try {
    
} catch (error) {
    
}
}

module.exports=addTodo