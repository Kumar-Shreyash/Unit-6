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
    const user=req.user
    const todos=await TodoModel.find({user})
    if(!todos || todos.length===0){
        return res.status(404).json({message:"No Todo found"})
    }
    res.status(200).json({message:"Todos List",todos})
} catch (error) {
    res.status(500).json({message:"Something went wrong"})
}
}

const updateTodo=async(req,res)=>{
    try {
        const {id}=req.params
        const user=req.user
        const todo=await TodoModel.findById(id)
        if(todo.createdBy!==user){
            return res.status(500).json({message:"No todo found"})
        }
        const update=await TodoModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Todo Updated",update})
    } catch (error) {
    res.status(500).json({message:"Something went wrong"})
    }
}

const deleteTodo=async(req,res)=>{
    try {
        const {id}=req.params
        const user=req.user
        const todo=await TodoModel.findById(id)
        if(todo.createdBy!==user){
            return res.status(500).json({message:"No todo found"})
        }
        await TodoModel.findByIdAndDelete(id)
        res.status(200).json({message:"Todo Deleted"})
    } catch (error) {
    res.status(500).json({message:"Something went wrong"})
        
    }
}

module.exports={addTodo, getTodo,updateTodo,deleteTodo }